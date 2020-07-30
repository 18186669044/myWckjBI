<template>
  <div class="ind2Com">
    <div class="ind-bg1 ind-z1 ind-chart6">
      <div class="tit-1">
        <h3>
          <span>政工组织概况</span>
        </h3>
      </div>
      <div class="box-list1">
        <div class="list1-col">
          <ul class="list-2">
            <li>
              <div class="con">
                <div class="num">
                  <number-grow :value="dataObj.DW"></number-grow>
                </div>
                <h4>党支部</h4>
              </div>
            </li>
          </ul>
          <div class="chart4" id="l-echart6-1" style="height: 70%;"></div>
          <div class="bottomLoder">
            <i class="upper"></i>
            <h5>年度新增党员：{{newAdddyP}}</h5>
            <span>{{newAdddy}}人</span>
          </div>
        </div>
        <div class="list1-col">
          <ul class="list-2">
            <li>
              <div class="con">
                <div class="num">
                  <number-grow :value="dataObj.GH"></number-grow>
                </div>
                <h4>工会委员会</h4>
              </div>
            </li>
          </ul>
          <div class="chart4" id="l-echart6-2" style="height: 70%;"></div>
          <div class="bottomLoder">
            <i class="upper"></i>
            <h5>会员年度新增：{{newAddhyP}}</h5>
            <span>{{newAddhy}}人</span>
            <br />
            <i class="lower"></i>
            <h5>年度困难职工减少：{{newAddknP}}</h5>
            <span>{{newAddkn}}人</span>
          </div>
        </div>
        <div class="list1-col">
          <ul class="list-2">
            <li>
              <div class="con">
                <div class="num">
                  <number-grow :value="dataObj.TW"></number-grow>
                </div>
                <h4>团支部</h4>
              </div>
            </li>
          </ul>
          <div class="chart4" id="l-echart6-3" style="height: 70%;"></div>
          <div class="bottomLoder">
            <i class="upper"></i>
            <h5>团员年度新增：{{newAddtyP}}</h5>
            <span>{{newAddty}}人</span>
          </div>
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
      dataObj: {},
      dataList: [],
      newAdddy: 0,
      newAdddyP: "0",
      newAddhy: 0,
      newAddhyP: "0",
      newAddkn: 0,
      newAddknP: "0",
      newAddty: 0,
      newAddtyP: "0"
    };
  },
  mounted() {
    this.caseEchartsData();
  },
  methods: {
    Casecontent1Echarts() {
      this.$nextTick(function() {
        var echartcontent1PieCase = Echarts.init(
          document.getElementById("l-echart6-1")
        );
        let content1Data = [];
        this.dataList.forEach(val => {
          if (val.name == "党员占比") {
            content1Data.push(val);
          }
        });
        let feidyNum = {
          name: "非党员人数",
          number: this.dataObj.WrongDWtotal,
          percentage:
            (
              (this.dataObj.WrongDWtotal /
                (this.dataObj.WrongDWtotal + content1Data[0].number)) *
              100
            ).toFixed(2) + "%"
        };
        content1Data.push(feidyNum);
        const colorList = ["#ffcd06", "#0fd7b0"];
        content1Data.forEach(val => {
          val.value = val.number;
          if (val.name == "党员占比") {
            val.name = "党员人数";
          }
        });
        let option = {
          title: {
            text: content1Data[0].number,
            subtext: "党员占比\n" + content1Data[0].percentage, //党员人数
            textStyle: {
              fontSize: 23,
              color: "#d9f7ff",
              lineHeight: 20
            },
            subtextStyle: {
              fontSize: 13,
              color: "#029bc8"
            },
            textAlign: "center",
            left: "48%",
            top: "24%"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c}",
            position: function(p) {
              //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
            }
          },
          legend: {
            show: false,
            top: "80%",
            left: "1%",
            // data: ["年度新增党员",'党员总人数'],
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                  return " " + name + "     " + oa[i].snum + "人";
                }
              }
            },
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "13",
              color: "#00c3f3"
            },
            icon: "image://images/h-1.png"
          },
          color: colorList,
          series: [
            {
              name: "人数",
              type: "pie",
              radius: ["42%", "60%"],
              center: ["50%", "40%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {},
              data: content1Data
              // [
              //   {
              //     name: "总人数",
              //     value: 100
              //   },
              //   {
              //     name: "年度新增党员",
              //     value: 30
              //   }
              // ]
            },
            {
              // 边框的设置
              radius: ["68%", "59%"],
              center: ["50%", "40%"],
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
        echartcontent1PieCase.setOption(option);
        tools.loopShowTooltip(
          echartcontent1PieCase,
          option,
          { loopSeries: true },
          4000
        );
      });
    },
    Casecontent2Echarts() {
      this.$nextTick(function() {
        var echartcontent2PieCase = Echarts.init(
          document.getElementById("l-echart6-2")
        );
        let content1Data1 = [];
        this.dataList.forEach(val => {
          if (val.name == "会员占比") {
            content1Data1.push(val);
          }
        });
        let feihyNum = {
          name: "非会员人数",
          number: this.dataObj.WrongGHtotal,
          percentage:
            (
              (this.dataObj.WrongGHtotal /
                (this.dataObj.WrongGHtotal + content1Data1[0].number)) *
              100
            ).toFixed(2) + "%"
        };
        content1Data1.push(feihyNum);
        const colorList = ["#ffcd06", "#0fd7b0"];
        content1Data1.forEach(val => {
          val.value = val.number;
          if (val.name == "会员占比") {
            val.name = "会员人数";
          }
        });
        let option = {
          title: {
            text: content1Data1[0].number,
            subtext: "会员占比\n" + content1Data1[0].percentage,
            textStyle: {
              fontSize: 23,
              color: "#d9f7ff",
              lineHeight: 20
            },
            subtextStyle: {
              fontSize: 13,
              color: "#029bc8"
            },
            textAlign: "center",
            left: "48%",
            top: "24%"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c}",
            position: function(p) {
              //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
            }
          },
          // legend: {
          //   show: false,
          //   top: "80%",
          //   left: "1%",
          //   // data: [
          //   //   {
          //   //     name: "年度新增党员：12%",
          //   //     textStyle: {
          //   //       fontSize: 13,
          //   //       color: "#00c3f3"
          //   //     },
          //   //     icon: "image://images/h-2.png"
          //   //   },
          //   //   {
          //   //     name: "年度困难职工减少：8%",
          //   //     textStyle: {
          //   //       fontSize: 13,
          //   //       color: "#00c3f3"
          //   //     },
          //   //     icon: "image://images/l-2.png"
          //   //   }
          //   // ],
          //   // formatter: function(name) {
          //   //   var oa = option.series[0].data;
          //   //   for (var i = 0; i < option.series[0].data.length; i++) {
          //   //     if (name == oa[i].name) {
          //   //       return " " + name + "     " + oa[i].snum + "人";
          //   //     }
          //   //   }
          //   // },
          //   textStyle: {
          //     color: "rgba(255,255,255,.5)",
          //     fontSize: "13",
          //     color: "#00c3f3"
          //   },
          //   icon: "image://./images/h-1.png"
          // },
          color: colorList,
          series: [
            {
              name: "人数",
              type: "pie",
              radius: ["42%", "60%"],
              center: ["50%", "40%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {
                normal: {
                  shadowBlur: 30,
                  // shadowColor: 'rgba(255,227,42,0.3)',
                  shadowColor: "#063a61",
                  shadowOffsetX: -5,
                  shadowOffsetY: 5
                }
              },
              data: content1Data1
              // [
              //   {
              //     name: "年度新增党员：12%",
              //     value: 70,
              //     snum: "123"
              //   },
              //   {
              //     name: "年度困难职工减少：8%",
              //     value: 30,
              //     snum: "19"
              //   }
              // ]
            },
            {
              // 边框的设置
              radius: ["68%", "59%"],
              center: ["50%", "40%"],
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
        echartcontent2PieCase.setOption(option);
        tools.loopShowTooltip(
          echartcontent2PieCase,
          option,
          { loopSeries: true },
          3000
        );
      });
    },
    Casecontent3Echarts() {
      this.$nextTick(function() {
        var echartcontent3PieCase = Echarts.init(
          document.getElementById("l-echart6-3")
        );
        let content1Data2 = [];
        this.dataList.forEach(val => {
          if (val.name == "团员占比") {
            content1Data2.push(val);
          }
        });
        let feityNum = {
          name: "非团员人数",
          number: this.dataObj.WrongTWtotal,
          percentage:
            (
              (this.dataObj.WrongTWtotal /
                (this.dataObj.WrongTWtotal + content1Data2[0].number)) *
              100
            ).toFixed(2) + "%"
        };
        content1Data2.push(feityNum);
        const colorList = ["#ffcd06", "#0fd7b0"];
        content1Data2.forEach(val => {
          val.value = val.number;
          if (val.name == "团员占比") {
            val.name = "团员人数";
          }
        });
        let option = {
          title: {
            text: content1Data2[0].number,
            subtext: "团员占比\n" + content1Data2[0].percentage,
            textStyle: {
              fontSize: 23,
              color: "#d9f7ff",
              lineHeight: 20
            },
            subtextStyle: {
              fontSize: 13,
              color: "#029bc8"
            },
            textAlign: "center",
            left: "48%",
            top: "24%"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c}",
            position: function(p) {
              //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
            }
          },
          // legend: {
          //   show: true,
          //   top: "80%",
          //   left: "1%",
          //   data: ["年度新增党员：12%"],
          //   formatter: function(name) {
          //     var oa = option.series[0].data;
          //     for (var i = 0; i < option.series[0].data.length; i++) {
          //       if (name == oa[i].name) {
          //         return " " + name + "     " + oa[i].snum;
          //       }
          //     }
          //   },
          //   textStyle: {
          //     color: "rgba(255,255,255,.5)",
          //     fontSize: "13",
          //     color: "#00c3f3"
          //   },
          //   icon: "image://images/h-3.png"
          // },
          color: colorList,
          series: [
            {
              name: "人数",
              type: "pie",
              radius: ["42%", "60%"],
              center: ["50%", "40%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {},
              data: content1Data2
              // [
              //   {
              //     name: "年度新增党员：13",
              //     value: 70,
              //     snum: "2"
              //   },
              //   {
              //     name: "年度新增党员：12%",
              //     value: 30,
              //     snum: "123人"
              //   }
              // ]
            },
            {
              // 边框的设置
              radius: ["68%", "59%"],
              center: ["50%", "40%"],
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
        echartcontent3PieCase.setOption(option);
        tools.loopShowTooltip(
          echartcontent3PieCase,
          option,
          { loopSeries: true },
          2000
        );
      });
    },
    caseEchartsData() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Political", "/PoliticalWork", {
          param: param
        })
        .then(res => {
          this.dataObj = res.data;
          this.dataList = res.data.List;
          this.Casecontent1Echarts();
          this.Casecontent2Echarts();
          this.Casecontent3Echarts();
          let newAdd = res.data.List;
          newAdd.forEach(val => {
            if (val.name == "新增党员") {
              this.newAdddy = val.number;
              this.newAdddyP = val.percentage;
            }
            if (val.name == "新增会员") {
              this.newAddhy = val.number;
              this.newAddhyP = val.percentage;
            }
            if (val.name == "新增团员") {
              this.newAddty = val.number;
              this.newAddtyP = val.percentage;
            }
            if (val.name == "困难职工") {
              this.newAddkn = val.number;
              this.newAddknP = val.percentage;
            }
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ind2Com {
  position: relative;
  height: 100%;
  .ind-chart6 {
    // height: 355px;
    height: 100%;
    .box-list1 {
      display: -webkit-flex;
      display: flex;
      align-items: stretch;
      overflow: hidden;
      height: calc(100% - 42px);
      .list1-col {
        float: left;
        width: 33.33%;
        background: url("./../../assets/img/line-bg3.png") left center no-repeat;
        -webkit-background-size: 1px 100%;
        background-size: 1px 100%;
        position: relative;
        .list-2 {
          padding: 0 8.5px;
          display: -webkit-flex;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          li {
            width: 100%;
            float: left;
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
        // .chart4 {
        //   height: 230px;
        // }
        .bottomLoder {
          position: absolute;
          width: 100%;
          height: 45px;
          left: 0;
          bottom: 0;
          padding: 5px 10px;
          font-size: 13px;
          .upper {
            display: inline-block;
            width: 20px;
            height: 15px;
            background: url("./../../assets/img/upper.png") no-repeat 100% 100%;
            background-size: 100% 100%;
            vertical-align: text-bottom;
          }
          .lower {
            display: inline-block;
            width: 20px;
            height: 15px;
            background: url("./../../assets/img/lower.png") no-repeat 100% 100%;
            background-size: 100% 100%;
            vertical-align: text-bottom;
          }
          h5 {
            display: inline-block;
            color: #00b9e8;
            margin: 0 10px;
          }
          span {
            color: #fff;
          }
        }
      }
      .list1-col:first-child {
        background: 0 0;
      }
    }
  }
}

/deep/.number-grow {
  width: 150px;
  height: 30px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 30px;
}
</style>