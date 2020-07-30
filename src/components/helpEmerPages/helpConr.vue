<template>
  <div class="helpCon">
    <div class="ind-bg1 helpCon-r">
      <baidu-map
        class="map"
        :center="center"
        :zoom="zoom"
        :scrollWheelZoom="true"
        @ready="handler"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom"
        ak="P6QfOGrhFllpZodPYeF7RW1nN1B9rp62"
      >
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of telephoneList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of cameraList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of VMSList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of signalList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of carManageList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of carERList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of emerEventList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of emerUnitList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of emerWareHouseList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of emerOtherUnitList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of constructionList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of mobileDeviceList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of warningAlarmList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of proneSectionList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="(marker,index) of sectionEventList"
            :key="index"
            :icon="{url: marker.baiduMapIcon, size: {width: 22, height: 40}}"
            :position="{lng: marker.LOCCUSLON, lat: marker.LOCCUSLAT}"
            @mouseover="mouseover(marker)"
            @mouseout="mouseout(marker)"
            @click="mapClick(marker)"
          >
            <bm-info-window
              :show="marker.showFlag"
              :width="0"
              :maxWidth="220"
              :height="0"
              :offset="{width: -10, height: -10}"
              :position="{lng: marker.lng, lat: marker.lat}"
              @close="infoWindowClose"
              @open="infoWindowOpen"
            >
              <img :src="imgsrc" alt style="width:200px!important;height:150px!important" />
            </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
      </baidu-map>
      <div class="total-num4" v-if="growShow">
        <div class="item">
          <h3 class="tit">年度突发事件数量统计（件）</h3>
          <ul class="list-7">
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.YJ"></number-grow>
              </div>
              <h4>预警</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.SB"></number-grow>
              </div>
              <h4>上报</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.QR"></number-grow>
              </div>
              <h4>确认</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.CZ"></number-grow>
              </div>
              <h4>处置</h4>
            </li>
          </ul>
        </div>
        <div class="item">
          <h3 class="tit">年度客服热线接线数量统计</h3>
          <ul class="list-7">
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.QZ"></number-grow>
              </div>
              <h4>求助</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.ZX"></number-grow>
              </div>
              <h4>咨询</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.TS"></number-grow>
              </div>
              <h4>投诉</h4>
            </li>
            <li>
              <div class="num">
                <number-grow :value="dataStaObj.QT"></number-grow>
              </div>
              <h4>其他</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-4">
        <li @mousemove="lienter(1)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==1?'iconbg1':''" :style="note"></i>
            <h4>机电</h4>
          </div>
          <div class="bd" :class="liHover==1?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="jkPhone" @change="jiankongPhoneEven()" />
                  <h5>监控电话{{jidian1.COUNT?jidian1.COUNT:0}}座</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="jkCamera"
                    @change="jiankongCameraEven()"
                  />
                  <h5>监控摄像头{{jidian2.COUNT?jidian2.COUNT:0}}个</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="infoBoard" @change="infoBoardEven()" />
                  <h5>情报板{{jidian3.COUNT?jidian3.COUNT:0}}条</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="trafficLight"
                    @change="trafficLightEven()"
                  />
                  <h5>交通信号灯{{jidian4.COUNT?jidian4.COUNT:0}}处</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(2)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==2?'iconbg1':''" :style="note1"></i>
            <h4>车辆</h4>
          </div>
          <div class="bd" :class="liHover==2?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="manaCar" @change="manaCarEven()" />
                  <h5>管理车辆{{car1.COUNT?car1.COUNT:0}}辆</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="resVehicle" @change="resVehicleEven()" />
                  <h5>救援车辆{{car2.COUNT?car2.COUNT:0}}辆</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(3)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==3?'iconbg1':''" :style="note2"></i>
            <h4>应急</h4>
          </div>
          <div class="bd" :class="liHover==3?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="emerEvent" @change="emerEventEven()" />
                  <h5>突发事件{{helpConr1.COUNT?helpConr1.COUNT:0}}起</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input type="checkbox" name="1" :checked="emerUnit" @change="emerUnitEven()" />
                  <h5>救援单位{{helpConr2.COUNT?helpConr2.COUNT:0}}所</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emerWareHouse"
                    @change="emerWareHouseEven()"
                  />
                  <h5>物资仓库{{helpConr3.COUNT?helpConr3.COUNT:0}}座</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emerOtherUnit"
                    @change="emerOtherUnitEven()"
                  />
                  <h5>应急力量{{helpConr4.COUNT?helpConr4.COUNT:0}}处</h5>
                </label>
              </div>
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="construction"
                    @change="constructionEven()"
                  />
                  <h5>施工路段{{helpConr5.COUNT?helpConr5.COUNT:0}}处</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(4)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==4?'iconbg1':''" :style="note3"></i>
            <h4>事件</h4>
          </div>
          <div class="bd" :class="liHover==4?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="yujingbaojing"
                    @change="warningAlarmEven()"
                  />
                  <h5>预警报警{{event1.COUNT?event1.COUNT:0}}次</h5>
                </label>
              </div>
         
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="shiguluduan"
                    @change="sectionEventEven()"
                  />
                  <h5>事故路段{{event4.COUNT?event4.COUNT:0}}处</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(5)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==5?'iconbg1':''" :style="note4"></i>
            <h4>单兵</h4>
          </div>
          <div class="bd" :class="liHover==5?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="mobileDevice"
                    @change="mobileDeviceEven()"
                  />
                  <h5>移动单兵{{danbing.COUNT?danbing.COUNT:0}}座</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <dialog-shoufeizhan
      v-if="dialogVisible"
      @showfromChild="showfromChild"
      :dialogVisible="dialogVisible"
      :dialogObj="dialogObj"
    />
  </div>
