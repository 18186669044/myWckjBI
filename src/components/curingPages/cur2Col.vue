<template>
  <div class="cur2Col">
    <div class="ind-z1 ind-bg1 cur2Col1">
      <div class="tit-1">
        <h3>
          <span>养护巡查任务</span>
        </h3>
      </div>
      <div class="tableV">
        <div class="list-8">
          <li
            v-for="(item,index) in patrolList"
            :key="index"
            @mouseenter="enter(index)"
            @mouseleave="leave()"
            :class="liHoverNum==index?'liHoverCss':''"
          >
            <a href="javascript:void(0)">
              <div class="name">{{item.name}}</div>
              <div class="date">{{item.date}}</div>
              <h4>{{item.centent}}</h4>
            </a>
          </li>
        </div>
      </div>
      <div class="btn">
        <span :class="spanAction==0?'btspanboxAction':''" @click="actionClickEven(0)">养护任务</span>
        <span :class="spanAction==1?'btspanboxAction':''" @click="actionClickEven(1)">施工情况</span>
      </div>
    </div>
    <div class="ind-z1 ind-bg1 cur2Col2">
      <div class="tit-1">
        <h3>
          <span>桥梁统计图</span>
        </h3>
      </div>
      <ul class="list-10">
        <li>
          <div class="con">
            <div class="num">{{bridgeObj.ZB}}</div>
            <h4>二类以上占比：</h4>
          </div>
        </li>
        <li>
          <div class="con">
            <div class="num">{{bridgeObj.NUM}}</div>
            <h4>二类以上桥梁（座）：</h4>
          </div>
        </li>
      </ul>
      <div class="maintain-chart1" id="maintain-chart1"></div>
    </div>
    <div class="ind-z1 ind-bg1 cur2Col3">
      <div class="tit-1">
        <h3>
          <span>隧道统计图</span>
        </h3>
      </div>
      <div class="maintain-chart2" id="maintain-chart2"></div>
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
      liHoverNum: null,
      patrolList: [
        {
          name: "桥梁巡查",
          date: "1分钟前",
          centent: "K123+45发生隧道拥堵事件拥堵事件拥堵事件拥堵..."
        },
        {
          name: "桥梁巡查",
          date: "18分钟前",
          centent: "麻城东#3气象检测检测设气象检测检测设。"
        },
        { name: "桥梁巡查", date: "45分钟前", centent: "举水河桥面温度过低。" },
        {
          name: "桥梁巡查",
          date: "1小时前",
          centent: "微信用户上报恶劣天气突发上报恶劣天气突发上报..."
        },
        {
          name: "桥梁巡查",
          date: "1小时前",
          centent: "K506道路拥挤，行车需缓慢。"
        },
        {
          name: "桥梁巡查",
          date: "1天前",
          centent: "微信用户上报求助服务求助服务。"
        }
      ],
      tunnerList: [],
      bridgeList: [],
      bridgeObj: {}
    };
  },
  mounted() {
    this.actionClickEven(0);

    this.bridgeData();

    this.tunnerData();
  },
  methods: {
    bridgeEachers() {
      this.$nextTick(function() {
        var bridgeEachers1 = Echarts.init(
          document.getElementById("maintain-chart1")
        );
        let dataList = this.bridgeList;
        let yiList = [];
        let erList = [];
        let sanList = [];
        dataList.forEach(val => {
          if (val.NAME == "一类桥梁") {
            yiList = val.DATA;
          }
          if (val.NAME == "二类桥梁") {
            erList = val.DATA;
          }
          if (val.NAME == "三类桥梁") {
            sanList = val.DATA;
          }
        });
        let option = {
          legend: {
            right: 8,
            top: "5%",
            icon: "rect",
            itemWidth: 14,
            textStyle: {
              color: "#00c3f3",
              fontSize: 14
            }
          },
          grid: {
            left: "10%",
            top: "24%",
            right: 13,
            bottom: "12%"
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
            name: "（桥梁/座）",
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
              name: "一类桥梁",
              type: "bar",
              data: yiList,
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
              name: "二类桥梁",
              type: "bar",
              data: erList,
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
              name: "三类桥梁",
              type: "bar",
              data: sanList,
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

        bridgeEachers1.setOption(option);
        tools.loopShowTooltip(
          bridgeEachers1,
          option,
          { loopSeries: true },
          3000
        );
      });
    },
    bridgeData() {
      let param = { data: "" };
      this.$apiWckj
        .post(
          "WCKJAPI_RoadProperty",
          "/GetYangHuPage_SectionBridgeTypeStatistics",
          {
            param: param
          }
        )
        .then(res => {
          this.bridgeList = eval(res.data.SERIESDATA);
          this.bridgeObj = res.data;
          this.bridgeEachers();
        });
    },
    TunnerEachers() {
      this.$nextTick(function() {
        var TunnerEachers1 = Echarts.init(
          document.getElementById("maintain-chart2")
        );
        //data
        let dataList = this.tunnerList;
        let changlei = [];
        let zhonglei = [];
        let duanlei = [];
        dataList.forEach(val => {
          if (val.NAME == "长隧道") {
            changlei = val.DATA;
          }
          if (val.NAME == "中隧道") {
            zhonglei = val.DATA;
          }
          if (val.NAME == "短隧道") {
            duanlei = val.DATA;
          }
        });
        let option = {
          legend: {
            right: 8,
            top: "0%",
            icon: "rect",
            itemWidth: 14,
            textStyle: {
              color: "#00c3f3",
              fontSize: 14
            }
          },
          grid: {
            left: "10%",
            top: "20%",
            right: 13,
            bottom: "12%"
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
            name: "（隧道/座）",
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
              name: "长隧道",
              type: "bar",
              data: changlei,
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
              name: "中隧道",
              type: "bar",
              data: zhonglei,
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
              name: "短隧道",
              type: "bar",
              data: duanlei,
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

        TunnerEachers1.setOption(option);
        tools.loopShowTooltip(
          TunnerEachers1,
          option,
          { loopSeries: true },
          3000
        );
      });
    },
    tunnerData() {
      let param = { data: "" };
      this.$apiWckj
        .post(
          "WCKJAPI_RoadProperty",
          "/GetYangHuPage_SectionTunnelTypeStatistics",
          {
            param: param
          }
        )
        .then(res => {
          this.tunnerList = eval(res.data.SERIESDATA);
          this.TunnerEachers();
        });
    },
    actionClickEven(index) {
      if (index == 1) {
        // this.patrolList = [
        //   {
        //     name: "小修保养",
        //     date: "1分钟前",
        //     centent: "G42麻武沿线坑槽应急修补"
        //   },
        //   {
        //     name: "小修保养",
        //     date: "2小时前",
        //     centent: "麻城东#3气象检测检测设气象检测检测设。"
        //   },
        //   {
        //     name: "桥梁施工",
        //     date: "45分钟前",
        //     centent: "举水河桥面温度过低。"
        //   },
        //   {
        //     name: "桥梁施工",
        //     date: "1小时前",
        //     centent: "微信用户上报恶劣天气突发上报恶劣天气突发上报..."
        //   },
        //   {
        //     name: "桥梁施工",
        //     date: "1小时前",
        //     centent: "K506道路拥挤，行车需缓慢。"
        //   },
        //   {
        //     name: "桥梁施工",
        //     date: "1天前",
        //     centent: "微信用户上报求助服务求助服务。"
        //   }
        // ];
        this.sgqkData();
      } else {
        // this.patrolList = [
        //   {
        //     name: "桥梁巡查",
        //     date: "1分钟前",
        //     centent: "K123+45发生隧道拥堵事件拥堵事件拥堵事件拥堵..."
        //   },
        //   {
        //     name: "桥梁巡查",
        //     date: "18分钟前",
        //     centent: "麻城东#3气象检测检测设气象检测检测设。"
        //   },
        //   {
        //     name: "桥梁巡查",
        //     date: "45分钟前",
        //     centent: "举水河桥面温度过低。"
        //   },
        //   {
        //     name: "桥梁巡查",
        //     date: "1小时前",
        //     centent: "微信用户上报恶劣天气突发上报恶劣天气突发上报..."
        //   },
        //   {
        //     name: "桥梁巡查",
        //     date: "1小时前",
        //     centent: "K506道路拥挤，行车需缓慢。"
        //   },
        //   {
        //     name: "桥梁巡查",
        //     date: "1天前",
        //     centent: "微信用户上报求助服务求助服务。"
        //   }
        // ];
        this.yhrwData();
      }
      this.spanAction = index;
    },
    yhrwData() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_RoadProperty", "/GetYangHuPage_CuringPatrolTaskList", {
          param: param
        })
        .then(res => {
          let listData = [];
          let listObj = {};
          res.data.forEach(val => {
            listObj = {
              name: val[1],
              centent: val[2],
              date: val[3]
            };
            listData.push(listObj);
          });

          this.patrolList = listData.splice(0,5);
        });
    },
    sgqkData() {
      let param = {
        data: { total: 0, pageSize: 6, pageIndex: 1, pageobj: "" }
      };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/GetConstructionListForBI", {
          param: param
        })
        .then(res => {
          let listData = [];
          let listObj = {};
          res.data.rows.forEach(val => {
            listObj = {
              name: val.CONSTTYPE,
              centent:
                val.HIGHTSPEED +
                val.SECTION +
                "K" +
                (val.STARTPILENO.substring(val.STARTPILENO.length - 3) == "000"
                  ? val.STARTPILENO.substring(0, val.STARTPILENO.length - 4)
                  : val.STARTPILENO.substring(0, val.STARTPILENO.length - 4) +
                    "+" +
                    val.STARTPILENO.substring(val.STARTPILENO.length - 3)) +
                "至" +
                "K" +
                (val.ENDPILENO.substring(val.ENDPILENO.length - 3) == "000"
                  ? val.ENDPILENO.substring(0, val.ENDPILENO.length - 4)
                  : val.ENDPILENO.substring(0, val.ENDPILENO.length - 4) +
                    "+" +
                    val.ENDPILENO.substring(val.ENDPILENO.length - 3)) +
                val.ENTRYNAME,
              date: val.STARTDATE.substring(0, 10)
            };
            listData.push(listObj);
          });
          this.patrolList = listData.splice(0,5);;
        });
    },
    enter(index) {
      this.liHoverNum = index;
    },
    leave() {
      this.liHoverNum = null;
    }
  }
};
</script>
<style lang="less" scoped>
.cur2Col {
  width: 100%;
  height: 100%;
  .cur2Col2,
  .cur2Col3 {
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .cur2Col1 {
    width: 100%;
    // height: 280px;
    height: 33.3%;
    position: relative;
    .tableV {
      width: 100%;
      height: 250px;
      visibility: visible;
      .list-8 {
        padding-top: 3px;
        list-style: none;
        .liHoverCss {
          background-color: rgba(15, 215, 176, 0.3) !important;
        }
        .liHoverCss:after {
          content: "";
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          border: 7px solid;
          border-color: transparent transparent transparent
            rgba(15, 215, 176, 0.3);
        }
        li {
          line-height: 40px;
          position: relative;
          -webkit-transition: 0.3s;
          -o-transition: 0.3s;
          transition: 0.3s;
          a {
            display: block;
            overflow: hidden;
            color: #333;
            text-decoration: none;
            .name {
              float: left;
              font-size: 14px;
              color: #ffcd06;
              text-align: center;
              width: 88px;
              position: relative;
            }
            .name:after {
              margin-top: -7px;
              content: "";
              position: absolute;
              right: 0;
              top: 50%;
              width: 1px;
              height: 14px;
              background: url("./../../assets/img/l7-line1.png") center center
                no-repeat;
              -webkit-background-size: cover;
              background-size: cover;
            }
            .date {
              margin-left: 24px;
              padding-right: 24px;
              width: 20%;
              text-align: right;
              float: right;
              font-size: 13px;
              color: #00c3f3;
              background: url("./../../assets/img/icon-date.png") right center
                no-repeat;
              position: relative;
            }
            .date:before {
              margin-top: -7px;
              content: "";
              position: absolute;
              left: 0;
              top: 50%;
              width: 1px;
              height: 14px;
              background: url("./../../assets/img/l7-line1.png") center center
                no-repeat;
              -webkit-background-size: cover;
              background-size: cover;
            }
            h4 {
              padding: 0 16px;
              font-size: 14px;
              color: #d9f7ff;
              font-weight: 400;
              white-space: nowrap;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
        li:nth-child(odd) {
          background-color: rgba(11, 90, 146, 0.4);
        }
      }
    }
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
  }
  .cur2Col2 {
    width: 100%;
    // height: 290px;
    height: 33.3%;
    .list-10 {
      padding: 0 6px;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        .con {
          margin: 0 5px;
          padding: 0 10px 0 14px;
          background-color: rgba(11, 90, 146, 0.6);
          line-height: 40px;
          overflow: hidden;
          .num {
            margin-left: 10px;
            float: right;
            font-size: 15px;
            color: #ffcd06;
          }
          h4 {
            font-size: 14px;
            color: #00c3f3;
            font-weight: 400;
            overflow: hidden;
          }
        }
      }
    }
    .maintain-chart1 {
      width: 100%;
      height:68%;
    }
  }
  .cur2Col3 {
    width: 100%;
    // height: 226px;
    height: 33.3%;
    .maintain-chart2 {
      width: 100%;
      height: 79.4%;
    }
  }
}
.btspanboxAction {
  background-color: #00c1f3 !important;
  color: #d9f7ff !important;
}
</style>