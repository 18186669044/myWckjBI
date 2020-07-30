<template>
  <div class="ope3Con">
    <div class="ind-z1 ind-bg1 ope3Con1">
      <div class="tit-1">
        <h3>
          <span>收费统计走势图</span>
        </h3>
      </div>
      <div id="myChart1"></div>
      <div class="btn">
        <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">近30天</span>
        <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">近12个月</span>
        <div class="typesx">
          <i></i>
          <el-select
            v-model="value"
            placeholder="请选择"
            @change="selectInput"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Echarts from "echarts";
export default {
  data() {
    return {
      spanAction: "",
      options: [
        {
          value: "通行费收入",
          label: "通行费收入"
        },
        {
          value: "出入口流量",
          label: "出入口流量"
        },
        {
          value: "堵漏增收",
          label: "堵漏增收"
        }
      ],
      value: "通行费收入",
      drawEcharts: [],
      xNum: []
    };
  },
  mounted() {
    this.actionClickEven(0);
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = Echarts.init(document.getElementById("myChart1"));
      //数据
      let myChartList = this.drawEcharts;
      let mw = [];
      let wy = [];
      let hh = [];
      let xNum = this.xNum;
      myChartList.forEach(val => {
        if (val.NAME == "麻武路段") {
          mw = val.DATA;
        }
        if (val.NAME == "武英路段") {
          wy = val.DATA;
        }
        if (val.NAME == "黄黄路段") {
          hh = val.DATA;
        }
      });
      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          right: "0",
          data: ["麻武路段", "武英路段", "黄黄路段"],
          textStyle: {
            fontSize: 14, // 字体大小
            color: "#fff"
          }
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#279cff"
            }
          },
          data: xNum
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#279cff"
            }
          }
        },
        series: [
          {
            name: "麻武路段",
            type: "line",
            symbolSize: 6, // 拐点圆的大小
            itemStyle: {
              normal: {
                lineStyle: {
                  // 线的样式
                  // width: 2,
                  color: "#269afc"
                }
              }
            },
            data: mw
          },
          {
            name: "武英路段",
            type: "line",
            symbolSize: 6, // 拐点圆的大小
            itemStyle: {
              normal: {
                lineStyle: {
                  // 线的样式
                  // width: 2,
                  color: "#ecc10d"
                }
              }
            },
            data: wy
          },
          {
            name: "黄黄路段",
            type: "line",
            symbolSize: 6, // 拐点圆的大小
            itemStyle: {
              normal: {
                lineStyle: {
                  // 线的样式
                  // width: 2,
                  color: "#e86144"
                }
              }
            },
            data: hh
          }
        ]
      });
    },
    actionClickEven(index) {
      this.spanAction = index;
      this.drawLineData(this.spanAction, this.value);
    },
    selectInput() {
      this.drawLineData(this.spanAction, this.value);
    },
    drawLineData(i, type) {
      let param = { data: { DATA: i, TYPE: type } };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_ChargeTypeTrend", {
          param: param
        })
        .then(res => {
          var _nstr = res.data.SERIESDATA.replace(/'/g, '"');
          this.drawEcharts = JSON.parse(_nstr);
          this.xNum = JSON.parse(res.data.XAXISDATA);
          this.drawLine();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ope3Con {
  width: 100%;
  height: 100%;
  position: relative;
  .ope3Con1 {
    width: 100%;
    height: 100%;
    #myChart1 {
      width: 100%;
      height: 100%;
    }
    .btn {
      position: absolute;
      top: 0;
      left: 10px;
      z-index: 10;
      span {
        padding: 0 10px;
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
      .typesx {
        display: inline-block;
        i {
          display: inline-block;
          width: 5px;
          height: 5px;
          background-color: #00c1f3;
          margin: 0 10px 0 20px;
        }
        /deep/.el-input__inner {
          width: 115px;
          height: 26px;
          padding: 0 10px;
          background-color: transparent;
          border: 1px solid #0961a0;
          color: #00b3ed;
        }
        /deep/.el-input__icon {
          line-height: 0;
        }
        /deep/.el-select__caret {
          color: #00b3ed !important;
        }
        /deep/.el-popper {
          background: rgba(9, 47, 66, 0.5) !important;
          border: 1px solid #00b3ed;
        }
        /deep/.popper__arrow::after {
          border-bottom-color: #00b3ed !important;
        }
        /deep/.el-select-dropdown__item {
          color: #fff;
        }
        /deep/.el-select-dropdown__item.hover {
          background-color: #00b3ed;
        }
      }
    }
  }
}
/deep/.ind-z1 {
  background-size: 100% 2% !important;
}
/deep/.tit-1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.btspanboxAction {
  background-color: #00c1f3 !important;
  color: #d9f7ff !important;
}
</style>