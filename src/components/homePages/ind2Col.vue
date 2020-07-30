<template>
  <div class="ind2Col">
    <div class="ind-bg1 ind-z1 ind-chart5">
      <div class="tit-1">
        <h3>
          <span>员工基本情况</span>
        </h3>
      </div>
      <ul class="list-2">
        <li>
          <div class="con">
            <div class="num">
              <number-grow :value="staffNum.total"></number-grow>
            </div>
            <h4>员工总数（人）</h4>
          </div>
        </li>
        <li>
          <div class="con">
            <div class="num">
              <number-grow :value="staffNum.male"></number-grow>
            </div>
            <h4>男职工数（人）</h4>
          </div>
        </li>
        <li>
          <div class="con">
            <div class="num">
              <number-grow :time="1" :value="staffNum.girl"></number-grow>
            </div>
            <h4>女职工数（人）</h4>
          </div>
        </li>
      </ul>
      <div class="box-charts">
        <div class="l">
          <h4 class="chart-tit">
            <span>职工年龄区间分布</span>
          </h4>
          <div class="chart2" id="l-echart5-1" style="height:90%"></div>
        </div>
        <div class="r">
          <h4 class="chart-tit">
            <span>职工学历分布</span>
          </h4>
          <div class="chart3" id="l-echart5-2" style="height:90%"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Echarts from "echarts";
