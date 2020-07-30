<template>
  <div class="helpCon">
    <div class="ind-z1 ind-bg1 cur1-com1 helpCon-l">
      <div class="tabrel01">
        <div class="tit-1">
          <h3>
            <span>事件动态</span>
          </h3>
        </div>
        <div class="tabrel01-desc">
          <div class="tabrel01-item tabrel01-item__on">
            <ul class="list-8">
              <li
                v-for="(arr,index) in warnList"
                :key="index"
                @mouseenter="enter(index)"
                @mouseleave="leave()"
                :class="liHoverNum==index?'liHoverCss':''"
              >
                <a href="javascript:void(0)">
                  <div class="state">
                    <i
                      id="icon"
                      :class="[(arr.type=='事件'?'icon-l3':(arr.type=='预警'?'icon-l1':'icon-l2'))]"
                    ></i>
                    {{arr.type}}
                  </div>
                  <div class="date">{{arr.name.substring(0,4)}}</div>
                  <h4>{{arr.text}}</h4>
                </a>
              </li>
            </ul>
          </div>
          <div class="btn">
            <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">未处置</span>
            <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">已处置</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com1 helpCon-r">
      <div class="tit-1">
        <h3>
          <span>应急救援物资数量统计</span>
        </h3>
      </div>
      <div class="total-num3">
        <div class="item1">
          <div class="num">
            <number-grow :value="dataObj.material"></number-grow>
          </div>
          <h4>救援物资（仓库）</h4>
        </div>
        <div class="item2">
          <div class="num">
            <number-grow :value="dataObj.cars"></number-grow>
          </div>
          <h4>救援车辆（辆）</h4>
        </div>
        <div class="item3">
          <div class="num">
            <number-grow :value="dataObj.alongLine"></number-grow>
          </div>
          <h4>其他沿线应急力量（支）</h4>
        </div>
        <div class="item4">
          <div class="num">
            <number-grow :value="dataObj.company"></number-grow>
          </div>
          <h4>救援单位（个）</h4>
        </div>
        <div class="item5">
          <div class="num">
            <number-grow :value="dataObj.plans"></number-grow>
          </div>
          <h4>应急预案（个）</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberGrow from "./../tools/numberGrow";
