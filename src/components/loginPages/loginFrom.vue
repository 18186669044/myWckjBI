<template>
  <div class="loginFromBox">
    <div class="title3">用户登录</div>
    <div class="input_unit">
      <div class="input">
        <input type="text" class="input_value" v-model="userName" placeholder="请输入用户名" />
      </div>
      <div class="icon">
        <div class="iconfont icon-person" style="font-size:20px;margin-left:7px;"></div>
      </div>
    </div>
    <div class="input_unit">
      <div class="input">
        <input
          type="password"
          class="input_value"
          v-model="passWord"
          ref="input1"
          placeholder="请输入密码"
        />
      </div>
      <div class="icon">
        <div class="iconfont icon-lock" style="font-size:20px;margin-left:7px;"></div>
      </div>
      <div class="iconbtn" title="显示/隐藏密码">
        <div :class="className" @click="switchIcon" style="font-size:20px;margin-left:7px;"></div>
      </div>
    </div>
    <div class="input_unit check_input" style="width:152px">
      <div class="input">
        <input type="text" v-model="vcode" class="input_value" placeholder="请输入验证码" />
      </div>
      <div class="icon">
        <div class="iconfont icon-yanzhenglan" style="font-size:20px;margin-left:7px;"></div>
      </div>
      <div class="check_img" @click="refreshValidaeCode()"></div>
    </div>
    <input type="button" value="登录" @click="login" class="_btn" />
  </div>
