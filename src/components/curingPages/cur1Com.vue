<template>
  <div class="cur1Com">
    <div class="ind-z1 ind-bg1 cur1-com1">
      <div class="tit-1">
        <h3>
          <span>养护总里程统计</span>
        </h3>
      </div>
      <div class="total-num2 total-num2-2">
        <div class="num-top">
          <div class="num">
            <span>
              <number-grow v-if="childData" :value="curingStaObj.ZLC"></number-grow>
            </span>
          </div>
          <h4>养护总里程（km）</h4>
        </div>
        <ul class="list-7">
          <li>
            <div class="num">
              <span>
                <number-grow v-if="childData" :value="curingStaObj.MWLD"></number-grow>
              </span>
            </div>
            <h4>麻武路段</h4>
          </li>
          <li class="liatbe">
            <div class="num">
              <span>
                <number-grow v-if="childData" :value="curingStaObj.HHLD"></number-grow>
              </span>
            </div>
            <h4>黄黄路段</h4>
          </li>
          <li>
            <div class="num">
              <span>
                <number-grow v-if="childData" :value="curingStaObj.WYLD"></number-grow>
              </span>
            </div>
            <h4>武英路段</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com2">
      <div class="tit-1">
        <h3>
          <span>养护基础数量统计</span>
        </h3>
      </div>
      <div class="total-num2 total-num2-2">
        <div class="item">
          <ul class="list-7 list-7-col4">
            <li>
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.QLS"></number-grow>
                </span>
              </div>
              <h4>桥梁数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.BPS"></number-grow>
                </span>
              </div>
              <h4>边坡数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.HTS"></number-grow>
                </span>
              </div>
              <h4>互通数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.YHZS"></number-grow>
                </span>
              </div>
              <h4>养护站数</h4>
            </li>
          </ul>
        </div>
        <div class="item">
          <ul class="list-7 list-7-col4">
            <li>
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.SDS"></number-grow>
                </span>
              </div>
              <h4>隧道数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.HDS"></number-grow>
                </span>
              </div>
              <h4>涵洞数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.ZDS"></number-grow>
                </span>
              </div>
              <h4>匝道数</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.SFZS"></number-grow>
                </span>
              </div>
              <h4>收费站数</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com3">
      <div class="tit-1">
        <h3>
          <span>本年养护任务执行情况</span>
        </h3>
      </div>
      <div class="total-num2 total-num2-3">
        <div class="item2">
          <h3 class="tit">养护任务数</h3>
          <ul class="list-7 list-7-col2">
            <li>
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.RWZXZ"></number-grow>
                </span>
              </div>
              <h4>任务执行中</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.RWYWC"></number-grow>
                </span>
              </div>
              <h4>任务已完成</h4>
            </li>
          </ul>
        </div>
        <div class="item2">
          <h3 class="tit">养护出勤统计</h3>
          <ul class="list-7 list-7-col2">
            <li>
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.CQCC"></number-grow>
                </span>
              </div>
              <h4>出勤车次</h4>
            </li>
            <li class="liafter">
              <div class="num">
                <span>
                  <number-grow v-if="childData" :value="curingStaObj.CQRS"></number-grow>
                </span>
              </div>
              <h4>出勤人次</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com4">
      <div class="tit-1">
        <h3>
          <span>养护施工情况</span>
        </h3>
      </div>
      <ul class="list-5 list-5-col2">
        <li class="libgnone">
          <div class="con">
            <div class="num">
              <span>
                <number-grow v-if="childData" :value="curingStaObj.SGZ"></number-grow>
              </span>
            </div>
            <h4>施工中</h4>
          </div>
        </li>
        <li>
          <div class="con">
            <div class="num">
              <span>
                <number-grow v-if="childData" :value="curingStaObj.YYS"></number-grow>
              </span>
            </div>
            <h4>施工中</h4>
          </div>
        </li>
      </ul>
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
      curingStaObj: {},
      childData: true
    };
  },
  mounted() {
    this.curingStaData();
  },
  methods: {
    curingStaData() {
      this.childData = false;
      setTimeout(() => {
        this.childData = true;
      }, 100);
      let param = { data: "" };
      this.$apiWckj
        .post(
          "WCKJAPI_RoadProperty",
          "/GetYangHuPage_CuringRoadTaskConstructionStatistics",
          {
            param: param
          }
        )
        .then(res => {
          this.curingStaObj = {
            ZLC: Number(res.data.ZLC),
            MWLD: Number(res.data.MWLD),
            HHLD: Number(res.data.HHLD),
            WYLD: Number(res.data.WYLD),
            QLS: Number(res.data.QLS),
            BPS: Number(res.data.BPS),
            HTS: Number(res.data.HTS),
            YHZS: Number(res.data.YHZS),
            SDS: Number(res.data.SDS),
            HDS: Number(res.data.HDS),
            ZDS: Number(res.data.ZDS),
            SFZS: Number(res.data.SFZS),
            RWZXZ: Number(res.data.RWZXZ),
            RWYWC: Number(res.data.RWYWC),
            CQCC: Number(res.data.CQCC),
            CQRS: Number(res.data.CQRS),
            SGZ: Number(res.data.SGZ),
            YYS: Number(res.data.YYS)
          };
        });
    }
  }
};
</script>
<style lang="less" scoped>
.cur1Com {
  width: 100%;
  height: 100%;
  position: relative;
  .cur1-com1,
  .cur1-com2,
  .cur1-com3,
  .cur1-com4 {
    padding: 0 5px;
  }
  .cur1-com1 {
    width: 19.8%;
    height: 100%;
    float: left;
    .total-num2-2 {
      border: none;
      margin-top: -13px;
      padding: 0 11px;
      height: 130px;
      .num-top {
        padding: 10px 0 13px;
      }
      .list-7 {
        list-style: none;
        overflow: hidden;
        li {
          float: left;
          width: 33.33%;
          position: relative;
          margin: 10px 0 13px;
        }
        .liatbe::after {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 0;
          width: 1px;
          background-color: #06517d;
        }
        .liatbe::before {
          content: "";
          position: absolute;
          right: 0;
          top: 4px;
          bottom: 0;
          width: 1px;
          background-color: #06517d;
        }
      }
    }
  }
  .cur1-com2 {
    width: 28.5%;
    height: 100%;
    float: left;
    margin-left: 0.5%;
    .total-num2-2 {
      border: none;
      margin-top: -13px;
      padding: 0 11px;
      height: 130px;
      .item {
        background: url("./../../assets/img/line-bg1.png") bottom center
          no-repeat;
        -webkit-background-size: 100% 1px;
        background-size: 100% 1px;
      }
      .list-7 {
        list-style: none;
        overflow: hidden;
        li {
          float: left;
          width: 25%;
          position: relative;
          margin: 10px 0 13px;
        }
        .liafter:after {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 0;
          width: 1px;
          background-color: #06517d;
        }
      }
      .num {
        line-height: 1.1;
        font-size: 26px;
        color: #ffcd06;
        font-family: DIGIB;
      }
      h4 {
        line-height: 1.2;
        font-size: 14px;
        color: #00c3f3;
        font-weight: 400;
      }
    }
  }
  .cur1-com3 {
    width: 28.5%;
    height: 100%;
    float: left;
    margin-left: 0.5%;
    .total-num2-3 {
      padding: 0 6px;
      border: none;
      height: 130px;
      .item2 {
        padding: 0 5px;
        float: left;
        width: 50%;
        .tit {
          margin: 5px 0 10px;
          font-size: 14px;
          color: #d9f7ff;
          font-weight: 400;
          text-align: center;
          background-color: rgba(11, 90, 146, 0.6);
          line-height: 30px;
        }
        .list-7-col2 {
          overflow: hidden;
          list-style: none;
          li {
            width: 50%;
            margin: 8px 0 7px;
            float: left;
            position: relative;
          }
          .liafter:after {
            content: "";
            position: absolute;
            left: 0;
            top: 4px;
            bottom: 0;
            width: 1px;
            background-color: #06517d;
          }
        }
      }
    }
  }
  .cur1-com4 {
    width: 21.25%;
    height: 100%;
    float: left;
    margin-left: 0.5%;
    .list-5 {
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        height: 106px;
        line-height: 106px;
        font-size: 0;
        text-align: center;
        width: 50%;
        position: relative;
        background: url("./../../assets/img/line-bg4.png") left center no-repeat;
        -webkit-background-size: 1px 100%;
        background-size: 1px 100%;
        .con {
          display: inline-block;
          vertical-align: middle;
          line-height: 1.4;
          .num {
            font-size: 36px;
            color: #ffcd06;
            line-height: 1.2;
            font-family: DIGIB;
            width: 128px;
            margin: 0 auto;
            overflow: hidden;
            span {
              display: inline-block;
              width: 100px;
              // height: 50px;
              margin: 0 auto;
            }
          }
          h4 {
            font-size: 16px;
            color: #00c3f3;
            font-weight: 400;
          }
        }
      }
      .libgnone:first-child {
        background: 0 0;
      }
    }
  }
}
//top公共样式
.total-num2 {
  height: 159px;
  border-top: 1px solid #06527e;
  text-align: center;
  overflow: hidden;
  .num-top {
    padding: 19px 0 14px;
    background: url("./../../assets/img/line-bg1.png") center bottom no-repeat;
    -webkit-background-size: 100% 1px;
    background-size: 100% 1px;
    overflow: hidden;
  }
  li {
    .num {
      width: 100px;
    }
  }
  .num {
    line-height: 1.1;
    font-size: 26px;
    color: #ffcd06;
    font-family: DIGIB;
    width: 128px;
    margin: 0 auto;
    overflow: hidden;
    span {
      display: inline-block;
      width: 100px;
      // height: 50px;
      margin: 0 auto;
    }
  }
  h4 {
    line-height: 1.2;
    font-size: 14px;
    color: #00c3f3;
    font-weight: 400;
  }
}

/deep/.number-grow {
  line-height: 0;
}
</style>