<template>
  <div class="helpCob">
    <div class="ind-z1 ind-bg1 cur1-com1 helpCon-1">
      <div class="tit-1">
        <h3>
          <span>突发事件位置趋势 (事故易发路段)</span>
        </h3>
      </div>
      <ul class="list-9">
        <li v-for="(item,index) in dataList" :key="index">
          <div class="addr">{{item.roadplino}}</div>
          <div class="name" :class="item.eetname.length>10?'lengthLi':''">{{item.eetname}}</div>
          <div class="box-progress">
            <div class="line">
              <div class="speed" :style="{width:(item.total+50)+'%'}">
                <div class="num">{{item.total}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com1 helpCon-2">
      <div class="tit-1">
        <h3>
          <span>年度突发事件数量趋势图</span>
        </h3>
      </div>
      <div class="chart4" id="f-chart4"></div>
    </div>
    <div class="ind-z1 ind-bg1 cur1-com1 helpCon-3">
      <div class="tit-1">
        <h3>
          <span>突发事件各等级处置耗时趋势图</span>
        </h3>
      </div>
      <div class="chart5" id="f-chart5"></div>
    </div>
  </div>
</template>
<script>
import Echarts from "echarts";
import "./../tools/echart-auto-tooltip";
export default {
  data() {
    return {
      dataList: [
        // { leftld: "K100至K105", centent: 25, rightNum: "交通事故（起）" },
        // { leftld: "K203至K208", centent: 21, rightNum: "隧道交通事故（起）" },
        // { leftld: "K100至K105", centent: 17, rightNum: "交通事故（起）" },
        // { leftld: "K203至K208", centent: 12, rightNum: "隧道交通事故（起）" }
      ],
      hhList: [],
      mwList: [],
      wyList: [],
      dateTime: [],
      hhld: [],
      mwld: [],
      wyld: []
    };
  },
  mounted() {
    this.RoadTopPlinoEmergeEvent();
    this.RoadTopEmergeEvent();
    this.RoadToptimeEmergeEvent();
  },
  methods: {
    CaserightEcharts() {
      this.$nextTick(function() {
        var echartrightPieCase = Echarts.init(
          document.getElementById("f-chart5")
        );
        let hhlds = this.hhld;
        let mwlds = this.mwld;
        let wylds = this.wyld;
        let option = {
          grid: {
            left: 40,
            right: 30,
            top: 65,
            bottom: 30
          },
          legend: {
            left: "2%",
            itemHeight: 14,
            itemWidth: 14,
            icon: "rect",
            data: ["麻武路段", "武英路段", "黄黄路段"],
            textStyle: {
              fontSize: 13,
              color: "#00c3f3"
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
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
                  color: "#084169" //x轴下线
                }
              },
              //x轴字体样式
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#00c3f3",
                  fontSize: "12"
                }
              },
              data: ["一级事件", "二级事件", "三级事件", "一般事件"]
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "(时间/分钟)",
              axisLine: {
                show: false, //显示y坐标轴
                lineStyle: {
                  color: "#00b9e8" //左侧y轴颜色
                }
              },
              splitLine: {
                lineStyle: {
                  color: "#084169"
                }
              },
              // y轴字体样式
              axisLabel: {
                // formatter: '{value} ml'
                show: true,
                textStyle: {
                  color: "#00b9e8",
                  fontSize: "12"
                }
              }
            }
          ],
          series: [
            {
              name: "麻武路段",
              type: "bar",
              barWidth: "15%",
              data: mwlds,
              legendHoverLink: true,
              showBackground: true,
              backgroundStyle: {
                color: "#0b3f67"
              },
              itemStyle: {
                normal: {
                  color: "#0fd7b0"
                }
              }
            },
            {
              name: "武英路段",
              type: "bar",
              barWidth: "15%",
              data: wylds,
              showBackground: true,
              backgroundStyle: {
                color: "#0b3f67",
                borderType: "solid",
                borderColor: "red",
                borderWidth: "2px"
              },
              itemStyle: {
                normal: {
                  color: "#269bfd"
                }
              }
            },
            {
              name: "黄黄路段",
              type: "bar",
              barWidth: "15%",
              data: hhlds,
              showBackground: true,
              backgroundStyle: {
                color: "#0b3f67"
              },
              itemStyle: {
                normal: {
                  color: "#fdcc05"
                }
              }
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
    },
    LineChart() {
      this.$nextTick(function() {
        // 基于准备好的dom，初始化echarts实例
        let myChart4 = Echarts.init(document.getElementById("f-chart4"));
        //数据
        let hhLists = this.hhList;
        let mwLists = this.mwList;
        let wyLists = this.wyList;
        let dateTimes = this.dateTime;
        // 绘制图表
        let option = {
          grid: {
            left: 40,
            right: 30,
            top: 65,
            bottom: 30
          },
          legend: {
            left: "2%",
            data: ["麻武路段", "武英路段", "黄黄路段"],
            textStyle: {
              fontSize: 13,
              color: "#00c3f3"
            }
          },
          tooltip: {
            trigger: "axis"
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: true,
              //x轴颜色
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#084169" //x轴下线
                }
              },
              //x轴字体样式
              // axisLabel: {
              //   interval: 0,
              //   show: true,
              //   textStyle: {
              //     color: "#00c3f3",
              //     fontSize: "12"
              //   }
              // },
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
                  var provideNumber = 4; // 每行能显示的字的个数
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
              data: dateTimes
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "(数量/件)",
              axisLine: {
                show: false, //显示y坐标轴
                lineStyle: {
                  color: "#00b9e8" //左侧y轴颜色
                }
              },
              splitLine: {
                lineStyle: {
                  color: "#084169"
                }
              },
              // y轴字体样式
              axisLabel: {
                // formatter: '{value} ml'
                show: true,
                textStyle: {
                  color: "#00b9e8",
                  fontSize: "12"
                }
              }
            }
          ],
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
              color: "#269afc",
              data: mwLists
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
              color: "#ecc10d",
              data: wyLists
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
              color: "#e86144",
              data: hhLists
            }
          ]
        };
        myChart4.setOption(option);
        tools.loopShowTooltip(myChart4, option, { loopSeries: true }, 2000);
      });
    },
    RoadTopPlinoEmergeEvent() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/RoadTopPlinoEmergeEvent", { param: param })
        .then(res => {
          this.dataList = res.data;
        });
    },
    RoadTopEmergeEvent() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/RoadTopEmergeEvent", { param: param })
        .then(res => {
          if (res.data) {
            res.data.forEach(val => {
              if (val.roadname == "黄黄路段") {
                this.hhList.push(val.count);
                this.dateTime.push(val.yearmonnth);
              }
              if (val.roadname == "麻武路段") {
                this.mwList.push(val.count);
              }
              if (val.roadname == "武英路段") {
                this.wyList.push(val.count);
              }
            });
            this.LineChart();
          }
        });
    },
    RoadToptimeEmergeEvent() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/RoadToptimeEmergeEvent", { param: param })
        .then(res => {
          res.data.yj.forEach(val => {
            if (val.roadname == "黄黄路段") {
              this.hhld.push(val.timehuor);
            }
            if (val.roadname == "麻武路段") {
              this.mwld.push(val.timehuor);
            }
            if (val.roadname == "武英路段") {
              this.wyld.push(val.timehuor);
            }
          });
          res.data.ej.forEach(val => {
            if (val.roadname == "黄黄路段") {
              this.hhld.push(val.timehuor);
            }
            if (val.roadname == "麻武路段") {
              this.mwld.push(val.timehuor);
            }
            if (val.roadname == "武英路段") {
              this.wyld.push(val.timehuor);
            }
          });
          res.data.sj.forEach(val => {
            if (val.roadname == "黄黄路段") {
              this.hhld.push(val.timehuor);
            }
            if (val.roadname == "麻武路段") {
              this.mwld.push(val.timehuor);
            }
            if (val.roadname == "武英路段") {
              this.wyld.push(val.timehuor);
            }
          });
          res.data.yb.forEach(val => {
            if (val.roadname == "黄黄路段") {
              this.hhld.push(val.timehuor);
            }
            if (val.roadname == "麻武路段") {
              this.mwld.push(val.timehuor);
            }
            if (val.roadname == "武英路段") {
              this.wyld.push(val.timehuor);
            }
          });
          this.CaserightEcharts();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.helpCob {
  width: 100%;
  height: 100%;
  .helpCon-1,
  .helpCon-2,
  .helpCon-3 {
    width: 33%;
    height: 100%;
    float: left;

    .chart4,
    .chart5 {
      // height: 316px;
      height: calc(100% - 60px);
    }
  }
  .helpCon-2,
  .helpCon-3 {
    margin-left: 0.5%;
  }
}

.list-9 {
  overflow: hidden;
  li {
    padding-left: 14px;
    line-height: 45px;
    overflow: hidden;
    position: relative;
  }
  .addr {
    margin-right: 18px;
    float: left;
    font-size: 15px;
    color: #d9f7ff;
    width: 172px;
  }
  .name {
    float: right;
    width: 140px;
    text-align: right;
    font-size: 14px;
    color: #00c3f3;
  }
  .box-progress {
    padding-right: 44px;
    height: 45px;
    position: relative;
    overflow: hidden;
    .line {
      margin-top: 16px;
      height: 12px;
      position: relative;
      .speed {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: #0fd7b0;
        .num {
          position: absolute;
          left: 100%;
          top: 50%;
          width: 44px;
          font-size: 24px;
          color: #ffcd06;
          font-family: DIGIB;
          text-align: center;
          line-height: 1.2;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
    }
  }
}
ol,
ul {
  list-style: none;
}
.lengthLi {
  position: relative;
  right: 0;
  top: 10px;
  font-size: 12px !important;
  white-space: normal;
  height: 44px;
  line-height: 15px;
}
</style>