</template>
<script>
import ind1Com from "./../../components/homePages/ind1Com.vue";
import numberGrow from "./../tools/numberGrow";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import bmMarker from "vue-baidu-map/components/overlays/Marker.vue";
import bmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow.vue";
import mapStyleJson from "./../tools/custom_map_config.json";
import dialogShoufeizhan from "./../mapdis/dialogShoufeizhan";
import { BmlMarkerClusterer } from "vue-baidu-map";
export default {
  components: {
    ind1Com,
    numberGrow,
    BaiduMap,
    bmMarker,
    bmInfoWindow,
    BmlMarkerClusterer,
    dialogShoufeizhan,
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      liHover: null,
      markers: [],
      imgsrc: "",
      baiduMapIcon: require("./../../assets/img/map-point.png"),
      note: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i1.png") + ")",
      },
      note1: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i4.png") + ")",
      },
      note2: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i5.png") + ")",
      },
      note3: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i3.png") + ")",
      },
      note4: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i6.png") + ")",
      },
      jkPhone: false,
      jkCamera: false,
      infoBoard: false,
      trafficLight: false,
      manaCar: false,
      emerEvent: false,
      resVehicle: false,
      emerUnit: false,
      emerWareHouse: false,
      emerOtherUnit: false,
      construction: false,
      mobileDevice: false,
      yujingbaojing: false,
      tufashijian: false,
      shiguyifa: false,
      shiguluduan: false,

      dataStaObj: {},
      growShow: false,

      //HClist4
      jidian1: {},
      jidian2: {},
      jidian3: {},
      jidian4: {},
      car1: {},
      car2: {},
      helpConr1: {},
      helpConr2: {},
      helpConr3: {},
      helpConr4: {},
      helpConr5: {},
      event1: {},
      event2: {},
      event3: {},
      event4: {},
      event5: {},
      danbing: {},
      telephoneList: [],
      cameraList: [],
      VMSList: [],
      signalList: [],
      carManageList: [],
      carERList: [],
      emerEventList: [],
      emerUnitList: [],
      emerWareHouseList: [],
      emerOtherUnitList: [],
      constructionList: [],
      mobileDeviceList: [],
      warningAlarmList: [],
      sectionEventList:[],
      proneSectionList:[],
      //弹框
      dialogVisible: false,
      dialogObj: {},
    };
  },
  mounted() {
    this.dataSta();
    this.HClist4();
  },
  methods: {
    //1.	GIS地图底部机电，车辆，应急，事件，单兵展开项数量列表
    HClist4() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/GetCountListByMPTypeForBI", {
          param: param,
        })
        .then((res) => {
      
          if (res) {
            res.data.forEach((val) => {
              if (val.MPTYPE == "Telphone") {
                this.jidian1 = val;
              }
              if (val.MPTYPE == "MonitorCamera") {
                this.jidian2 = val;
              }
              if (val.MPTYPE == "VMS") {
                this.jidian3 = val;
              }
              if (val.MPTYPE == "Signal") {
                this.jidian4 = val;
              }
              if (val.MPTYPE == "CarManage") {
                this.car1 = val;
              }
              if (val.MPTYPE == "CarEmergencyRescue") {
                this.car2 = val;
              }
              if (val.MPTYPE == "EmergentEvent") {
                this.helpConr1 = val;
              }
              if (val.MPTYPE == "EmergencyUnit") {
                this.helpConr2 = val;
              }
              if (val.MPTYPE == "EmergencyWarehouse") {
                this.helpConr3 = val;
              }
              if (val.MPTYPE == "EmergencyOtherUnit") {
                this.helpConr4 = val;
              }
              if (val.MPTYPE == "MobileDevice") {
                this.danbing = val;
              }
              if (val.MPTYPE == "WarningAlarm") {
                this.event1 = val;
              }
              if (val.MPTYPE == "ProneSection") {
                this.event3 = val;
              }
              if (val.MPTYPE == "SectionEvent") {
                this.event4 = val;
              }
              if (val.MPTYPE == "Construction") {
                this.helpConr5 = val;
              }
            });
          }
        });
    },
    dataSta() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/EAnnualSummaryForBI", { param: param })
        .then((res) => {
          this.dataStaObj = res.data;
          this.growShow = true;
        });
    },
    lileave() {
      this.liHover = null;
    },
    lienter(i) {
      this.liHover = i;
    },
    jiankongPhoneEven() {
      this.jkPhone = !this.jkPhone;
      if (this.jkPhone) {
        let param = { data: "Telphone" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
      
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.telephoneList = middleList;
          });
      } else {
        this.telephoneList = [];
      }
    },
    jiankongCameraEven() {
      this.jkCamera = !this.jkCamera;
      if (this.jkCamera) {
        let param = { data: "MonitorCamera" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
  
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.cameraList = middleList;
          });
      } else {
        this.cameraList = [];
      }
    },
    infoBoardEven() {
      this.infoBoard = !this.infoBoard;
      if (this.infoBoard) {
        let param = { data: "VMS" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
       
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.VMSList = middleList;
          });
      } else {
        this.VMSList = [];
      }
    },
    trafficLightEven() {
      this.trafficLight = !this.trafficLight;
      if (this.trafficLight) {
        let param = { data: "Signal" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
    
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.signalList = middleList;
          });
      } else {
        this.signalList = [];
      }
    },
    manaCarEven() {
      this.manaCar = !this.manaCar;
      if (this.manaCar) {
        let param = { data: "CarManage" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
     
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.carManageList = middleList;
          });
      } else {
        this.carManageList = [];
      }
    },
    resVehicleEven() {
      this.resVehicle = !this.resVehicle;
      if (this.resVehicle) {
        let param = { data: "CarEmergencyRescue" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
     
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.carERList = middleList;
          });
      } else {
        this.carERList = [];
      }
    },
    emerEventEven() {
      this.emerEvent = !this.emerEvent;
      if (this.emerEvent) {
        let param = { data: "EmergentEvent" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
       
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emerEventList = middleList;
          });
      } else {
        this.emerEventList = [];
      }
    },
    emerUnitEven() {
      this.emerUnit = !this.emerUnit;
      if (this.emerUnit) {
        let param = { data: "EmergencyUnit" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
              
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emerUnitList = middleList;
          });
      } else {
        this.emerUnitList = [];
      }
    },
    emerWareHouseEven() {
      this.emerWareHouse = !this.emerWareHouse;
      if (this.emerWareHouse) {
        let param = { data: "EmergencyWarehouse" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
          
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emerWareHouseList = middleList;
          });
      } else {
        this.emerWareHouseList = [];
      }
    },
    emerOtherUnitEven() {
      this.emerOtherUnit = !this.emerOtherUnit;
      if (this.emerOtherUnit) {
        let param = { data: "EmergencyOtherUnit" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
    
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emerOtherUnitList = middleList;
          });
      } else {
        this.emerOtherUnitList = [];
      }
    },
    constructionEven() {
      this.construction = !this.construction;
      if (this.construction) {
        let param = { data: "Construction" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
     
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.constructionList = middleList;
          });
      } else {
        this.constructionList = [];
      }
    },
    mobileDeviceEven() {
      this.mobileDevice = !this.mobileDevice;
      if (this.mobileDevice) {
        let param = { data: "MobileDevice" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
        
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.mobileDeviceList = middleList;
          });
      } else {
        this.mobileDeviceList = [];
      }
    },
    warningAlarmEven() {
      this.yujingbaojing = !this.yujingbaojing;
      if (this.yujingbaojing) {
        let param = { data: "WarningAlarm" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
      
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.warningAlarmList = middleList;
          });
      } else {
        this.warningAlarmList = [];
      }
    },
    // proneSectionEven(){
    //         this.shiguyifa = !this.shiguyifa;
    //   if (this.shiguyifa) {
    //     let param = { data: "EmergentEvent" };
    //     this.$apiWckj
    //       .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
    //         param: param,
    //       })
    //       .then((res) => {
    //      console.log(res)
    //         let middleList = res.data;
    //         middleList.forEach((val) => {
    //           val.showFlag = false;
    //           val.baiduMapIcon = this.baiduMapIcon;
    //           // val.imgsrc=this.imgsrc;
    //         });
    //         this.proneSectionList = middleList;
    //       });
    //   } else {
    //     this.proneSectionList = [];
    //   }
    // },
    sectionEventEven(){
             this.shiguluduan = !this.shiguluduan;
      if (this.shiguluduan) {
        let param = { data: "EmergentEvent" };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param,
          })
          .then((res) => {
         
            let middleList = res.data;
            middleList.forEach((val) => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.sectionEventList = middleList;
          });
      } else {
        this.sectionEventList = [];
      }
    },
    handler({ BMap, map }) {
      this.center.lng = 114.310681;
      this.center.lat = 30.601163;
      this.zoom = 10;
      this.map = map;
      //麻武高速
      var myP1 = new BMap.Point(114.554023, 31.002106); //起点
      var myP2 = new BMap.Point(115.464186, 31.287435); //终点
      var driving1 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function (routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        },
      }); //驾车实例
      driving1.search(myP1, myP2); //显示一条公交线路

      //武英高速
      var myP3 = new BMap.Point(114.598689, 30.782086); //起点
      var myP4 = new BMap.Point(115.877631, 30.812104); //终点
      var driving2 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function (routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        },
      }); //驾车实例
      driving2.search(myP3, myP4); //显示一条公交线路

      //黄小高速
      var myP5 = new BMap.Point(115.922869, 30.034519); //起点
      var myP6 = new BMap.Point(115.92056097063, 29.72907001975); //终点
      var driving3 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function (routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        },
      }); //驾车实例
      driving3.search(myP5, myP6); //显示一条公交线路

      //黄黄高速
      var myP5 = new BMap.Point(115.107015, 30.25484); //起点
      var myP6 = new BMap.Point(116.099917, 30.123045); //终点
      var driving3 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function (routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        },
      }); //驾车实例
      driving3.search(myP5, myP6); //显示一条公交线路
      driving3.setSearchCompleteCallback(function () {}),
        map.setMapStyle({
          styleJson: mapStyleJson,
        });
    },
    //改变缩放比例  拖动地图时触发的事件
    syncCenterAndZoom(e) {},
    //弹框移除时触发
    mouseout(marker) {
      marker.showFlag = false;
      marker.baiduMapIcon = require("./../../assets/img/map-point.png");
    },
    //弹框打开时触发
    mouseover(marker) {
      this.markers.forEach((val) => {
        if (
          val.LOCCUSLAT == marker.LOCCUSLAT &&
          val.LOCCUSLON == marker.LOCCUSLON
        ) {
          this.imgsrc = val.imgsrc;
        }
      });
      marker.baiduMapIcon = require("./../../assets/img/map-point2.png");
      marker.showFlag = true;
    },
    //点击标注时触发
    mapClick(item) {
      this.dialogVisible = true;
      this.dialogObj = item;
    },
    showfromChild(v) {
      this.dialogVisible = v;
    },
    infoWindowOpen(marker) {
      // console.log(marker, "1");
    },
    infoWindowClose() {
      // console.log(marker, "2");
    },
  },
};
</script>
<style lang="less" scoped>
.helpCon {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  .helpCon-r {
    height: 100%;
    width: 100%;
    position: relative;
    .ind1-com {
      height: 100%;
      width: 100%;
      /deep/.dv-flyline-chart-enhanced {
        display: none;
      }
      /deep/.list-3 {
        display: none;
      }
      /deep/.list-4 {
        display: none;
      }
    }
  }
}
.total-num4 {
  position: absolute;
  right: 10px;
  top: 10px;
  text-align: center;
  overflow: hidden;
  z-index: 3;
  .item {
    margin: 0 5px;
    float: left;
    width: 386px;
    background: url(./../../assets/img/l3-bg2.png) center center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .tit {
    margin: 0 10px;
    font-size: 13px;
    color: #d9f7ff;
    font-weight: 400;
    text-align: center;
    line-height: 32px;
    background: url(./../../assets/img/line-bg1.png) center bottom no-repeat;
    -webkit-background-size: 100% 1px;
    background-size: 100% 1px;
  }
  .list-7 {
    .num {
      font-size: 22px;
    }
    li {
      width: 25%;
    }
    h4 {
      font-size: 12px;
    }
  }
}
.list-7 {
  overflow: hidden;
  .num {
    font-size: 26px;
    color: #ffcd06;
    line-height: 1.2;
    font-family: DIGIB;
  }
  li {
    margin: 8px 0 7px;
    float: left;
    width: 33.33%;
    position: relative;
  }
  h4 {
    font-size: 14px;
    color: #00c3f3;
    font-weight: 400;
  }
}
/deep/ .ind1Com .ind-map {
  // height: 615px;
  height: 100%;
}
.helpCon-r .list-4 {
  padding: 0 60px 10px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  font-size: 0;
  text-align: center;
  white-space: nowrap;
  transform: translateX(-50%);
  background: url(./../../assets/img/l4-bg1.png) center bottom -21px no-repeat;
  background-size: 100% 112px;
  z-index: 999;
  li {
    padding: 3px 20px 0;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    .hd {
      overflow: hidden;
      .icon {
        display: block;
        margin: 0 auto 8px;
        width: 46px;
        height: 46px;
        background-repeat: no-repeat;
        background-position: center top;
        cursor: pointer;
        overflow: hidden;
      }
      h4 {
        font-size: 13px;
        color: #fff;
        font-weight: 400;
        text-align: center;
      }
    }
    .bd {
      padding: 6px 0 20px;
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      background: url(./../../assets/img/l4-bg2.png) center center no-repeat;
      background-size: 100% 100%;
      z-index: 2;
      display: none;
      .inner {
        padding: 0 10px;
        overflow-y: auto;
        .check-btn {
          overflow: hidden;
          width: 127px;
          label {
            display: block;
            cursor: pointer;
            overflow: hidden;
          }
          input:checked {
            background-image: url("./../../assets/img/icon-chk_on.png");
          }
          input {
            margin: 6px 11px 0 0;
            float: left;
            width: 14px;
            height: 14px;
            background: url(./../../assets/img/icon-chk.png) center center
              no-repeat;
            background-size: cover;
            cursor: pointer;
            -webkit-appearance: none;
          }
          h5 {
            font-size: 13px;
            color: #d9f7ff;
            line-height: 26px;
            font-weight: 400;
            text-align: left;
            overflow: hidden;
          }
        }
      }
    }
  }
}
/deep/ .fullSc {
  display: none;
}
.iconbg1 {
  background-position: center -47px !important;
}
.disB {
  display: block !important;
}

/deep/.number-grow {
  width: 80px;
  height: 26px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 26px;
}

.map {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    max-width: none;
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
  }
}

/*地图标题*/
/deep/.BMap_bubble_title {
  display: none;
}
/* 消息内容 */
/deep/.BMap_bubble_content {
  background-color: rgba(0, 125, 214, 0);
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
}
/* 内容 */
/deep/.BMap_pop div:nth-child(9) {
  top: 35px !important;
  border-radius: 7px;
}
/* 左上角删除按键 */
/deep/.BMap_pop > img {
  top: 43px !important;
  left: 115px !important;
  width: 0 !important;
}
/deep/.BMap_top {
  display: none;
}
/deep/.BMap_bottom {
  display: none;
}
/deep/.BMap_center {
  display: none;
}
/* 隐藏边角 */
/deep/.BMap_pop div:nth-child(1) div {
  display: none;
}
/deep/.BMap_pop div:nth-child(3) {
  display: none;
}
/deep/.BMap_pop div:nth-child(5) {
  display: none;
}
/deep/.BMap_pop div:nth-child(7) {
  display: none;
}
/deep/.BMap_pop div:nth-child(8) {
  display: none;
}
/deep/.anchorBL a {
  display: none;
}
/deep/.anchorBL img {
  display: none;
}
/deep/.anchorBL span {
  display: none !important;
}
</style>