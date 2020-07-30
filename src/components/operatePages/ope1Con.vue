<template>
  <div class="ope1Con">
    <div class="ind-bg1 ind-z1 ope1-con1">
      <div class="tit-1">
        <h3>
          <span>年度收费总统计（万元）</span>
        </h3>
      </div>
      <ul class="ycstaBox">
        <li>
          <span>
            <number-grow :value="yearTotalObj.ZSFE"></number-grow>
          </span>
          <h4>本年度总收费额</h4>
        </li>
        <li class="borderLi">
          <span>
            <number-grow :value="yearTotalObj.SFZB"></number-grow>
          </span>
          <h4>本年度收费指标</h4>
        </li>
        <li class="baiLi">
          <span>
            <number-grow :value="yearTotalObj.ZBWCD"></number-grow>
            <i>%</i>
          </span>
          <h4>收费指标完成度</h4>
        </li>
      </ul>
    </div>
    <div class="ind-bg1 ind-z1 ope1-con2">
      <div class="tit-1">
        <h3>
          <span>路段收费年度统计（万元）</span>
        </h3>
      </div>
      <div class="table-1">
        <dv-scroll-board :config="config" style="width:99%;height:97%;margin-left:0.5%;" />
      </div>
    </div>
  </div>
</template>
<script>
import numberGrow from "./../tools/numberGrow";
import Echarts from "echarts";
export default {
  components: {
    numberGrow
  },
  data() {
    return {
      config: {
        header: [
          "路段",
          "本年收费总额",
          "本年收费指标",
          "指标完成度",
          "现金支付金额",
          "电子支付金额",
          "ETC收费额",
          "清分后收费额"
        ],
        data: [
          ["麻武路段", 2, 3, 4, 5, 6, 7, 8],
          ["武英路段", 2, 3, 4, 5, 6, 7, 8],
          ["黄黄路段", 2, 3, 4, 5, 6, 7, 8],
          ["麻武路段", 2, 3, 4, 5, 6, 7, 8],
          ["武英路段", 2, 3, 4, 5, 6, 7, 8],
          ["黄黄路段", 2, 3, 4, 5, 6, 7, 8]
        ],
        rowNum: 3,
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
      },
      yearTotalObj: {}
    };
  },
  mounted() {
    this.yearTatal();
    this.yearcharge();
  },
  methods: {
    yearTatal() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_YearChargeTotal", {
          param: param
        })
        .then(res => {
          this.yearTotalObj = {
            ZSFE: Number(res.data.ZSFE),
            SFZB: Number(res.data.SFZB),
            ZBWCD: parseFloat(res.data.ZBWCD)
          };
        });
    },
    yearcharge() {
      let param = { data: "" };
      this.$apiWckj
        .post(
          "/WCKJAPI_Operation",
          "/GetYunYingPage_SectionYearChargeDetails",
          {
            param: param
          }
        )
        .then(res => {
          let configList=res.data
          configList.forEach(val => {
            configList.push(val)
          });
          this.config = {
            header: [
              "路段",
              "本年收费总额",
              "本年收费指标",
              "指标完成度",
              "现金支付金额",
              "电子支付金额",
              "ETC收费额",
              "清分后收费额"
            ],
            data: configList,
            rowNum: 3,
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
.ope1Con {
  width: 100%;
  height: 100%;
  /deep/.ind-z1 {
    background-size: auto 5.1px;
  }
}
.ope1-con1,
.ope1-con2 {
  padding: 0 5px;
}
.ope1-con1 {
  width: 37.2%;
  height: 100%;
  float: left;
  .ycstaBox {
    padding: 0;
    margin: 0;
    height: calc(100% - 30px);
    li {
      display: inline-block;
      width: 33%;
      height: 80px;
      text-align: center;
      color: #00bbea;
      position: relative;
      span {
        display: inline-block;
        width: 90%;
        color: #ffcd06;
        font-weight: 700;
        font-size: 40px;
        font-family: DIGIB;
        overflow: hidden;
      }
      h4 {
        font-size: 16px;
      }
    }
    .borderLi {
      border-left: 1px solid #048fc1;
      border-right: 1px solid #048fc1;
    }
    .baiLi {
      span {
        width: 48%;
      }
      i {
        position: absolute;
        top: 0;
        right: 14%;
      }
    }
  }
}
.ope1-con2 {
  width: 62.3%;
  margin-left: 0.5%;
  height: 100%;
  float: left;
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
</style>