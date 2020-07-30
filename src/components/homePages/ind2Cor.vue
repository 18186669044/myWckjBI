<template>
  <div class="ind2Cor">
    <div class="ind-bg1 ind-z1 ind-chart7">
      <div class="tit-1">
        <h3>
          <span>资产存量及价值分类统计</span>
        </h3>
      </div>
      <div class="chart7" id="l-echart7-1"></div>
    </div>
  </div>
</template>
<script>
import Echarts from "echarts";
import "./../tools/echart-auto-tooltip";
export default {
  data() {
    return {
      dataObj: {}
    };
  },
  mounted() {
    this.caserightData();
  },
  methods: {
    caserightData() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Assets", "/GetAssetsTypeDataByBI", {
          param: param
        })
        .then(res => {
         let tmp= res.data.SERIESDATA[1].DATA
         let tmps=[]
         tmp.forEach(val => {
            val=parseInt(val/10000)
            tmps.push(val)
         });
          this.dataObj = res.data;
          this.dataObj.SERIESDATA[1].DATA=tmps
          this.CaserightEcharts();
        });
    },
    CaserightEcharts() {
      this.$nextTick(function() {
        var echartrightPieCase = Echarts.init(
          document.getElementById("l-echart7-1")
        );
        let rightData = this.dataObj;
        let option = {
          grid: {
            left: 50,
            right: 50,
            top: 65,
            bottom: 50
          },
          legend: {
            top: 0,
            left: 20,
            textStyle: {
              fontSize: 13,
              color: "#00c3f3"
            },
            data: ["数量", "价值"]
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                show: false //隐藏x坐标轴刻度
              },
              //x轴颜色
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#0575ab" //x轴下线
                }
              },
              axisLabel: {
                interval: 0
              },
              //x轴字体样式
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#00c3f3",
                  fontSize: "12"
                },
                formatter: function(params) {
                  var newParamsName = ""; // 最终拼接成的字符串
                  var paramsNameNumber = params.length; // 实际标签的个数
                  var provideNumber = 3; // 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = ""; // 表示每一次截取的字符串
                      var start = p * provideNumber; // 开始截取的位置
                      var end = start + provideNumber; // 结束截取的位置
                      // 此处特殊处理最后一行的索引值
                      if (p == rowNumber - 1) {
                        // 最后一次不换行
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        // 每一次拼接字符串并换行
                        tempStr = params.substring(start, end) + "\n";
                      }
                      newParamsName += tempStr; // 最终拼成的字符串
                    }
                  } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName;
                }
              },
              data: rightData.TYPEDATA,
              // [
              //   "土地",
              //   "房屋",
              //   "建筑物",
              //   "通用设备",
              //   "车辆",
              //   "专用设备",
              //   "文物和陈列品",
              //   "家具用具装具",
              //   "图书档案",
              //   "特种动植物",
              //   "无形资产"
              // ],
              axisPointer: {
                type: "shadow"
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "(价值/万元)",
              // min: 0,
              // max: 10000,
              // interval: 1000,
              axisLine: {
                show: false, //隐藏y坐标轴
                lineStyle: {
                  color: "#00b9e8" //左侧y轴颜色
                }
              },
              splitLine: {},
              //y轴字体样式
              axisLabel: {
                // formatter: '{value} ml'
                show: true,
                textStyle: {
                  color: "#00b9e8",
                  fontSize: "12"
                }
              }
            },
            {
              type: "value",
              name: "(数量/个)",
              max: 6000,
              interval: 1000,
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#00b9e8"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "#0575ab"
                }
              },
              axisLabel: {
                // formatter: '{value} °C'
              }
            }
          ],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          series: [
            {
              name: "数量",
              type: "bar",
              barWidth: "43%",
              showBackground: true,
              z: 9,
              itemStyle: {
                normal: {
                  color: "#0fd7b0"
                }
              },
              data: rightData.SERIESDATA[0].DATA //[60, 30, 38, 38, 70, 50, 80, 45, 70, 40, 38]
            },
            {
              name: "价值",
              type: "line",
              z: 10,
              // 设置折线上圆点大小
              symbolSize: 6,
              // 设置拐点为实心圆
              //symbol:'circle',
              itemStyle: {
                normal: {
                  color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#fffb34"
                    },
                    {
                      offset: 1,
                      color: "#fffb34"
                    }
                  ])
                }
              },
              yAxisIndex: 1,
              data: rightData.SERIESDATA[1].DATA //[65, 35, 43, 58, 90, 70, 60, 65, 80, 80, 45]
            }
          ]
        };
        echartrightPieCase.setOption(option);
        tools.loopShowTooltip(
          echartrightPieCase,
          option,
          { loopSeries: true },
          2000
        );
      });
    }
  }
};
</script>
<style lang="less" scoped>
.ind2Cor {
  position: relative;
  height: 100%;
  .ind-chart7 {
    // height: 355px;
    height: 100%;
    .chart7 {
      // height: 316px;
      height: 89%;
    }
  }
}
</style>