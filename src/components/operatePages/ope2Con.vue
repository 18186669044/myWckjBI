<template>
  <div class="ope2Con">
    <div class="ind-bg1 ind-z1 ope2-con1">
      <div class="tit-1">
        <h3>
          <span>路段车流量统计（万次）</span>
        </h3>
      </div>
      <ul class="carFlow">
        <li class="carFlowTotal">
          <h3>
            <number-grow v-if="childData" :value="carFlowObj.ZCLL"></number-grow>
          </h3>
          <span>总车流量</span>
        </li>
        <li>
          <div class="hed">黄黄路段</div>
          <span>
            总车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.HHZCLL"></number-grow>
            </i>
          </span>
          <span>
            货车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.HHHCLL"></number-grow>
            </i>
          </span>
          <span>
            客车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.HHKCLL"></number-grow>
            </i>
          </span>
          <span>
            其他车次
            <i>
              <number-grow v-if="childData" :value="carFlowObj.HHQTCC"></number-grow>
            </i>
          </span>
        </li>
        <li>
          <div class="hed">麻武路段</div>
          <span>
            总车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.MWZCLL"></number-grow>
            </i>
          </span>
          <span>
            货车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.MWHCLL"></number-grow>
            </i>
          </span>
          <span>
            客车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.MWKCLL"></number-grow>
            </i>
          </span>
          <span>
            其他车次
            <i>
              <number-grow v-if="childData" :value="carFlowObj.MWQTCC"></number-grow>
            </i>
          </span>
        </li>
        <li>
          <div class="hed">武英路段</div>
          <span>
            总车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.WYZCLL"></number-grow>
            </i>
          </span>
          <span>
            货车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.WYHCLL"></number-grow>
            </i>
          </span>
          <span>
            客车流量
            <i>
              <number-grow v-if="childData" :value="carFlowObj.WYKCLL"></number-grow>
            </i>
          </span>
          <span>
            其他车次
            <i>
              <number-grow v-if="childData" :value="carFlowObj.WYQTCC"></number-grow>
            </i>
          </span>
        </li>
      </ul>
      <div class="btn">
        <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">今日</span>
        <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">本周</span>
        <span :class="spanAction==2?'btspanboxAction':''" @click="actionClickEven(2)">本月</span>
      </div>
    </div>
    <div class="ind-bg1 ind-z1 ope2-con2">
      <div class="tit-1">
        <h3>
          <span>免费车统计</span>
        </h3>
      </div>
      <div class="free">
        <div class="freeLeft fl">
          <div class="money">
            <div class="moneyTop">
              <span>
                <number-grow :value="carFreeTotalObj.ZJE"></number-grow>
              </span>
              <i>总免费金额（万元）</i>
            </div>
            <div class="moneyBot">
              <div class="box1">
                <span>
                  <number-grow :value="carFreeTotalObj.MWJE"></number-grow>
                </span>
                <i>麻武路段</i>
              </div>
              <div class="box2">
                <span>
                  <number-grow :value="carFreeTotalObj.HHJE"></number-grow>
                </span>
                <i>黄黄路段</i>
              </div>
              <div class="box3">
                <span>
                  <number-grow :value="carFreeTotalObj.WYJE"></number-grow>
                </span>
                <i>武英路段</i>
              </div>
            </div>
          </div>
          <div class="car">
            <div class="moneyTop">
              <span>
                <number-grow :value="carFreeTotalObj.ZLL"></number-grow>
              </span>
              <i>免费车总流量（次）</i>
            </div>
            <div class="moneyBot">
              <div class="box1">
                <span>
                  <number-grow :value="carFreeTotalObj.MWLL"></number-grow>
                </span>
                <i>麻武路段</i>
              </div>
              <div class="box2">
                <span>
                  <number-grow :value="carFreeTotalObj.HHLL"></number-grow>
                </span>
                <i>黄黄路段</i>
              </div>
              <div class="box3">
                <span>
                  <number-grow :value="carFreeTotalObj.WYLL"></number-grow>
                </span>
                <i>武英路段</i>
              </div>
            </div>
          </div>
        </div>
        <div class="freeRight fr">
          <div class="table-1">
            <dv-scroll-board :config="config" style="height:158px;" />
          </div>
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
      carFlowObj: {},
      childData: true,
      carFreeTotalObj: {},
      config: {
        header: ["免费车类型", "流量（次）", "免费金额（万元）"],
        data: [
          ["军警车", 1000, 1.53],
          ["国安车", 100, 1.3],
          ["内部车辆", 100, 0.56],
          ["临时免费", 233, 5],
          ["军警车", 1000, 1.53],
          ["国安车", 100, 1.3],
          ["内部车辆", 100, 0.56],
          ["临时免费", 233, 5]
        ],
        rowNum: 4,
        headerBGC: "#094f84",
        oddRowBGC: "#063e6d",
        evenRowBGC: "#063e6d",
        headerHeight: 30,
        align: [
          "center",
          "center",
          "center",
          "center",
          "center",
          "center",
          "center",
          "center"
        ]
      }
    };
  },
  mounted() {
    this.actionClickEven(0);
    this.carFreeTotal();
    this.carFreeTotalList();
  },
  methods: {
    actionClickEven(index) {
      this.spanAction = index;
      this.carFlowEven(index);
    },
    carFlowEven(i) {
      this.childData = false;
      setTimeout(() => {
        this.childData = true;
      }, 100);
      let param = { data: i };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_SectionTrafficFlow", {
          param: param
        })
        .then(res => {
          this.carFlowObj = {
            ZCLL: Number(res.data.ZCLL),
            HHZCLL: Number(res.data.HHZCLL),
            HHHCLL: Number(res.data.HHHCLL),
            HHKCLL: Number(res.data.HHKCLL),
            HHQTCC: Number(res.data.HHQTCC),
            WYZCLL: parseFloat(res.data.WYZCLL),
            WYHCLL: Number(res.data.WYHCLL),
            WYKCLL: Number(res.data.WYKCLL),
            WYQTCC: Number(res.data.WYQTCC),
            MWZCLL: Number(res.data.MWZCLL),
            MWHCLL: Number(res.data.MWHCLL),
            MWKCLL: Number(res.data.MWKCLL),
            MWQTCC: Number(res.data.MWQTCC)
          };
        });
    },
    carFreeTotal() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_FreeTrafficAmount", {
          param: param
        })
        .then(res => {
          this.carFreeTotalObj = {
            ZJE: Number(res.data.ZJE),
            HHJE: Number(res.data.HHJE),
            MWJE: Number(res.data.MWJE),
            WYJE: Number(res.data.WYJE),
            ZLL: Number(res.data.ZLL),
            HHLL: Number(res.data.HHLL),
            MWLL: Number(res.data.MWLL),
            WYLL: Number(res.data.WYLL)
          };
        });
    },
    carFreeTotalList() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_FreeTypeMount", {
          param: param
        })
        .then(res => {
          let configList=res.data
          this.config = {
            header: ["免费车类型", "流量（次）", "免费金额（万元）"],
            data: configList,
            rowNum: 4,
            headerBGC: "#094f84",
            oddRowBGC: "#063e6d",
            evenRowBGC: "#063e6d",
            headerHeight: 30,
            align: [
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
              "center"
            ]
          };
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ope2Con {
  width: 100%;
  height: 100%;
  position: relative;
  /deep/.ind-z1 {
    background-size: auto 5px;
  }
}
.ope2-con1 {
  width: 43.3%;
  height: 100%;
  float: left;
  .carFlow {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 160px;
    li {
      float: left;
      // text-align: center;
      width: 25%;
      height: 160px;
      border: 1px solid #0a598f;
      list-style: none;
      .hed {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        background-color: #094e81;
      }
      span {
        color: #00c3f3;
        display: block;
        height: 32px;
        line-height: 32px;
        background: url("./../../assets/img/line-bg1.png") center bottom
          no-repeat;
        -webkit-background-size: 95% 1px;
        background-size: 95% 1px;
        padding: 0 5px;
        i {
          float: right;
          font-family: DIGIB;
          color: #ffcd06;
          font-size: 20px;
          width: 56px;
          overflow: hidden;
          text-align: right;
        }
      }
    }
    .carFlowTotal {
      color: #00b9e8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;
      overflow: hidden;
      h3 {
        font-family: DIGIB;
        color: #ffcd06;
        font-size: 46px;
        width: 150px;
        text-align: center;
        overflow: hidden;
      }
      span {
        background: none;
      }
    }
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
}
.ope2-con2 {
  width: 56.2%;
  margin-left: 0.5%;
  height: 100%;
  float: left;
  .free {
    width: 100%;
    height: 165px;
    .freeLeft {
      width: 61%;
      height: 100%;
      border-top: 1px solid #0a598f;
      border-right: 1px solid #0a598f;
      .money,
      .car {
        width: 50%;
        height: 100%;
        border-right: 1px solid #0a598f;
        display: inline-block;
        .moneyTop {
          width: 100%;
          height: 80px;
          text-align: center;
          background: url("./../../assets/img/line-bg1.png") center bottom
            no-repeat;
          -webkit-background-size: 95% 1px;
          background-size: 95% 1px;
          padding: 0 5px;
          span {
            display: block;
            font-family: DIGIB;
            color: #ffcd06;
            font-size: 30px;
            width: 150px;
            text-align: center;
            overflow: hidden;
            margin: 0 auto;
          }
          i {
            color: #00c3f3;
          }
        }
        .moneyBot {
          width: 100%;
          margin-top: 10px;
          text-align: center;
          .box1,
          .box2,
          .box3 {
            display: inline-block;
            width: 33%;
            border-right: 1px solid #0a598f;
            span {
              display: block;
              font-family: DIGIB;
              color: #ffcd06;
              font-size: 20px;
            }
            i {
              color: #00c3f3;
            }
          }
          .box3 {
            border-right: none;
          }
        }
      }
    }
    .freeRight {
      width: 39%;
      height: 100%;
      .table-1 {
        height: 80%;
        /deep/.dv-scroll-board {
          .header {
            color: #d9f7ff;
          }
          .rows {
            color: #00c3f3;
            .row-item {
              background: url("./../../assets/img/line-bg1.png") center bottom
                no-repeat;
              -webkit-background-size: 95% 1px;
              background-size: 95% 1px;
            }
          }
        }
      }
    }
  }
}
.btspanboxAction {
  background-color: #00c1f3 !important;
  color: #d9f7ff !important;
}

/deep/.number-grow {
  display: inline-block;
  line-height: 0;
}
/deep/.number-grow-warp {
  width: 100%;
  display: initial;
}
</style>