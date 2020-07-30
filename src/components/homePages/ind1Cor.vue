<template>
  <div class="ind1Cor">
    <div class="ind-bg1 ind-z1 ind-chart3">
      <div class="tit-1">
        <h3>
          <span>各路段运营数据概况</span>
        </h3>
      </div>
      <!--  @mouseenter="enter(1)"
          @mouseleave="leave(1)"
           @mouseenter="enter(2)"
          @mouseleave="leave(2)"
      -->
      <div class="btn">
        <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">本周</span>
        <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">本月</span>
      </div>
      <div class="table-1">
        <dv-scroll-board :config="config" style="width:99%;height:100%;margin-left:0.5%;" />
      </div>
    </div>
    <div class="ind-bg1 ind-z1 ind-chart4">
      <ul class="list-1">
        <li>
          <div class="con">
            <h4>年度养护巡查统计</h4>
            <div class="pic">
              <img src="./../../assets/img/l1-p1.png" alt />
            </div>
            <div class="item">
              <span class="num">
                <number-grow :value="yearCuringData.XCRWS"></number-grow>
              </span>
              <h5>任务数</h5>
            </div>
            <div class="item">
              <span class="num">
                <number-grow :value="yearCuringData.XCZXS"></number-grow>
              </span>
              <h5>执行次数</h5>
            </div>
          </div>
        </li>
        <li>
          <div class="con">
            <h4>年度养护病害统计</h4>
            <div class="pic">
              <img src="./../../assets/img/l1-p2.png" alt />
            </div>
            <div class="item2">
              <span class="num">
                <number-grow :time="4" :value="yearCuringData.BHY"></number-grow>
              </span>
              <h5>一级</h5>
            </div>
            <div class="item2">
              <span class="num">
                <number-grow :value="yearCuringData.BHE"></number-grow>
              </span>
              <h5>二级</h5>
            </div>
            <div class="item2">
              <span class="num">
                <number-grow :value="yearCuringData.BHS"></number-grow>
              </span>
              <h5>三级</h5>
            </div>
            <div class="item2">
              <span class="num" style="padding-right:13px;position:relative">
                <number-grow :value="yearCuringData.XFL"></number-grow>
                <span style="position:absolute;bottom: 0;right: 0;">%</span>
              </span>
              <h5>修复率</h5>
            </div>
          </div>
        </li>
        <li>
          <div class="con">
            <h4>年度机电故障统计</h4>
            <div class="pic">
              <img src="./../../assets/img/l1-p3.png" alt />
            </div>
            <div class="item">
              <span class="num">
                <number-grow :value="24"></number-grow>
              </span>
              <h5>上报次数</h5>
            </div>
            <div class="item">
              <span class="num">
                <number-grow :value="12"></number-grow>
              </span>
              <h5>已处理次数</h5>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="ind-bg1-border">
      <dv-border-box-10 :color="['#10408e']"></dv-border-box-10>
    </div>
    <div class="ind-bg2-border">
      <dv-border-box-10 :color="['#10408e']"></dv-border-box-10>
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
      config: {
        header: ["路段", "麻武", "武英", "黄黄"],
        data: [
          ["车流量(辆)", "1245876", "1245876", "123333"],
          ["收费额(万)", "112", "10", "4"],
          ["黄黄", "2356.23", "2356.23", "2356.23"],
          ["清分后收费额(万)", "254.65", "254.65", "254.65"],
          ["收费任务完成情况统计(%)", "45.6", "45.6", "45.6"],
          ["超限车辆(辆)", "456873", "456873", "456873"]
        ],
        rowNum: 5,
        headerBGC: "#094f84",
        oddRowBGC: "#063e6d",
        evenRowBGC: "#063e6d",
        headerHeight: 30,
        align: ["center", "center", "center", "center"],
        columnWidth: [210, 100, 100, 100]
      },
      yearCuringData: {
        XCRWS: 24,
        XCZXS: 14,
        BHE: 3,
        BHS: 13,
        BHY: 17,
        XFL: 99
      },
      spanAction: ""
    };
  },
  mounted() {
    this.yearCuring();
    this.actionClickEven(0);
  },
  methods: {
    yearCuring() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_RoadProperty", "/GetHomePage_PatrolDisease", {
          param: param
        })
        .then(res => {
          this.yearCuringData = {
            XCRWS: Number(res.data.XCRWS),
            XCZXS: Number(res.data.XCZXS),
            BHE: Number(res.data.BHE),
            BHS: Number(res.data.BHS),
            BHY: Number(res.data.BHY),
            XFL: parseInt(res.data.XFL)
          };
        });
    },
    operateData(i) {
      let param = { data: i };
      this.$apiWckj
        .post("WCKJAPI_Operation", "/GetHomePage_SectionOperate", {
          param: param
        })
        .then(res => {
          let dataList = res.data;
          dataList.forEach(val => {
            dataList.push(val);
          });
          this.config = {
            header: ["路段", "麻武", "武英", "黄黄"],
            data: dataList,
            rowNum: 5,
            headerBGC: "#094f84",
            oddRowBGC: "#063e6d",
            evenRowBGC: "#063e6d",
            headerHeight: 30,
            align: ["center", "center", "center", "center"],
            columnWidth: [210, 100, 100, 100]
          };
        });
    },
    // enter(index) {
    //   this.spanAction = index;
    // },
    // leave(index) {
    //   if (this.spanAction == index) {
    //     return;
    //   } else {
    //     this.spanAction = "";
    //   }
    // },
    actionClickEven(index) {
      this.spanAction = index;
      (this.config = {
        header: ["路段", "麻武", "武英", "黄黄"],
        data: [
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""]
        ],
        rowNum: 1,
        headerBGC: "#094f84",
        oddRowBGC: "#063e6d",
        evenRowBGC: "#063e6d",
        headerHeight: 30,
        align: ["center", "center", "center", "center"],
        columnWidth: [210, 100, 100, 100]
      }),
        this.operateData(index);
    }
  }
};
</script>
<style lang="less" scoped>
.ind1Cor {
  position: relative;
  height: 100%;
  .ind-bg1-border {
    width: 101%;
    // height: 284px;
    height: 45%;
    position: absolute;
    top: 0;
    right: -0.5%;
  }
  .ind-bg2-border {
    width: 101%;
    // height: 327px;
    height: 54%;
    position: absolute;
    bottom: 0;
    right: -0.5%;
  }

  .ind-chart3 {
    // height: 284px;
    height: 45%;
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
    .table-1 {
      height: 86%;
      /deep/.dv-scroll-board {
        .header {
          font-size: 13px;
          color: #d9f7ff;
        }
        .rows {
          font-size: 13px;
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
  .ind-chart4 {
    // height: 327px;
    height: 53%;
    .list-1 {
      padding: 11px 4px;
      display: -webkit-flex;
      display: flex;
      align-items: stretch;
      overflow: hidden;
      height: 100%;
      li {
        padding: 0 7px;
        float: left;
        width: 33.33%;
        .con {
          padding: 14px 10px 10px;
          height: 100%;
          border: 1px solid #055581;
          position: relative;
          h4 {
            margin-bottom: 10px;
            font-size: 14px;
            color: #d9f7ff;
            font-weight: 400;
            text-align: center;
          }
          .pic {
            margin: 0 auto 18px;
            width: 68px;
            height: 68px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .item {
            padding: 15% 0 12%;
            height: 30%;
            background: url("./../../assets/img/line-bg2.png") center top
              no-repeat;
            -webkit-background-size: 100% 1px;
            background-size: 100% 1px;
            text-align: center;
            .num {
              display: block;
              font-size: 22px;
              color: #ffcd06;
              line-height: 1.2;
              font-family: DIGIB;
              overflow: hidden;
              width: 45px;
              margin: 0 auto;
            }
            h5 {
              font-size: 14px;
              color: #00c3f3;
              font-weight: 400;
            }
          }
          .item2 {
            line-height: 1;
            padding: 15% 0 0;
            height: 14%;
            background: url("./../../assets/img/line-bg2.png") center top
              no-repeat;
            -webkit-background-size: 100% 1px;
            background-size: 100% 1px;
            overflow: hidden;
            .num {
              float: right;
              line-height: inherit;
              display: block;
              color: #ffcd06;
              font-size: 22px;
              font-family: DIGIB;
              overflow: hidden;
              width: 45px;
              text-align: right;
            }
            h5 {
              font-size: 14px;
              color: #00c3f3;
              font-weight: 400;
              overflow: hidden;
            }
          }
        }
        .con:after {
          content: "";
          position: absolute;
          left: 5px;
          top: 5px;
          right: 5px;
          bottom: 5px;
          background: url("./../../assets/img/l1-bg1.png") center center
            no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
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