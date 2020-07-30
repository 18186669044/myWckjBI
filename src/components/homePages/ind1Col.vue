<template>
  <div class="ind1Cod">
    <div class="ind-bg1 ind-z1 ind-chart1">
      <div class="tit-1">
        <h3>
          <span>管辖路段概况</span>
        </h3>
      </div>
      <div class="table-1">
        <dv-scroll-board :config="config" style="width:99%;height:100%;margin-left:0.5%;" />
      </div>
    </div>
    <div class="ind-bg1 ind-z1 ind-chart2">
      <div class="tit-1">
        <h3>
          <span>年度各科室部门预算及执行情况</span>
        </h3>
      </div>
      <div class="total-1">
        <div class="num">
          <number-grow :time="1" :value="budgetNum"></number-grow>
        </div>
        <h4>年度总预算（万元）</h4>
      </div>
      <div class="chart1" id="l-echart8-1" style="height: 80%;"></div>
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
import Echarts from "echarts";
import numberGrow from "./../tools/numberGrow";
export default {
  components: {
    numberGrow
  },
  data() {
    return {
      config: {
        header: ["路段", "里程", "收费站", "服务区", "养护站"],
        data: [],
        rowNum: 3,
        headerBGC: "#094f84",
        oddRowBGC: "#063e6d",
        evenRowBGC: "#063e6d",
        headerHeight: 30,
        align: ["center", "center", "center", "center", "center"]
      },
      num: 456321,
      budgetDataList: [],
      budgetNum: 3434
    };
  },
  mounted() {
    this.guanxiaSection();
    this.budgetData();
  },
  methods: {
    CaseEcharts() {
      this.$nextTick(function() {
        var echartPieCase = Echarts.init(
          document.getElementById("l-echart8-1")
        );
        let budgetDataL = this.budgetDataList;
        let valList = [];
        budgetDataL.forEach(ele => {
          valList.push(ele.SBAMOUNT);
        });
        echartPieCase.setOption({
          color: ["#0fd7b0", "#279cff", "#ffcd06", "#fe6541"],

          tooltip: {
            trigger: "axis"
          },
          radar: {
            center: ["50%", "50%"], // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: [50, 100], // 圆的半径，数组的第一项是内半径，第二项是外半径。

            //shape: 'circle',
            name: {
              formatter: function(value, indicator) {
                return (
                  "{a| " +
                  indicator.sum +
                  " }" +
                  "\n" +
                  "{b|" +
                  value +
                  " }" +
                  "\n" +
                  "{c|" +
                  indicator.max +
                  "万}"
                );
              },
              lineHeight: 14,
              rich: {
                a: {
                  color: "#d9f7ff",
                  fontSize: 15
                },
                b: {
                  color: "#00c3f3",
                  fontSize: 14
                },
                c: {
                  color: "#ffcd06",
                  fontSize: 13
                }
              }
              // textStyle: {
              //     color: 'red',
              //     borderRadius: 3,
              //     padding: [1,3,1, 3]
              // }
            },
            axisLine: {
              lineStyle: {
                color: "#095f9d", // 坐标轴线线的颜色。
                width: 1, // 坐标轴线线宽。
                type: "dashed" // 坐标轴线线的类型。
              }
            },
            splitLine: {
              // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
              lineStyle: {
                color: "rgba(12,138,211,0.2)", // 分隔线颜色
                width: 1 // 分隔线线宽
              }
            },
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: ["rgba(14,101,164,0.2)"] // 分隔区域颜色分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },

            indicator: budgetDataL
            // [
            //   {
            //     name: "后勤服务中心",
            //     max: 147.5,
            //     sum: "32.77%"
            //   },
            //   {
            //     name: "收费查资料",
            //     max: 200,
            //     sum: "0.13%"
            //   },
            //   {
            //     name: " 工程养护",
            //     max: 300,
            //     sum: "0.14%"
            //   },
            //   {
            //     name: "安全应急办公室",
            //     max: 153,
            //     sum: "0.15%"
            //   },
            //   {
            //     name: "处理监控信息中心",
            //     max: 147.5,
            //     sum: "1.49%"
            //   },
            //   {
            //     name: "计划财务料",
            //     max: 153,
            //     sum: "18.36%"
            //   }
            // ]
          },
          series: [
            {
              name: " ",
              type: "radar",
              tooltip: {
                trigger: "item",
                formatter: function(value, indicator) {
                  return (
                    "<div>" +
                    "已申报：" +
                    "</div>" +
                    budgetDataL[0].name +
                    ":" +
                    budgetDataL[0].SBAMOUNT +
                    "万" +
                    "<br />" +
                    budgetDataL[1].name +
                    ":" +
                    budgetDataL[1].SBAMOUNT +
                    "万" +
                    "<br />" +
                    budgetDataL[2].name +
                    ":" +
                    budgetDataL[2].SBAMOUNT +
                    "万" +
                    "<br />" +
                    budgetDataL[3].name +
                    ":" +
                    budgetDataL[3].SBAMOUNT +
                    "万" +
                    "<br />" +
                    budgetDataL[4].name +
                    ":" +
                    budgetDataL[4].SBAMOUNT +
                    "万"
                    // "{a| " +value.sum + "次" + " }" + "\n" +
                    // "{b|" +value +" }" +"\n" +
                    // "{c|" +indicator.max +"%" +"}"
                  );
                }
              },
              itemStyle: {
                // 折线拐点标志的样式。
                normal: {
                  // 普通状态时的样式
                  lineStyle: {
                    width: 1,
                    color: "#f3f60a"
                  },
                  opacity: 0.8
                },
                emphasis: {
                  // 高亮时的样式
                  lineStyle: {
                    width: 3,
                    color: "#f3f60a"
                  },
                  opacity: 1
                }
              },
              data: [
                {
                  value: valList, // [80.3, 126, 96, 86, 80.3, 86],
                  label: {
                    normal: {
                      show: true, // 单个拐点文本的样式设置。[ default: false ]
                      position: "top", // 标签的位置。[ default: top ]
                      distance: 1, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                      color: "#d9f7ff", // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                      fontSize: 13, // 文字的字体大小
                      formatter: function(params) {
                        return params.value + "万";
                      }
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: "rgba(226,196,30,.8)" // 选择区域颜色开支
                    }
                  }
                }
              ]
            }
          ]
        });
      });
    },
    guanxiaSection() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Operation", "/GetHomePage_JurisdictionSection", {
          param: param
        })
        .then(res => {
          let dataList = res.data;
          dataList.forEach(val => {
            dataList.push(val);
          });
          this.config = {
            data: dataList,
            header: ["路段", "里程", "收费站", "服务区", "养护站"],
            rowNum: 3,
            headerBGC: "#094f84",
            oddRowBGC: "#063e6d",
            evenRowBGC: "#063e6d",
            headerHeight: 30,
            align: ["center", "center", "center", "center", "center"]
          };
        });
    },
    budgetData() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Finance", "/GetBIFinanceBudget", {
          param: param
        })
        .then(res => {
          this.budgetDataList = res.data;
          this.budgetNum = Number(this.budgetDataList[10].AMOUNT);
          this.budgetDataList.splice(10, 1);
          this.budgetDataList.forEach((val, index) => {
            val.name = val.DENAME;
            val.sum = val.SF;
            val.max = val.AMOUNT;
          });
          this.CaseEcharts();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ind1Cod {
  position: relative;
  height: 100%;
  .ind-bg1-border {
    width: 101%;
    // height: 192px;
    height: 31%;
    position: absolute;
    top: 0;
    left: -0.5%;
  }
  .ind-bg2-border {
    width: 101%;
    // height: 419px;
    height: 68%;
    position: absolute;
    bottom: 0;
    left: -0.5%;
  }
}
.ind-chart1 {
  width: 100%;
  // height: 192px;
  height: 31%;
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
.ind-chart2 {
  width: 100%;
  height: 67.5%;
  .total-1 {
    padding: 0 20px 0 10px;
    background-color: rgba(11, 90, 146, 0.6);
    overflow: hidden;
    .num {
      float: right;
      font-size: 24px;
      color: #ffcd06;
      font-weight: 700;
      font-family: DIGIB;
      overflow: hidden;
      width: 40%;
      text-align: right;
    }
    h4 {
      padding-left: 23px;
      font-size: 14px;
      color: #00c3f3;
      font-weight: 400;
      background: url("./../../assets/img/total-i1.png") left center no-repeat;
      overflow: hidden;
      height: 100%;
    }
  }
  .chart1 {
    width: 100%;
    z-index: 2;
  }
}

/deep/.number-grow {
  display: inline-block;
  line-height: 0;
}
</style>