</template>
<script>
var VID = "";
import $ from "jquery";
const JSEncrypt = require("jsencrypt");
import Cookies from "js-cookie";
export default {
  data() {
    return {
      className: "iconfont icon-xianshi",
      userName: "",
      passWord: "",
      vcode: "",
      loginKeyObj: {},
      vid: ""
    };
  },
  created() {
    window.sessionStorage.setItem("actionClick", 1);
    //回车键直接登录
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      //需要注意的：that.$route.path==''/login'的作用是如果不判断，回车可能所有页面都生效，也就是无论在哪个页面敲回车都会直接登录
      if (that.$route.path == "/login" && keycode == 13) {
        that.login(); // 登录方法名
        return false;
      }
    };
  },
  mounted() {
    this.refreshValidaeCode();
  },
  methods: {
    login() {
      if (this.userName != "" && this.passWord != "" && this.vcode != "") {
        this.loginFrom();
      } else {
        this.$message({
          message: "请输入账号密码以及验证码",
          type: "warning"
        });
      }
    },
    loginFrom() {
      let paramkey = {
        data: {
          login: this.userName,
          password: this.passWord,
          vcode: this.vcode,
          vcodeId: this.vid
        }
      };
      this.loginKey(paramkey);
    },
    loginKey(paramkey) {
      let _this = this;
      this.$ajax
        .get("http://5nwt.com:1102/WCKJAPI_MD/GetPubKey")
        // "http://192.168.2.45:1102/" +
        // .get("http://qywx.hhgs.org.cn:9098/WCKJAPI_MD/GetPubKey")
        .then(res => {
          var encrypt = new JSEncrypt.JSEncrypt({
            default_key_size: 1024
          });
          encrypt.setPublicKey(res.data.data);
          this.loginKeyObj = encrypt.encrypt(JSON.stringify(paramkey.data));
          this.loginFromKey();
        });
    },
    loginFromKey() {
      let par = {
        token: "",
        data: this.loginKeyObj,
        encrypt: true
      };
      this.$apiWckj
        .postLogin("WCKJAPI_MD", "/Login", JSON.stringify(par))
        .then(res => {
          if (res.data) {
            // window.sessionStorage.setItem("token", res.data);
            Cookies.set("token", res.data); // Cookies.set('token', res.data, {expires: 7}); cookie保存7天
            this.$router.push("/Home");
            this.$store.state.fullScreen = true;
          } else {
            this.$notify.error({
              title: "error",
              message: res.message
            });
          }
        });
    },
    switchIcon() {
      this.$refs.input1.type =
        this.className == "iconfont icon-xianshi" ? "text" : "password";
      this.className =
        this.className == "iconfont icon-xianshi"
          ? "iconfont icon-xianshi1"
          : "iconfont icon-xianshi";
    },
    Getvid() {
      var vidrandom = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M"
      ];
      var n = vidrandom.Length;
      for (var i = 0; i < 5; i++) {
        this.vid += vidrandom[parseInt(Math.random() * 62)];
      }
      return this.vid;
    },

    refreshValidaeCode() {
      VID = this.Getvid();
      $(".check_img img").remove();
      var url =
           "http://5nwt.com:1102/"+
        // "http://qywx.hhgs.org.cn:9098/" +
        // "http://192.168.2.45:1102/" +
        // "http://qywx.hhgs.org.cn:1202/" +
        "WCKJAPI_MD/" +
        'GetValidateCode/{"data":"' +
        VID +
        '"}';
      $(".check_img").append(
        "<img class='img_vcode' style='width:83px;height:33px;' src='" +
          url +
          "' />"
      );
    }
  }
};
</script>
<style lang="less" scoped>
.loginFromBox {
  // height: 340px;
  // width: 315px;
  // background-color: #fff;
  // position: absolute;
  // right: 32px;
  // top: 50%;
  // transform: translateY(-50%);
  // box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.24);
  // border-radius: 2px;
  // padding: 28px 36px 36px 36px;
  .title3 {
    height: 48px;
    font-size: 32px;
    line-height: 48px;
    color: #23b8e1;
    margin-bottom: 24px;
    /* text-shadow: 0 4px 8px rgba(0,0,0,0.3); */
  }
  .input_unit {
    display: block;
    height: 36px;
    line-height: 32px;
    font-size: 14px;
    margin: 5px 0;
    border: solid 1px #c0cddd;
    position: relative;
    .input {
      display: block;
      width: 100%;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      position: absolute;
      top: 0;
      .input_value {
        border: none;
        display: block;
        height: 34px;
        width: 100%;
        line-height: 34px;
        padding: 0 12px 0 52px !important;
      }
      input {
        background: rgba(57, 61, 82, 0);
        color: #61bfff !important;
        border-top: 2px solid rgba(57, 61, 82, 0);
        border-bottom: 2px solid rgba(57, 61, 82, 0);
        border-right: none;
        border-left: none;
        outline: none;
        font-family: "Gudea", sans-serif;
        box-shadow: none;
      }
      input::-webkit-input-placeholder {
        /* WebKit browsers */

        color: #97a8be;
      }

      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */

        color: #97a8be;
      }

      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */

        color: #97a8be;
      }

      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */

        color: #97a8be;
      }
    }
    .icon {
      display: block;
      width: 40px;
      position: absolute;
      left: 0;
      height: 36px;
      line-height: 32px;
      border-right: solid 1px #c0cddd;
      text-align: center;
      font-size: 20px;
      color: #97a8be;
      z-index: 66;
      .iconfont {
        font-family: iconfont !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
    .iconbtn {
      display: block;
      width: 32px;
      position: absolute;
      right: 0;
      height: 36px;
      line-height: 32px;
      text-align: center;
      font-size: 20px;
      color: #97a8be;
      z-index: 66;
    }
    .check_img {
      display: block;
      width: 98px;
      position: absolute;
      right: -98px;
      top: -1px;
      height: 35px;
      text-align: center;
      color: #97a8be;
      z-index: 66;
      .img_vcode {
        box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
        border: 1px solid solid;
      }
    }
  }
  ._btn {
    display: block;
    height: 36px;
    background-color: #20a0ff;
    text-align: center;
    font-size: 16px;
    margin-top: 24px;
    color: #fff;
    width: 100%;
    border: none;
    outline: none;
  }
}
[class*=" icon-"][class*=" icon-"]:before,
[class*=" icon-"][class^="icon-"]:before,
[class^="icon-"][class*=" icon-"]:before,
[class^="icon-"][class^="icon-"]:before {
  display: inline-block;
  margin-top: -4px;
  margin-right: 5px;
  margin-left: -1px;
}
[class*=" icon-"][class*=" icon-"]:before,
[class*=" icon-"][class^="icon-"]:before,
[class^="icon-"][class*=" icon-"]:before,
[class^="icon-"][class^="icon-"]:before {
  display: inline-block;
  margin-top: -4px;
  margin-right: 5px;
  margin-left: -1px;
}
[class*=" icon-"]:before,
[class^="icon-"]:before {
  vertical-align: middle;
}
// .icon-person:before {
//   content: "\e71c";
// }
[class*=" icon-"]:before,
[class^="icon-"]:before {
  vertical-align: middle;
}
// .icon-person:before {
//   content: "\e71c";
// }
*,
:after,
:before {
  box-sizing: border-box;
}
*,
:after,
:before,
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: border-box;
}
*,
:after,
:before,
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>