export default {
  components: {
    numberGrow
  },
  data() {
    return {
      spanAction: "",
      liHoverNum: null,
      warnList: [],
      dataList: [],
      dataObj: {}
    };
  },
  mounted() {
    this.AlreadyEmergeEvent();
    this.AlreadyEmergeEventmaterial();
  },
  methods: {
    AlreadyEmergeEvent() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/AlreadyEmergeEvent", { param: param })
        .then(res => {
          this.dataList = res.data;
          res.data.forEach(val => {
            if (val.eventtype == "未处置") {
              this.warnList.push(val);
            }
          });
        });
    },
    AlreadyEmergeEventmaterial() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/AlreadyEmergeEventmaterial", {
          param: param
        })
        .then(res => {
          this.dataObj = res.data;
        });
    },
    actionClickEven(index) {
      this.warnList = [];
      if (index == 0) {
        this.dataList.forEach(val => {
          if (val.eventtype == "未处置") {
            this.warnList.push(val);
          }
        });
      } else {
        this.dataList.forEach(val => {
          if (val.eventtype == "已处置") {
            this.warnList.push(val);
          }
        });
      }
      this.spanAction = index;
    },
    enter(index) {
      this.liHoverNum = index;
    },
    leave() {
      this.liHoverNum = null;
    }
  }
};
</script>
<style lang="less" scoped>
.helpCon {
  height: 100%;
  padding-right: 10px;
  .helpCon-l {
    // height: 323px;
    height: 50%;
    width: 100%;
    overflow: hidden;
  }
  .helpCon-r {
    // height: 282px;
    height: 47.5%;
    width: 100%;
  }
}
.total-num3 {
  margin: 0 auto;
  width: 542px;
  height: 237px;
  background: url(../../../src/assets/img/totalN3-bg1.png) center bottom
    no-repeat;
  position: relative;
  .item1,
  .item2,
  .item3,
  .item4,
  .item5 {
    padding: 4px 0 5px;
    position: absolute;
    width: 154px;
    background: url(../../../src/assets/img/totalN3-bg2.png) center center
      no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .item1 {
    top: 0;
    left: 50%;
    margin-left: -76.5px;
  }
  .item2 {
    top: 56px;
    right: 0;
  }
  .item3 {
    top: 163px;
    right: 0;
  }
  .item4 {
    top: 56px;
    left: 0;
  }
  .item5 {
    top: 163px;
    left: 0;
  }
  .num {
    font-size: 24px;
    color: #ffcd06;
    text-align: center;
    line-height: 1.1;
    font-family: DIGIB;
  }
  h4 {
    font-size: 14px;
    color: #00c3f3;
    font-weight: 400;
    text-align: center;
  }
}
.tabrel01 {
  position: relative;
  .tabrel01-tit {
    position: absolute;
    left: 11px;
    top: 7px;
    z-index: 3;
    .tabrel01-item {
      float: left;
      .subitem {
        padding: 0 12px;
        display: block;
        min-width: 50px;
        font-size: 13px;
        color: #1ba0c2;
        line-height: 26px;
        text-align: center;
        background-color: #0b5a92;
        cursor: pointer;
      }
      .tabrel01-item__on {
        height: auto;
        visibility: visible;
        .subitem {
          background-color: #00c1f3;
          color: #d9f7ff;
        }
      }
    }
  }
}

.list-8 {
  padding-top: 3px;
  li:nth-child(odd) {
    background-color: rgba(11, 90, 146, 0.4);
  }
  .liHoverCss {
    background-color: rgba(15, 215, 176, 0.3) !important;
  }
  .liHoverCss:after {
    content: "";
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 100%;
    background-color: rgba(15, 215, 176, 0.3);
    // border: 7px solid;
    // border-color: transparent transparent transparent rgba(15, 215, 176, 0.3);
  }
  li {
    line-height: 40px;
    position: relative;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    padding-right: 4px;
  }
  a {
    display: block;
    overflow: hidden;
  }
  .state {
    padding: 0 12px;
    float: left;
    font-size: 14px;
    color: #d9f7ff;
    background: url(../../../src/assets/img/l7-line1.png) right center no-repeat;
    #icon {
      margin: -2px 10px 0 0;
      display: inline-block;
      vertical-align: middle;
      width: 24px;
      height: 24px;

      background-repeat: no-repeat;
      background-position: center center;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .icon-l1 {
      background: url(./../../assets/img/l7-i1.png);
    }
    .icon-l2 {
      background: url(./../../assets/img/l7-i2.png);
    }
    .icon-l3 {
      background: url(./../../assets/img/l7-i3.png);
    }
  }
  .date {
    margin-left: 24px;
    padding-right: 24px;
    width: 110px;
    text-align: right;
    float: right;
    font-size: 13px;
    color: #00c3f3;
    background: url(../../../src/assets/img/icon-date.png) right center
      no-repeat;
    position: relative;
  }
  .date:before {
    margin-top: -7px;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 14px;
    background: url(../../../src/assets/img/l7-line1.png) center center
      no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  h4 {
    padding: 0 16px;
    font-size: 14px;
    color: #d9f7ff;
    font-weight: 400;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
a {
  color: #333;
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}

.btn {
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
  span {
    padding: 0 5px;
    display: inline-block;
    min-width: 50px;
    font-size: 13px;
    color: #1ba0c2;
    line-height: 26px;
    text-align: center;
    margin: 10px 1px 0 5px;
    background-color: #0b5a92;
    cursor: pointer;
  }
}
.btspanboxAction {
  background-color: #00c1f3 !important;
  color: #d9f7ff !important;
}
/deep/.number-grow {
  width: 80px;
  height: 26px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 26px;
}
</style>