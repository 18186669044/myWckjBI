<template>
  <div class="hhBI-header">
    <div class="h-col">
      <ul>
        <li>
          <a
            href="javascript:void(0)"
            :class="[actionHover==1?'activeHover':'',actionClick==1?'activeHover':'']"
            @mouseenter="enter(1)"
            @mouseleave="leave()"
            @click="actionClickEven(1)"
          >首 页</a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            :class="[actionHover==2?'activeHover':'',actionClick==2?'activeHover':'']"
            @mouseenter="enter(2)"
            @mouseleave="leave()"
            @click="actionClickEven(2)"
          >运 营</a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            :class="[actionHover==3?'activeHover':'',actionClick==3?'activeHover':'']"
            @mouseenter="enter(3)"
            @mouseleave="leave()"
            @click="actionClickEven(3)"
          >养 护</a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            :class="[actionHover==4?'activeHover':'',actionClick==4?'activeHover':'']"
            @mouseenter="enter(4)"
            @mouseleave="leave()"
            @click="actionClickEven(4)"
          >应 急</a>
        </li>
      </ul>
    </div>
    <div class="h-com">
      <h2>智慧黄黄 - 大数据可视化</h2>
      <dv-decoration-5 class="dy-title" :color="['#00c1f3', '#f0bc85']" />
    </div>
    <div class="h-cor">
      <a href="javascript:void(0)" class="weather">
        <i :style="note"></i>
        {{weather}}
      </a>
      <em>|</em>
      <div class="date">{{currentTime.length?currentTime:''}}</div>
      <em>|</em>
      <div class="admin">
        <a href="javascript:void(0)" @click="show3 = !show3" class="name">
          <i></i>
          {{getmeObj.UNAME?getmeObj.UNAME:'管理员'}}
        </a>
      </div>
    </div>
    <div class="transitionMax">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <el-button type="text" @click="getme">用户信息</el-button>
          </div>
          <div class="transition-box">
            <el-button type="text" @click="outlogin">退出</el-button>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <el-dialog
      title="用户信息"
      :visible.sync="dialogVisible"
      :modal="false"
      style="margin-top:6vh;"
      width="20%"
      :destroy-on-close="true"
      :before-close="handleClose"
    >
      <div v-if="dialogVisible">
        <div class="coom">
          <div class="fl">名称：</div>
          <div class="fr">{{getmeObj.UNAME}}</div>
        </div>
        <div class="coom">
          <div class="fl">部门：</div>
          <div class="fr">{{getmeObj.MD_DEPARTMENT.DENAME?getmeObj.MD_DEPARTMENT.DENAME:''}}</div>
        </div>
        <div class="coom">
          <div class="fl">性别：</div>
          <div class="fr">{{getmeObj.MD_USERINFO[0].SEXTEXT?getmeObj.MD_USERINFO[0].SEXTEXT:''}}</div>
        </div>
        <div class="coom">
          <div class="fl">职位：</div>
          <div class="fr">{{getmeObj.POSITION?getmeObj.POSITION:''}}</div>
        </div>
        <div class="coom">
          <div class="fl">年龄：</div>
          <div class="fr">{{getmeObj.MD_USERINFO[0].AGE?getmeObj.MD_USERINFO[0].AGE:''}}</div>
        </div>
        <div class="coom">
          <div class="fl">电话：</div>
          <div class="fr">{{getmeObj.MD_USERINFO[0].PHONE?getmeObj.MD_USERINFO[0].PHONE:''}}</div>
        </div>
        <div class="coom">
          <div class="fl">邮箱：</div>
          <div class="fr">{{getmeObj.MD_USERINFO[0].EMAIL?getmeObj.MD_USERINFO[0].EMAIL:''}}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      actionHover: null,
      actionClick: 1,
      show3: false,
      timer: "", //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      dialogVisible: false,
      getmeObj: {},
      weather: "",
      note: {}
    };
  },
  watch: {
    "$store.state.navAction": function(newVal, oldVal) {
      this.actionClick = newVal;
    },
    actionClick: function(newVal) {
      this.actionClick = newVal;
      window.sessionStorage.setItem("actionClick", newVal);
    }
  },
  created() {
    this.actionClick = window.sessionStorage.getItem("actionClick");
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function() {
      _this.currentTime = //修改数据date
        new Date().getFullYear() +
        "年" +
        (new Date().getMonth() + 1 > 9
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1)) +
        "月" +
        (new Date().getDate() > 9
          ? new Date().getDate()
          : "0" + new Date().getDate()) +
        "日 " +
        (new Date().getHours() > 9
          ? new Date().getHours()
          : "0" + new Date().getHours()) +
        ":" +
        (new Date().getMinutes() > 9
          ? new Date().getMinutes()
          : "0" + new Date().getMinutes()) +
        ":" +
        (new Date().getSeconds() > 9
          ? new Date().getSeconds()
          : "0" + new Date().getSeconds());
    }, 1000);
  },
  mounted() {
    this.$ajax.get("http://ip-api.com/json/?lang=zh-CN").then(res => {
      this.weatherType(res.data.city);
    });
    this.userInfo();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    weatherType(city) {
      this.$ajax
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
        .then(res => {
          let type = "";
          let imgSrc = "";
          type = res.data.data.forecast[0].type;
          this.weather = type;
          if (type.indexOf("晴") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/1.png") + ")"
            };
          } else if (type.indexOf("多云") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/2.png") + ")"
            };
          } else if (type.indexOf("阴") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/3.png") + ")"
            };
          } else if (type.indexOf("雨") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/4.png") + ")"
            };
          } else if (type.indexOf("雪") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/5.png") + ")"
            };
          } else if (type.indexOf("雨夹雪") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/6.png") + ")"
            };
          } else if (type.indexOf("雾") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/7.png") + ")"
            };
          } else if (type.indexOf("霾") >= 0) {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/7.png") + ")"
            };
          } else {
            this.note = {
              backgroundImage:
                "url(" + require("./../assets/img/weather/8.png") + ")"
            };
          }
        });
    },
    enter(index) {
      this.actionHover = index;
    },
    leave() {
      this.actionHover = null;
    },
    actionClickEven(index) {
      this.$store.state.navAction = index;
      window.sessionStorage.setItem("actionClick", index);
      if (index == 1) {
        this.$router.push("/Home");
      } else if (index == 2) {
        this.$router.push("/operate");
      } else if (index == 3) {
        this.$router.push("/curing");
      } else if (index == 4) {
        this.$router.push("/helpEmer");
      }
    },
    outlogin() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_MD", "/LoginOut", { param: param })
        .then(res => {
          if (res.code == 0) {
            Cookies.remove("token");
            // window.sessionStorage.setItem("actionClick", 1);
            this.$router.push("/");
          }
        });
    },
    getme() {
      this.show3 = false;
      this.dialogVisible = true;
      this.userInfo();
    },
    userInfo() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_MD", "/GetUserInfo", { param: param })
        .then(res => {
          this.getmeObj = res.data;
        });
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.hhBI-header {
  width: 100%;
  // height: 80px;
  height: 7.4vh;
  position: relative;
  background: url("./../assets/img/header-bg1.png");
  background-position: center center;
  -webkit-background-size: cover;
  background-size: cover;
  overflow: hidden;
  display: flex;
  color: #fff;
  .h-col {
    flex: 1;
    ul {
      padding: 0;
      margin: 5px 0 0 14px;
      li {
        display: inline-block;

        padding-top: 11px;
        margin-right: 20px;
        position: relative;
        a {
          padding: 4px 10px 0;
          display: block;

          text-align: center;

          color: #00e4ff;
          background: url("./../assets/img/nav-bg1.png") center center no-repeat;
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
          position: relative;
          z-index: 1;
        }
        .activeHover {
          color: #ffcd06;
          background: url("./../assets/img/nav-bg2.png") center center no-repeat !important;
          // transform: rotateY(180deg);
          // transition:1s;
          // -ms-transform: rotateY(180deg); /* IE 9 */
          // -moz-transform: rotateY(180deg); /* Firefox */
          // -webkit-transform: rotateY(180deg); /* Safari 和 Chrome */
          // -o-transform: rotateY(180deg); /* Opera */
        }
      }
      li:before {
        margin-left: -1px;
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 2px;
        height: 13px;
        background-color: #065f82;
        z-index: 2;
      }
    }
  }
  .h-com {
    flex: 1;
    font-size: 29px;
    text-align: center;
    line-height: 60px;
    background: linear-gradient(
      0deg,
      rgba(164, 235, 255, 1) 0,
      rgba(212, 245, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .h-cor {
    flex: 1;
    line-height: 70px;
    text-align: right;
    .weather {
      font-size: 18px;
      color: #00e4ff;
      padding: 0 20px;
      i {
        margin: -2px 8px 0 0;
        display: inline-block;
        vertical-align: middle;
        width: 34px;
        height: 24px;

        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
    em {
      margin-top: -2px;
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      color: #00c1f3;
    }
    .date {
      display: inline-block;
      font-size: 18px;
      color: #00e4ff;
      padding: 0 20px;
      vertical-align: middle;
    }
    .admin {
      padding: 0 20px;
      display: inline-block;
      vertical-align: middle;
      display: inline-block;
      vertical-align: middle;
      .name {
        display: block;
        font-size: 16px;
        color: #00e4ff;
        max-width: 210px;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        i {
          background-image: url("./../assets/img/icon-admin.png");
          margin: -2px 9px 0 0;
          display: inline-block;
          vertical-align: middle;
          width: 26px;
          height: 26px;
          background-repeat: no-repeat;
          background-position: center center;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
    }
  }
}
.transitionMax {
  position: fixed;
  top: 70px;
  right: -15px;
  z-index: 1;
}
.transition-box {
  margin-bottom: 10px;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(15, 129, 218, 0.8);
  text-align: center;
  margin-right: 20px;
}
/deep/.el-button--text {
  color: #fff;
}
.dy-title {
  position: absolute;
  left: 50%;
  top: 36px;
  transform: translateX(-50%);
}

//对话框
/deep/.el-dialog {
  background: -ms-linear-gradient(
    top,
    rgba(247, 247, 247, 0.281),
    rgba(0, 193, 222, 0.3)
  ); /* IE 10 */
  background: -moz-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8),
    rgba(0, 193, 222, 0.3)
  ); /*火狐*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgba(170, 204, 238, 0.8)),
    to(rgba(0, 193, 222, 0.3))
  ); /*谷歌*/
  background: -webkit-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8),
    rgba(0, 193, 222, 0.3)
  ); /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8) 0%,
    rgba(0, 193, 222, 0.3) 10%
  ); /*Opera 11.10+*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgba(2, 148, 245, 0.89)),
    to(rgba(0, 192, 222, 0.575))
  ); /*谷歌*/
}

/deep/.el-dialog__close {
  color: rgba(247, 247, 247, 1) !important;
  font-weight: 700;
}
/deep/.el-dialog__title {
  color: rgba(247, 247, 247, 0.877);
}

/deep/.el-dialog__header {
}
/deep/.el-dialog__body {
  color: rgba(247, 247, 247, 0.973);
}
/deep/.el-col-12 {
  padding: 0 50px;
}
/deep/.el-col-24 {
  padding: 0 50px;
}
/deep/.el-dialog__wrapper {
  transition-duration: 0.3s !important;
}
/deep/.dialog-fade-enter-active {
  animation: none !important;
}
/deep/.dialog-fade-leave-active {
  transition-duration: 0.15s !important;
  animation: none !important;
}

/deep/.dialog-fade-enter-active /deep/.el-dialog,
/deep/.dialog-fade-leave-active /deep/.el-dialog {
  animation-fill-mode: forwards !important;
}

/deep/.dialog-fade-enter-active /deep/.el-dialog {
  animation-duration: 0.3s !important;
  animation-name: anim-open !important;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1) !important;
}

/deep/.dialog-fade-leave-active /deep/.el-dialog {
  animation-duration: 0.3s !important;
  animation-name: anim-close !important;
}

@keyframes anim-open {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes anim-close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 1);
  }
}

.fr-mar {
  float: left;
  margin-left: 150px;
}
.coom {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 50px;
  .fr {
    text-align: left;
    width: 50%;
  }
}
</style>