import "./../tools/echart-auto-tooltip";
import numberGrow from "./../tools/numberGrow";
export default {
  components: {
    numberGrow
  },
  data() {
    return {
      staffNum: {
        girl: 123,
        male: 456,
        total: 789
      },
      caseLeftData: [],
      caseRighttData: []
    };
  },
  mounted() {
    this.staffBasic();
  },
  methods: {
    CaseleftEcharts() {
      this.$nextTick(function() {
        var echartleftPieCase = Echarts.init(
          document.getElementById("l-echart5-1")
        );
        const colorList = ["#0fd7b0", "#279cff", "#ffcd06", "#fe6541"];
        //数据
        let caseList = this.caseLeftData;
        let nameList = [];
        let staffNumEch = this.staffNum;
        caseList.forEach(val => {
          nameList.push(val.name);
        });
        let option = {
          title: {
            text: staffNumEch.total,
            subtext: "员工总数",
            textStyle: {
              fontSize: 22,
              color: "#d9f7ff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "#00c3f3"
            },
            textAlign: "center",
            left: "50.4%",
            top: "16%"
          },
          tooltip: {
            trigger: "item",
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name.name == oa[i].name) {
                  return " " + name.name + " :  " + oa[i].percentage;
                }
              }
            },
            position: function(p) {
              //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
            }
          },
          legend: {
            show: true,
            top: "60%",
            left: "15%",

            itemWidth: 10,
            itemHeight: 10,
            data: nameList, //["36岁以下", "36-45", "46-55", "55岁以上"],
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                  return " " + name + "   " + oa[i].value + "人";
                }
              }
            },
            textStyle: {
              fontSize: "13",
              color: "#00c3f3"
            }
          },
          color: colorList,
          series: [
            {
              name: "年龄段划分",
              type: "pie",
              radius: ["35%", "45%"],
              center: ["52%", "28%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {},
              data: caseList
              // [
              //   {
              //     name: "36岁以下",
              //     value: 70,
              //     snum: "1860"
              //   },
              //   {
              //     name: "36-45",
              //     value: 15,
              //     snum: "1000"
              //   },
              //   {
              //     name: "46-55",
              //     value: 10,
              //     snum: "300"
              //   },
              //   {
              //     name: "55岁以上",
              //     value: 5,
              //     snum: "100"
              //   }
              // ]
            },
            {
              // 边框的设置
              radius: ["38%", "60%"],
              center: ["52%", "28%"],
              type: "pie",
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              animation: false,
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: "rgba(0, 125, 214, 0.2)"
                }
              },
              data: [
                {
                  value: 1
                }
              ]
            }
          ]
        };
        echartleftPieCase.setOption(option);
        tools.loopShowTooltip(
          echartleftPieCase,
          option,
          { loopSeries: true },
          3000
        );
      });
    },
    CaserightEcharts() {
      this.$nextTick(function() {
        var echartrightPieCase = Echarts.init(
          document.getElementById("l-echart5-2")
        );
        const colors = ["#0fd7b0", "#279cff", "#ffcd06", "#fe6541"];
        let caseRight = this.caseRighttData;
        let numList = [];
        let xueliList = [];
        caseRight.forEach(val => {
          numList.push(val.number);
          xueliList.push(val.name);
        });
        let option = {
          color: colors,
          tooltip: {
            trigger: "axis",
            trigger: "item",
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name.name == oa[i].name) {
                  return " " + name.name + " :  " + oa[i].percentage;
                }
              }
            },
            axisPointer: {
              type: "cross"
            }
          },
          grid: {
            show: true,
            top: "30",
            left: "32%",
            right: "32%",
            bottom: "20",
            backgroundColor: "rgba(16, 75, 117, 0.6)",
            borderColor: "transparent"
          },
          toolbox: {
            feature: {}
          },
          legend: {
            data: []
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              data: []
            }
          ],
          yAxis: [
            {
              type: "category",
              name: "",
              position: "left",
              axisLine: {
                lineStyle: {
                  color: "#07476d"
                }
              },
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                color: "#d9f7ff"
              },
              data: numList //["100人", "500人", "1 860人", "800人"]
            },
            {
              type: "category",
              name: "",
              position: "right",
              axisLine: {
                lineStyle: {
                  color: "#07476d"
                }
              },
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                color: "#00c3f3"
              },
              data: xueliList //["专科", "本科", "硕士", "博士"]
            }
          ],
          series: [
            {
              name: "人数",
              type: "funnel",
              left: "30%",
              top: 30,
              bottom: 20,
              width: "40%",
              min: 0,
              max: 100,
              sort: "ascending",
              gap: 10,
              label: {
                show: false
              },
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1
              },
              emphasis: {
                label: {
                  show: false
                },
                lineStyle: {
                  color: "transparent"
                }
              },
              data: caseRight
              // [
              //   {
              //     value: 100,
              //     name: "专科"
              //   },
              //   {
              //     value: 1,
              //     name: "本科"
              //   },
              //   {
              //     value: 1,
              //     name: "硕士"
              //   },
              //   {
              //     value: 1,
              //     name: "博士"
              //   }
              // ]
            }
          ]
        };
        echartrightPieCase.setOption(option);
        tools.loopShowTooltip(
          echartrightPieCase,
          option,
          { loopSeries: true },
          4000
        );
      });
    },
    staffBasic() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_OA", "/StaffSituation", {
          param: param
        })
        .then(res => {
          this.staffNum = {
            girl: Number(res.data.girl),
            male: Number(res.data.male),
            total: Number(res.data.total)
          };
          this.caseLeftData = [
            res.data.List[0],
            res.data.List[1],
            res.data.List[2],
            res.data.List[3]
          ];
          this.caseRighttData = [
            res.data.List[4],
            res.data.List[5],
            res.data.List[6]
          ];
          this.caseLeftData.forEach(ele => {
            ele.value = ele.number;
            ele.snum = ele.percentage;
          });
          this.caseRighttData.forEach(elel => {
            elel.value = elel.number;
            elel.snum = elel.percentage;
          });
          this.CaseleftEcharts();
          this.CaserightEcharts();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ind2Col {
  position: relative;
  height: 100%;
  .ind-chart5 {
    width: 100%;
    // height: 355px;
    height: 100%;
    .list-2 {
      padding: 0 8.5px;
      display: -webkit-flex;
      display: flex;
      align-items: stretch;
      overflow: hidden;
      li {
        float: left;
        width: 33.33%;
        .con {
          padding: 1px 0 8px;
          margin: 0 2.5px;
          height: 100%;
          background-color: rgba(11, 90, 146, 0.6);
          text-align: center;
          overflow: hidden;
          .num {
            margin-bottom: 6px;
            padding-bottom: 5px;
            font-size: 24px;
            color: #ffcd06;
            font-family: DIGIB;
            position: relative;
          }
          .num:after {
            margin-left: -7px;
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 14px;
            height: 2px;
            background-color: #00c1f3;
          }
          h4 {
            font-size: 13px;
            color: #00c3f3;
            font-weight: 400;
          }
        }
      }
    }
    .box-charts {
      position: relative;
      overflow: hidden;
      height: calc(100% - 110px);
      .l,
      .r {
        width: 50%;
        height: 100%;
      }
      .l {
        float: left;
        .chart-tit {
          margin-top: 10px;
          font-size: 0;
          text-align: center;
          span {
            padding: 0 8px;
            min-width: 120px;
            text-align: center;
            display: inline-block;
            vertical-align: middle;
            font-size: 13px;
            color: #d9f7ff;
            position: relative;
          }
          span:before {
            right: 100%;
          }
          span:after {
            left: 100%;
          }
        }
        .chart2 {
          // height: 212px;
        }
      }
      .r {
        float: right;
        .chart-tit {
          margin-top: 10px;
          font-size: 0;
          text-align: center;
          span {
            padding: 0 8px;
            min-width: 120px;
            text-align: center;
            display: inline-block;
            vertical-align: middle;
            font-size: 13px;
            color: #d9f7ff;
            position: relative;
          }
          span:before {
            right: 100%;
          }
          span:after {
            left: 100%;
          }
        }
        .chart3 {
          // height: 212px;
        }
      }
    }
    .box-charts:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      background: url("./../../assets/img/line-bg3.png") center center no-repeat;
      -webkit-background-size: 1px 90%;
      background-size: 1px 90%;
    }
  }
}

.chart-tit span:after,
.chart-tit span:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  background-image: url(./../../assets/img/chartt-i1.png);
}
/deep/.number-grow {
  width: 150px;
  height: 30px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 30px;
}
</style>