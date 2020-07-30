<template>
  <div class="ope4Con">
    <div class="ind-z1 ind-bg1 ope4-con1">
      <div class="tit-1">
        <h3>
          <span>本月发卡数统计</span>
        </h3>
      </div>
      <div style="width:100%;height:290px" id="monthHairpin"></div>
    </div>
    <div class="ind-z1 ind-bg1 ope4-con2">
      <div class="tit-1">
        <h3>
          <span>本月收费额同比/环比</span>
        </h3>
      </div>
      <div style="width:100%;height:290px" id="monthCharge"></div>
      <!-- v-if="spanAction==1"<div v-if="spanAction==2" style="width:100%;height:290px" id="monthCharge2"></div> -->
      <div class="btn">
        <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">同比</span>
        <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">环比</span>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 ope4-con3">
      <div class="tit-1">
        <h3>
          <span>本月车型收入统计</span>
        </h3>
      </div>
      <div id="echartsRing" style="width:50%;height:100%;display: inline-block;"></div>
      <div id="echartsRing1" style="width:50%;height:100%;display: inline-block;"></div>

      <div class="selectBox">
        <span>
          <i></i>选择路段:
        </span>
        <el-select
          v-model="value"
          placeholder="请选择"
          @change="monthRingDataSelect"
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
    <div class="ind-z1 ind-bg1 ope4-con4">
      <div class="tit-1">
        <h3>
          <span>路段优秀营运排行</span>
        </h3>
      </div>
      <div class="topRanking">
        <div class="heaRanking">微笑之星</div>
        <div class="ranking1">
          <div class="fl">{{smileList1[0]}}</div>
          <div class="fr">{{smileList1[1]}}</div>
        </div>
        <div class="ranking2">
          <div class="fl">{{smileList2[0]}}</div>
          <div class="fr">{{smileList2[1]}}</div>
        </div>
        <div class="ranking3">
          <div class="fl">{{smileList3[0]}}</div>
          <div class="fr">{{smileList3[1]}}</div>
        </div>
      </div>
      <div class="botRanking">
        <div class="heabotRanking">技能比武大赛排名</div>
        <div class="ranking1">
          <div class="fl">
            <img src="./../../assets/img/l6-num1.png" alt />
          </div>
          <div class="fr">{{skillList1[1]}}</div>
        </div>
        <div class="ranking2">
          <div class="fl">
            <img src="./../../assets/img/l6-num2.png" alt />
          </div>
          <div class="fr">{{skillList2[1]}}</div>
        </div>
        <div class="ranking3">
          <div class="fl">
            <img src="./../../assets/img/l6-num3.png" alt />
          </div>
          <div class="fr">{{skillList3[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Echarts from "echarts";
import "./../tools/echart-auto-tooltip";
export default {
  data() {
    return {
      spanAction: "",
      options: [
        {
          value: "黄黄路段",
          label: "黄黄路段"
        },
        {
          value: "麻武路段",
          label: "麻武路段"
        },
        {
          value: "武英路段",
          label: "武英路段"
        }
      ],
      value: "黄黄路段",
      mouthHairpinList: [],
      mouthChargeList: [],
      monthRingList: [],
      monthRingList1: [],
      smileList1: [],
      smileList2: [],
      smileList3: [],
      skillList1: [],
      skillList2: [],
      skillList3: []
    };
  },
  mounted() {
    this.mouthHairpinData();
    this.actionClickEven(0);
    this.monthRingDataSelect()
    this.smileEven();
    this.skillEven();
  },
  methods: {
    monthHairpinEcharts() {
      this.$nextTick(function() {
        var monthHairpin = Echarts.init(
          document.getElementById("monthHairpin")
        );
        //数据
        let dataList = this.mouthHairpinList;
        let fks = [];
        let sks = [];
        let kcl = [];
        dataList.forEach(val => {
          if (val.NAME == "发卡数") {
            fks = val.DATA;
          }
          if (val.NAME == "收卡数") {
            sks = val.DATA;
          }
          if (val.NAME == "卡存量") {
            kcl = val.DATA;
          }
        });
        let option = {
          color: ["#0fd7b0", "#279cff", "#ffcd06"],
          grid: {
            left: 60,
            right: 10,
            top: 32,
            bottom: 40
          },
          legend: {
            textStyle: {
              fontSize: 13,
              color: "#00c3f3"
            }
          },
          tooltip: {},
          dataset: {
            source: [
              ["product", "发卡数", "收卡数", "卡存量"],
              ["麻武路段", fks[0], sks[0], kcl[0]],
              ["武英路段", fks[1], sks[1], kcl[1]],
              ["黄黄路段", fks[2], sks[2], kcl[2]]
            ]
          },
          xAxis: {
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
              }
            }
          },
          yAxis: {
            name: "卡数（万张）",
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
          series: [
            { type: "bar", barWidth: 20, showBackground: true },
            { type: "bar", barWidth: 20, showBackground: true },
            { type: "bar", barWidth: 20, showBackground: true }
          ]
        };
        monthHairpin.setOption(option);
      });
    },
    mouthHairpinData() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_MonthGrantCard", {
          param: param
        })
        .then(res => {
          var _nstr = res.data.SERIESDATA.replace(/'/g, '"');
          this.mouthHairpinList = JSON.parse(_nstr);

          this.monthHairpinEcharts();
        });
    },
    monthChargeEcharts() {
      this.$nextTick(function() {
        var monthCharge = Echarts.init(document.getElementById("monthCharge"));
        //数据
        let action = this.spanAction;
        let mouthChargeList = this.mouthChargeList;
        let thisym = [];
        let lastym = [];
        let frontym = [];
        if (action == 0) {
          mouthChargeList.forEach(val => {
            if (val.NAME == "今年本月") {
              thisym = val.DATA;
            }
            if (val.NAME == "去年同月") {
              lastym = val.DATA;
            }
            if (val.NAME == "前年同月") {
              frontym = val.DATA;
            }
          });
        } else {
          mouthChargeList.forEach(val => {
            if (val.NAME == "今年本月") {
              thisym = val.DATA;
            }
            if (val.NAME == "今年上月") {
              lastym = val.DATA;
            }
            if (val.NAME == "今年前月") {
              frontym = val.DATA;
            }
          });
        }

        let option = {
          legend: {
            right: 8,
            top: "2%",
            icon: "rect",
            itemWidth: 13,
            textStyle: {
              color: "#00c3f3",
              fontSize: 14
            },
            data: ["今年本月", "去年同月", "前年同月"]
          },
          grid: {
            left: 60,
            right: 10,
            top: 32,
            bottom: 40
          },

          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#07476f"
              }
            },
            axisLabel: {
              color: "#00c3f3",
              fontSize: 14
            },
            axisTick: {
              show: false
            },
            data: ["麻武路段", "武英路段", "黄黄路段"]
          },
          yAxis: {
            type: "value",
            name: "（费用/万元）",
            nameLocation: "end",
            nameTextStyle: {
              color: "#00c3f3",
              fontSize: 14
            },
            axisLine: {
              lineStyle: {
                color: "transparent"
              }
            },
            axisLabel: {
              color: "#00c3f3",
              fontSize: 14
            },
            splitLine: {
              lineStyle: {
                color: "#07476f"
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: "今年本月",
              type: "bar",
              data: thisym,
              itemStyle: {
                color: "#0fd7b0"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            },
            {
              name: "去年同月",
              type: "bar",
              data: lastym,
              itemStyle: {
                color: "#279cff"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            },
            {
              name: "前年同月",
              type: "bar",
              data: frontym,
              itemStyle: {
                color: "#ffcd06"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            }
          ]
        };
        let option1 = {
          legend: {
            right: 8,
            top: "2%",
            icon: "rect",
            itemWidth: 14,
            textStyle: {
              color: "#00c3f3",
              fontSize: 14
            },
            data: ["今年本月", "今年上月", "今年前月"]
          },
          grid: {
            left: 60,
            right: 10,
            top: 32,
            bottom: 40
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#07476f"
              }
            },
            axisLabel: {
              color: "#00c3f3",
              fontSize: 14
            },
            axisTick: {
              show: false
            },
            data: ["麻武路段", "武英路段", "黄黄路段"]
          },
          yAxis: {
            type: "value",
            name: "（费用/万元）",
            nameLocation: "end",
            nameTextStyle: {
              color: "#00c3f3",
              fontSize: 14
            },
            axisLine: {
              lineStyle: {
                color: "transparent"
              }
            },
            axisLabel: {
              color: "#00c3f3",
              fontSize: 14
            },
            splitLine: {
              lineStyle: {
                color: "#07476f"
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: "今年本月",
              type: "bar",
              data: thisym,
              itemStyle: {
                color: "#0fd7b0"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            },
            {
              name: "今年上月",
              type: "bar",
              data: lastym,
              itemStyle: {
                color: "#279cff"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            },
            {
              name: "今年前月",
              type: "bar",
              data: frontym,
              itemStyle: {
                color: "#ffcd06"
              },
              barWidth: 20,
              showBackground: true,
              backgroundStyle: {
                color: "rgba(16, 75, 117, .6)"
              }
            }
          ]
        };
        if (action == 0) {
          monthCharge.setOption(option);
          option1 = {};
        } else {
          monthCharge.setOption(option1);
          option = {};
        }

        // tools.loopShowTooltip(monthCharge, option, { loopSeries: true }, 2000);
      });
    },
    mouthChargeData(i) {
      let param = { data: i };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_MonthChargeContrast", {
          param: param
        })
        .then(res => {
          var _nstr = res.data.SERIESDATA.replace(/'/g, '"');
          this.mouthChargeList = JSON.parse(_nstr);
          this.monthChargeEcharts();
        });
    },
    actionClickEven(index) {
      this.spanAction = index;
      this.mouthChargeData(index);
    },
    monthRingEcharts() {
      this.$nextTick(function() {
        var echartsRing = Echarts.init(document.getElementById("echartsRing"));
        const colorList = [
          "#0fd7b0",
          "#7dff23",
          "#d651cf",
          "#e4ff00",
          "#bb8322"
        ];
        //数据
        let dataList1 = this.monthRingList;
        let dataTotle = 0;
        dataList1.forEach(val => {
          dataTotle += val.value;
        });
        dataList1.forEach(ele => {
          ele.snum = ((ele.value / dataTotle) * 100).toFixed(2) + "%";
        });
        let option = {
          title: {
            text: parseInt(dataTotle),
            subtext: "总收入（万）",
            textStyle: {
              fontSize: 24,
              color: "#d9f7ff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "#00c3f3"
            },
            textAlign: "center",
            left: "48%",
            top: "28%"
          },
          tooltip: {
            trigger: "item",
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name.name == oa[i].name) {
                  return " " + name.name + " :  " + oa[i].snum;
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
            bottom: "15%",
            left: "10%",
            orient: "vertical",
            width: "200",
            height: "60",
            itemGap: 5,
            itemWidth: 15,
            itemHeight: 15,

            data: ["一型车", "二型车", "三型车", "四型车", "无称重"],
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                  return (
                    " " +
                    name +
                    "   " +
                    (oa[i].value > 9 ? oa[i].value : "0" + oa[i].value) +
                    "万       "
                  );
                }
              }
            },
            textStyle: {
              fontSize: "12",
              color: "#00c3f3"
            }
          },
          color: colorList,
          series: [
            {
              name: "车型",
              type: "pie",
              radius: ["30%", "48%"],
              center: ["50%", "35%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {},
              data: dataList1
              // [
              //   {
              //     name: "一型车",
              //     value: 12,
              //     snum: "20%"
              //   },
              //   {
              //     name: "二型车",
              //     value: 15,
              //     snum: "22%"
              //   },
              //   {
              //     name: "三型车",
              //     value: 10,
              //     snum: "25%"
              //   },
              //   {
              //     name: "四型车",
              //     value: 5,
              //     snum: "29%"
              //   },
              //   {
              //     name: "无称重",
              //     value: 3,
              //     snum: "30%"
              //   }
              // {
              //   name: "二轴车",
              //   value: 4,
              //   snum: "33%"
              // },
              // {
              //   name: "三轴车",
              //   value: 5,
              //   snum: "35%"
              // },
              // {
              //   name: "四轴车",
              //   value: 7,
              //   snum: "13%"
              // },
              // {
              //   name: "五轴车",
              //   value: 9,
              //   snum: "15%"
              // },
              // {
              //   name: "六轴及以上",
              //   value: 5,
              //   snum: "21%"
              // }
              // ]
            },
            {
              // 边框的设置
              radius: ["40%", "60%"],
              center: ["50%", "35%"],
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
        echartsRing.setOption(option);
        tools.loopShowTooltip(echartsRing, option, { loopSeries: true }, 3000);
      });
    },
    monthRingEcharts1() {
      this.$nextTick(function() {
        var echartsRing1 = Echarts.init(
          document.getElementById("echartsRing1")
        );
        const colorList1 = [
          "#632ef6",
          "#a235ff",
          "#279cff",
          "#ffcd06",
          "#fe6541"
        ];
        //数据
        let dataList2 = this.monthRingList1;
        let dataTotle1 = 0;
        dataList2.forEach(val => {
          dataTotle1 += val.value;
        });
        dataList2.forEach(ele => {
          ele.snum = ((ele.value / dataTotle1) * 100).toFixed(2) + "%";
        });

        let option = {
          title: {
            text: parseInt(dataTotle1),
            subtext: "总收入（万）",
            textStyle: {
              fontSize: 24,
              color: "#d9f7ff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "#00c3f3"
            },
            textAlign: "center",
            left: "48%",
            top: "28%"
          },
          tooltip: {
            trigger: "item",
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name.name == oa[i].name) {
                  return " " + name.name + " :  " + oa[i].snum;
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
            bottom: "15%",
            left: "10%",
            orient: "vertical",
            width: "200",
            height: "60",
            itemGap: 5,
            itemWidth: 15,
            itemHeight: 15,

            data: ["二轴车", "三轴车", "四轴车", "五轴车", "六轴及以上"],
            formatter: function(name) {
              var oa = option.series[0].data;
              for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                  return (
                    " " +
                    name +
                    "   " +
                    (oa[i].value > 9 ? oa[i].value : "0" + oa[i].value) +
                    "万       "
                  );
                }
              }
            },
            textStyle: {
              fontSize: "12",
              color: "#00c3f3"
            }
          },
          color: colorList1,
          series: [
            {
              name: "轴数",
              type: "pie",
              radius: ["30%", "48%"],
              center: ["50%", "35%"],
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              itemStyle: {},
              data:  dataList2 ,
            },
            {
              // 边框的设置
              radius: ["40%", "60%"],
              center: ["50%", "35%"],
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
        echartsRing1.setOption(option);
        tools.loopShowTooltip(echartsRing1, option, { loopSeries: true }, 4000);
      });
    },
    monthRingDataSelect(){
      this.monthRingData()
      this.monthRingData1()
    },
    monthRingData() {
      let param = { data: this.value };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_MonthIncomeModelModel", {
          param: param
        })
        .then(res => {
          this.monthRingList = eval(res.data.SERIESDATA);
          this.monthRingEcharts();
        });
    },
    monthRingData1() {
      let param = { data: this.value };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_MonthIncomeModelAxis", {
          param: param
        })
        .then(res => {
          this.monthRingList1 = eval(res.data.SERIESDATA);
          this.monthRingEcharts1();
        });
    },
    smileEven() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_SmilingStarRankingList", {
          param: param
        })
        .then(res => {
          this.smileList1 = res.data[0];
          this.smileList2 = res.data[1];
          this.smileList3 = res.data[2];
        });
    },
    skillEven() {
      let param = { data: "" };
      this.$apiWckj
        .post("/WCKJAPI_Operation", "/GetYunYingPage_SkillAssessRankingList", {
          param: param
        })
        .then(res => {
          this.skillList1 = res.data[0];
          this.skillList2 = res.data[1];
          this.skillList3 = res.data[2];
        });
    }
  }
};
</script>
<style lang="less" scoped>
.ope4Con {
  width: 100%;
  height: 100%;
  /deep/.ind-z1 {
    background-size: auto 4px;
  }
  .ope4-con1,
  .ope4-con2,
  .ope4-con3 {
    padding: 0 5px;
  }
  .ope4-con1 {
    width: 25%;
    height: 100%;
    float: left;
  }
  .ope4-con2 {
    width: 24.5%;
    height: 100%;
    float: left;
    position: relative;
    margin-left: 0.5%;
    .btn {
      position: absolute;
      top: 0;
      left: 10px;
      z-index: 10;
      span {
        padding: 0 5px;
        display: inline-block;
        min-width: 45px;
        font-size: 13px;
        color: #1ba0c2;
        line-height: 19px;
        text-align: center;
        margin: 10px 1px 0 0px;
        background-color: #0b5a92;
        cursor: pointer;
      }
    }
  }
  .ope4-con3 {
    width: 35.5%;
    height: 100%;
    float: left;
    position: relative;
    margin-left: 0.5%;
    // .ringBox{
    //   width: 300px;
    //   height: 100%;
    //   float: left;
    // }
    // .rightLegend{
    //   float: right;
    //   width: 360px;
    //   height: 100%;
    // }
    .selectBox {
      position: absolute;
      top: 10px;
      left: 0;
      i {
        width: 5px;
        height: 5px;
        background-color: #00b3ed;
        display: inline-block;
        margin: 2px 10px;
      }
      span {
        color: #00b3ed;
        font-size: 13px;
      }
    }
  }
  .ope4-con4 {
    width: 13.5%;
    height: 100%;
    margin-left: 0.5%;
    float: left;
    .topRanking {
      width: 100%;
      height: 140px;
      .heaRanking {
        width: 100%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        background-color: #09497a;
      }
    }
    .botRanking {
      width: 100%;
      height: 140px;
      .heabotRanking {
        width: 100%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        background-color: #09497a;
      }
    }
    .ranking1,
    .ranking2,
    .ranking3 {
      width: 100%;
      height: 37px;
      line-height: 37px;
      padding: 0 5px;
      color: #00beed;
      background: url("./../../assets/img/line-bg1.png") center bottom no-repeat;
      -webkit-background-size: 95% 1px;
      background-size: 95% 1px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
    .ranking3 {
      background: none;
    }
  }
}
.btspanboxAction {
  background-color: #00c1f3 !important;
  color: #d9f7ff !important;
}

/deep/.el-input__inner {
  width: 100px;
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
</style>