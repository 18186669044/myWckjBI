<template>
  <div class="ind1Com">
    <div class="ind-bg1 ind-z1 ind-map" :class="$store.state.fullScreen?'ind-map':'ind-mapShow'">
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
            v-for="(marker,index) of markers"
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
            v-for="(marker,index) of fuwuquList"
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
            v-for="(marker,index) of bridgeList"
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
            v-for="(marker,index) of tunnelList"
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
            v-for="(marker,index) of interflowList"
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
            v-for="(marker,index) of monitorCameraList"
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
            v-for="(marker,index) of vmsList"
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
            v-for="(marker,index) of carEmergencyRescueList"
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
            v-for="(marker,index) of emergentEventList"
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
            v-for="(marker,index) of emergencyUnitList"
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
            v-for="(marker,index) of emergencyWarehouseList"
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
            v-for="(marker,index) of emergencyOtherUnitList"
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
        <!-- <new-polyline
          v-if="pointsMW && pointsMW.length >= 2 && checkPoints({ pointsMW })"
          :path="pointsMW"
          :icons="icons"
          stroke-color="#0091ea"
          :stroke-opacity="0.8"
          :stroke-weight="10"
        ></new-polyline>-->
      </baidu-map>
      <ul class="list-3">
        <li>
          <h4>
            总里程
            <span>（公里）</span>
          </h4>
          <div class="num">
            {{list3Obj.ZLC}}
            <!-- <number-grow :time="4" :value=list3Obj.ZLC></number-grow> -->
          </div>
        </li>
        <li>
          <h4>
            收费站总数
            <span>（座）</span>
          </h4>
          <div class="num">
            {{list3Obj.SFZZS}}
            <!-- <number-grow :time="2" :value=list3Obj.SFZZS></number-grow> -->
          </div>
        </li>
        <li>
          <h4>
            服务区总数
            <span>（个）</span>
          </h4>
          <div class="num">
            {{list3Obj.FWQZS}}
            <!-- <number-grow :time="3" :value=list3Obj.FWQZS></number-grow> -->
          </div>
        </li>
        <li>
          <h4>
            养护站总数
            <span>（座）</span>
          </h4>
          <div class="num">
            {{list3Obj.YHZZS}}
            <!-- <number-grow :time="3" :value=list3Obj.YHZZS></number-grow> -->
          </div>
        </li>
      </ul>
      <div class="list-4">
        <li @mousemove="lienter(1)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==1?'iconbg1':''" :style="note"></i>
            <h4>房屋</h4>
          </div>
          <div class="bd" :class="liHover==1?'disB':''">
            <div class="inner">
              <div class="check-btn maxwidth-btn">
                <label>
                  <input
                    type="checkbox"
                    @change="shoufeizhanEvent(Station)"
                    name="1"
                    :checked="shoufeizhan"
                  />
                  <h5>收费站/管理所{{Station.COUNT}}个</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input type="checkbox" @change="fuwuquEvent(Service)" :checked="fuwuqu" name="1" />
                  <h5>服务区{{Service.COUNT}}个</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(2)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==2?'iconbg1':''" :style="note2"></i>
            <h4>路产</h4>
          </div>
          <div class="bd" :class="liHover==2?'disB':''">
            <div class="inner">
              <div class="check-btn">
                <label>
                  <input type="checkbox" name="1" :checked="bridge" @change="bridgeEvent(Bridge)" />
                  <h5>桥梁{{Bridge.COUNT}}座</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input type="checkbox" name="1" :checked="tunnel" @change="tunnelEvent(Tunnel)" />
                  <h5>隧道{{Tunnel.COUNT}}条</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="interflow"
                    @change="interFlowEvent(Interflow)"
                  />
                  <h5>互通{{Interflow.COUNT}}条</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(3)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==3?'iconbg1':''" :style="note3"></i>
            <h4>机电</h4>
          </div>
          <div class="bd" :class="liHover==3?'disB':''">
            <div class="inner">
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="telephone"
                    @change="telephoneEvent(Telphone)"
                  />
                  <h5>客服电话{{Telphone.COUNT?Telphone.COUNT:0}}座</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="monitorCamera"
                    @change="monitorCameraEvent(MonitorCameras)"
                  />
                  <h5>监控摄像头{{MonitorCameras.COUNT}}个</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input type="checkbox" name="1" :checked="vms" @change="vmsEvent(VMS)" />
                  <h5>情报板{{VMS.COUNT}}条</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input type="checkbox" name="1" :checked="signal" @change="signalEvent(Signal)" />
                  <h5>交通信号灯{{Signal.COUNT}}处</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(4)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==4?'iconbg1':''" :style="note4"></i>
            <h4>车辆</h4>
          </div>
          <div class="bd" :class="liHover==4?'disB':''">
            <div class="inner">
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="carManage"
                    @change="carManageEvent(CarManage)"
                  />
                  <h5>管理车辆{{CarManage.COUNT?CarManage.COUNT:0}}辆</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="carEmergencyRescue"
                    @change="carEmergencyRescueEvent(CarEmergencyRescue)"
                  />
                  <h5>救援车辆{{CarEmergencyRescue.COUNT}}辆</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(5)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==5?'iconbg1':''" :style="note5"></i>
            <h4>应急</h4>
          </div>
          <div class="bd" :class="liHover==5?'disB':''">
            <div class="inner">
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emergentEvent"
                    @change="emergentEventEvent(EmergentEvent)"
                  />
                  <h5>突发事件{{EmergentEvent.COUNT}}起</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emergencyUnit"
                    @change="emergencyUnitEvent(EmergencyUnit)"
                  />
                  <h5>救援单位{{EmergencyUnit.COUNT}}个</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emergencyWarehouse"
                    @change="emergencyWarehouseEvent(EmergencyWarehouse)"
                  />
                  <h5>物资仓库{{EmergencyWarehouse.COUNT}}个</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="emergencyOtherUnit"
                    @change="emergencyOtherUnitEvent(EmergencyOtherUnit)"
                  />
                  <h5>应急力量{{EmergencyOtherUnit.COUNT}}支</h5>
                </label>
              </div>
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="construction"
                    @change="constructionEvent(Construction)"
                  />
                  <h5>施工路段{{Construction.COUNT}}处</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li @mousemove="lienter(6)" @mouseleave="lileave()">
          <div class="hd">
            <i class="icon" :class="liHover==6?'iconbg1':''" :style="note6"></i>
            <h4>单兵</h4>
          </div>
          <div class="bd" :class="liHover==6?'disB':''">
            <div class="inner">
              <div class="check-btn">
                <label>
                  <input
                    type="checkbox"
                    name="1"
                    :checked="mobileDevice"
                    @change="mobileDeviceEvent(MobileDevice)"
                  />
                  <h5>移动单兵{{MobileDevice.COUNT}}座</h5>
                </label>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <dv-flyline-chart-enhanced
      v-if="$store.state.fullScreen"
      :config="configMap"
      :dev="true"
      style="width:100%;height: 100%;"
    />
    <div :class="$store.state.fullScreen?'fullSc':'outFullSc'" @click="fullSc"></div>
    <div class="mapDialog">
      <dialog-shoufeizhan
        v-if="dialogVisible"
        @showfromChild="showfromChild"
        :dialogVisible="dialogVisible"
        :dialogObj="dialogObj"
      />
    </div>
  </div>
</template>
<script>
import numberGrow from "./../tools/numberGrow";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import newPolyline from "./../tools/new_polyline";
import BmView from "vue-baidu-map/components/map/MapView"; //地图视图
import bmOverlay from "vue-baidu-map/components/overlays/Overlay.vue";
import bmMarker from "vue-baidu-map/components/overlays/Marker.vue";
import bmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow.vue";
import mapStyleJson from "./../tools/custom_map_config.json";

import dialogShoufeizhan from "./../mapdis/dialogShoufeizhan";
import { BmlMarkerClusterer } from "vue-baidu-map";
export default {
  components: {
    numberGrow,
    BaiduMap,
    BmView,
    bmOverlay,
    bmMarker,
    bmInfoWindow,
    BmlMarkerClusterer,
    dialogShoufeizhan,
    newPolyline
  },
  watch: {
    liHover: function(newVal) {
      if (newVal == 4) {
        this.groupingSta();
      }
    }
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      active: false,
      actionHover2: null,
      liHover: null,
      markShow: false,
      imgsrc: "",
      markerPoint: {
        lng: 114.376551,
        lat: 30.693664
      },
      markers: [],
      // shoufeizhan:[],
      // pointsMW: [],
      // icons: [],
      fuwuquList: [],
      bridgeList: [],
      tunnelList: [],
      interflowList: [],
      telephoneList: [],
      monitorCameraList: [],
      vmsList: [],
      signalList: [],
      carManageList: [],
      carEmergencyRescueList: [],
      emergentEventList: [],
      emergencyUnitList: [],
      emergencyWarehouseList: [],
      emergencyOtherUnitList: [],
      constructionList: [],
      mobileDeviceList:[],
      baiduMapIcon: require("./../../assets/img/map-point.png"),
      // imgsrc:
      //   "https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=4011839967,1215821394&fm=85&app=92&f=JPEG?w=121&h=75&s=2D62D71556BA6F8802A8F946030070B3",
      note: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i1.png") + ")"
      },
      note2: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i2.png") + ")"
      },
      note3: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i3.png") + ")"
      },
      note4: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i4.png") + ")"
      },
      note5: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i5.png") + ")"
      },
      note6: {
        backgroundImage: "url(" + require("./../../assets/img/l4-i6.png") + ")"
      },

      configMap: {
        points: [
          {
            name: "武汉",
            coordinate: [0.48, 0.47],
            halo: {
              show: true
            },
            icon: {
              src: "/img/flylineChart/mapCenterPoint.png",
              width: 30,
              height: 30
            },
            text: {
              color: "#fb7293"
            }
          },
          {
            name: "汉口站",
            coordinate: [0.37, 0.46]
          },

          {
            name: "四环线",
            coordinate: [0.11, 0.32]
          },
          {
            name: "京深线",
            coordinate: [0.04, 0.52]
          },
          {
            name: "武汉绕城高速",
            coordinate: [0.8, 0.05]
          },
          {
            name: "新施公路",
            coordinate: [0.86, 0.19]
          },
          {
            name: "关豹高速",
            coordinate: [0.75, 0.72]
          },
          {
            name: "沪渝高速",
            coordinate: [0.89, 0.95]
          },
          {
            name: "武深高速",
            coordinate: [0.35, 0.74]
          },
          {
            name: "三环线",
            coordinate: [0.46, 0.73]
          },
          {
            name: "孝武大道",
            coordinate: [0.18, 0.15]
          }
        ],
        lines: [
          {
            source: "汉口站",
            target: "武汉"
          },
          {
            source: "四环线",
            target: "武汉"
          },
          {
            source: "京深线",
            target: "武汉"
          },
          {
            source: "武汉绕城高速",
            target: "武汉"
          },
          {
            source: "新施公路",
            target: "武汉"
          },
          {
            source: "关豹高速",
            target: "武汉"
          },
          {
            source: "沪渝高速",
            target: "武汉"
          },
          {
            source: "武深高速",
            target: "武汉"
          },
          {
            source: "三环线",
            target: "武汉"
          },
          {
            source: "孝武大道",
            target: "武汉"
          }
        ],
        text: {
          show: true
        }
      },
      shoufeizhan: false,
      fuwuqu: false,
      bridge: false,
      tunnel: false,
      interflow: false,
      telephone: false,
      monitorCamera: false,
      vms: false,
      signal: false,
      carManage: false,
      carEmergencyRescue: false,
      emergentEvent: false,
      emergencyUnit: false,
      emergencyWarehouse: false,
      emergencyOtherUnit: false,
      construction: false,
      mobileDevice:false,

      list3Obj: {
        FWQZS: "",
        SFZZS: "",
        YHZZS: "",
        ZLC: ""
      },
      groupingList: [],
      Station: {},
      Service: {},
      Bridge: {},
      Interflow: {},
      Tunnel: {},
      Telphone: {},
      MonitorCameras: {},
      VMS: {},
      Signal: {},
      CarManage: {},
      CarEmergencyRescue: {},
      EmergentEvent: {},
      EmergencyUnit: {},
      EmergencyWarehouse: {},
      EmergencyOtherUnit: {},
      Construction: {},
      MobileDevice: {},
      //弹框
      dialogVisible: false,
      dialogObj: {},
      map: null
    };
  },
  created() {
    // this.markers = [
    //   {
    //     lng: 114.305181,
    //     lat: 30.625221,
    //     showFlag: false,
    //     baiduMapIcon: this.baiduMapIcon,
    //     imgsrc:
    //       "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2595557455,2016518835&fm=111&gp=0.jpg"
    //   },
    //   {
    //     lng: 114.605159,
    //     lat: 30.605245,
    //     showFlag: false,
    //     baiduMapIcon: this.baiduMapIcon,
    //     imgsrc:
    //       "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3688905635,1280114479&fm=111&gp=0.jpg"
    //   },
    //   {
    //     lng: 114.905109,
    //     lat: 30.115289,
    //     showFlag: false,
    //     baiduMapIcon: this.baiduMapIcon,
    //     imgsrc:
    //       "https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=4011839967,1215821394&fm=85&app=92&f=JPEG?w=121&h=75&s=2D62D71556BA6F8802A8F946030070B3"
    //   },
    //   {
    //     lng: 114.705181,
    //     lat: 30.325221,
    //     showFlag: false,
    //     baiduMapIcon: this.baiduMapIcon,
    //     imgsrc:
    //       "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2595557455,2016518835&fm=111&gp=0.jpg"
    //   },
    //   {
    //     lng: 114.105109,
    //     lat: 30.415289,
    //     showFlag: false,
    //     baiduMapIcon: this.baiduMapIcon,
    //     imgsrc:
    //       "https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=4011839967,1215821394&fm=85&app=92&f=JPEG?w=121&h=75&s=2D62D71556BA6F8802A8F946030070B3"
    //   }
    // ];
  },
  mounted() {
    this.list3Data();
    this.groupingSta();
  },
  methods: {
    groupingSta() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Emergency", "/GetCountListByMPTypeForBI", {
          param: param
        })
        .then(res => {
          this.groupingList = res.data;
          this.groupingList.forEach(val => {
            if (val.MPTYPE == "Station") {
              this.Station = val;
            }
            if (val.MPTYPE == "Service") {
              this.Service = val;
            }
            if (val.MPTYPE == "Bridge") {
              this.Bridge = val;
            }
            if (val.MPTYPE == "Interflow") {
              this.Interflow = val;
            }
            if (val.MPTYPE == "Tunnel") {
              this.Tunnel = val;
            }
            if (val.MPTYPE == "Telphone") {
              this.Telphone = val;
            }
            if (val.MPTYPE == "MonitorCamera") {
              this.MonitorCameras = val;
            }
            if (val.MPTYPE == "VMS") {
              this.VMS = val;
            }
            if (val.MPTYPE == "Signal") {
              this.Signal = val;
            }
            if (val.MPTYPE == "CarManage") {
              this.CarManage = val;
            }
            if (val.MPTYPE == "CarEmergencyRescue") {
              this.CarEmergencyRescue = val;
            }
            if (val.MPTYPE == "EmergentEvent") {
              this.EmergentEvent = val;
            }
            if (val.MPTYPE == "EmergencyUnit") {
              this.EmergencyUnit = val;
            }
            if (val.MPTYPE == "EmergencyWarehouse") {
              this.EmergencyWarehouse = val;
            }
            if (val.MPTYPE == "EmergencyOtherUnit") {
              this.EmergencyOtherUnit = val;
            }
            if (val.MPTYPE == "Construction") {
              this.Construction = val;
            }
            if (val.MPTYPE == "MobileDevice") {
              this.MobileDevice = val;
            }
          });
        });
    },
    list3Data() {
      let param = { data: "" };
      this.$apiWckj
        .post("WCKJAPI_Operation", "/GetHomePage_GISTopTotal", {
          param: param
        })
        .then(res => {
          this.list3Obj = {
            ZLC: Number(res.data[0].ZLC),
            SFZZS: Number(res.data[0].SFZZS),
            FWQZS: Number(res.data[0].FWQZS),
            YHZZS: Number(res.data[0].YHZZS)
          };
        });
    },
    // 收费站获取经纬度数组并赋图片
    shoufeizhanEvent(mptype) {
      this.shoufeizhan = !this.shoufeizhan;

      if (this.shoufeizhan) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              val.imgsrc = this.imgsrc;
            });
            middleList[0].imgsrc = require("./../../assets/mapimg/edongsfz.jpg");
            middleList[1].imgsrc = require("./../../assets/mapimg/muzidiangls.jpg");
            middleList[2].imgsrc = require("./../../assets/mapimg/machengdonggls.jpg");
            middleList[3].imgsrc = require("./../../assets/mapimg/yongjiahegls.jpg");
            middleList[4].imgsrc = require("./../../assets/mapimg/hongangls.jpg");
            middleList[5].imgsrc = require("./../../assets/mapimg/luotiangls.jpg");
            middleList[6].imgsrc = require("./../../assets/mapimg/dabieshangls.jpg");
            middleList[7].imgsrc = require("./../../assets/mapimg/yingshangls.jpg");
            middleList[8].imgsrc = require("./../../assets/mapimg/hhyhz.jpg");
            middleList[9].imgsrc = require("./../../assets/mapimg/yangliugls.jpg");
            middleList[10].imgsrc = require("./../../assets/mapimg/wangjigls.jpg");
            middleList[11].imgsrc = require("./../../assets/mapimg/zongluzugls.jpg");
            middleList[12].imgsrc = require("./../../assets/mapimg/huangpigls.jpg");
            middleList[13].imgsrc = require("./../../assets/mapimg/jiezidungls.jpg");
            middleList[14].imgsrc = require("./../../assets/mapimg/huangmeigls.jpg");
            middleList[15].imgsrc = require("./../../assets/mapimg/huaqiaogls.jpg");
            middleList[16].imgsrc = require("./../../assets/mapimg/wuxuegls.jpg");
            middleList[17].imgsrc = require("./../../assets/mapimg/shanchungls.jpg");
            middleList[18].imgsrc = require("./../../assets/mapimg/sanhuagls.jpg");
            middleList[19].imgsrc = require("./../../assets/mapimg/longganhugls.jpg");
            middleList[20].imgsrc = require("./../../assets/mapimg/xiaochigls.jpg");
      
            this.markers = middleList;
          });
      } else {
        // this.getCurlocation();
        this.markers = "";
      }
    },
    // 服务区获取经纬度数组并赋图片
    fuwuquEvent(mptype) {
      this.fuwuqu = !this.fuwuqu;
      if (this.fuwuqu) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc = this.imgsrc;
            });
            this.fuwuquList = middleList;
          });
      } else {
        this.fuwuquList = "";
      }
    },
    // 桥梁获取经纬度数组并赋图片
    bridgeEvent(mptype) {
      this.bridge = !this.bridge;
      if (this.bridge) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.bridgeList = middleList;
          });
      } else {
        this.bridgeList = "";
      }
    },
    // 隧道获取经纬度数组并赋图片
    tunnelEvent(mptype) {
      this.tunnel = !this.tunnel;
      if (this.tunnel) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.tunnelList = middleList;
          });
      } else {
        this.tunnelList = "";
      }
    },
    // 互通获取经纬度数组并赋图片
    interFlowEvent(mptype) {
      this.interflow = !this.interflow;
      if (this.interflow) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.interflowList = middleList;
          });
      } else {
        this.interflowList = "";
      }
    },
     // 客服电话获取经纬度数组并赋图片
    telephoneEvent(mptype) {

      
      this.telephone = !this.telephone;
      if (this.telephone) {
        let param = { data: 'Telphone' };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.telephoneList = middleList;
          });
      } else {
        this.telephoneList = "";
      }
    },
    //监控摄像头获取经纬度数组并赋图片
    monitorCameraEvent(mptype) {
      
      this.monitorCamera = !this.monitorCamera;
      if (this.monitorCamera) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;       
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            
            this.monitorCameraList = middleList;
          });
      } else {
        this.monitorCameraList = "";
      }
    },
    //情报板获取经纬度数组并赋图片
    vmsEvent(mptype) {
      this.vms = !this.vms;
      if (this.vms) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.vmsList = middleList;
          });
      } else {
        this.vmsList = "";
      }
    },
    //交通信号灯获取经纬度数组并赋图片
    signalEvent(mptype) {
      this.signal = !this.signal;
      if (this.signal) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.signalList = middleList;
          });
      } else {
        this.signalList = "";
      }
    },
    //管理车辆获取经纬度数组并赋图片
    carManageEvent(mptype) {
      this.carManage = !this.carManage;
      if (this.carManage) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.carManageList = middleList;
          });
      } else {
        this.carManageList = "";
      }
    },
    //救援车辆获取经纬度数组并赋图片
    carEmergencyRescueEvent(mptype) {
      this.carEmergencyRescue = !this.carEmergencyRescue;
      if (this.carEmergencyRescue) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.carEmergencyRescueList = middleList;
          });
      } else {
        this.carEmergencyRescueList = "";
      }
    },
    //突发事件获取经纬度数组并赋图片
    emergentEventEvent(mptype) {
      this.emergentEvent = !this.emergentEvent;
      if (this.emergentEvent) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emergentEventList = middleList;
          });
      } else {
        this.emergentEventList = "";
      }
    }, 
      //救援单位获取经纬度数组并赋图片
        emergencyUnitEvent(mptype) {
      this.emergencyUnit = !this.emergencyUnit;
      if (this.emergencyUnit) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emergencyUnitList = middleList;
          });
      } else {
        this.emergencyUnitList = "";
      }
    },
    //物资仓库获取经纬度数组并赋图片
    emergencyWarehouseEvent(mptype) {
      this.emergencyWarehouse = !this.emergencyWarehouse;
      if (this.emergencyWarehouse) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emergencyWarehouseList = middleList;
          });
      } else {
        this.emergencyWarehouseList = "";
      }
    },
    //应急力量获取经纬度数组并赋图片
    emergencyOtherUnitEvent(mptype) {
      this.emergencyOtherUnit = !this.emergencyOtherUnit;
      if (this.emergencyOtherUnit) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.emergencyOtherUnitList = middleList;
          });
      } else {
        this.emergencyOtherUnitList = "";
      }
    },
    //施工路段获取经纬度数组并赋图片
    constructionEvent(mptype) {
      this.construction = !this.construction;
      if (this.construction) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.constructionList = middleList;
          });
      } else {
        this.econstructionList = "";
      }
    },
    //单兵获取经纬度数组并赋图片
    mobileDeviceEvent(mptype) {
      this.mobileDevice = !this.mobileDevice;
      if (this.mobileDevice) {
        let param = { data: mptype.MPTYPE };
        this.$apiWckj
          .post("WCKJAPI_Emergency", "/GIS_GetMarkerPointForBI", {
            param: param
          })
          .then(res => {
            let middleList = res.data;
            middleList.forEach(val => {
              val.showFlag = false;
              val.baiduMapIcon = this.baiduMapIcon;
              // val.imgsrc=this.imgsrc;
            });
            this.mobileDeviceList = middleList;
          });
      } else {
        this.mobileDeviceList = "";
      }
    },
    enter(index) {
      this.actionHover2 = index;
      // console.log(123);
    },
    leave() {
      this.actionHover2 = null;
    },
    lienter(i) {
      this.liHover = i;
    },
    lileave() {
      this.liHover = null;
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
        onMarkersSet: function(routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        }
      }); //驾车实例
      driving1.search(myP1, myP2); //显示一条公交线路

      //武英高速
      var myP3 = new BMap.Point(114.598689, 30.782086); //起点
      var myP4 = new BMap.Point(115.877631, 30.812104); //终点
      var driving2 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function(routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        }
      }); //驾车实例
      driving2.search(myP3, myP4); //显示一条公交线路

      //黄小高速
      var myP5 = new BMap.Point(115.922869, 30.034519); //起点
      var myP6 = new BMap.Point(115.92056097063, 29.72907001975); //终点
      var driving3 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function(routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        }
      }); //驾车实例
      driving3.search(myP5, myP6); //显示一条公交线路

      //黄黄高速
      var myP5 = new BMap.Point(115.107015, 30.25484); //起点
      var myP6 = new BMap.Point(116.099917, 30.123045); //终点
      var driving3 = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: false },
        onMarkersSet: function(routes) {
          map.removeOverlay(routes[0].marker); //删除起du点
          map.removeOverlay(routes[1].marker); //删除终zhi点
        }
      }); //驾车实例
      driving3.search(myP5, myP6); //显示一条公交线路
      driving3.setSearchCompleteCallback(function() {
        // var pts = driving3
        //   .getResults()
        //   .getPlan(0)
        //   .getRoute(0)
        //   .getPath(); //通过驾车实例，获得一系列点的数组
        // var polyline = new BMap.Polyline(pts);
        // map.addOverlay(polyline);
        // var lab1 = new BMap.Label("", { position: myP1 }); //创建2个label
        // var lab2 = new BMap.Label("", { position: myP2 });
        // map.addOverlay(lab1);
        // map.addOverlay(lab2);
        // setTimeout(function() {
        //   map.setViewport([myP1, myP2]); //调整到最佳视野
        // }, 1000);
      }),
        map.setMapStyle({
          styleJson: mapStyleJson
        });
    },

    getCurlocation() {
      // 获取浏览器当前定位
      if (!this.map) return false;
      let map = this.map;
      // this.map.addOverlay(this.markers);
      this.markers.map(item => {
        if (item.MPTYPE == "Station") {
          map.clearOverlays();
        }
      });
      // let geolocation = new BMap.Geolocation();
      // let _this = this;
    },
    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(
        new BMap.Point(114.305152, 30.615229)
      );
      el.style.left = pixel.x - 60 + "px";
      el.style.top = pixel.y - 20 + "px";
    },
    //弹框移除时触发
    mouseout(marker) {
      marker.showFlag = false;
      marker.baiduMapIcon = require("./../../assets/img/map-point.png");
    },
    //弹框打开时触发
    mouseover(marker) {
      this.markers.forEach(val => {
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
    //改变缩放比例  拖动地图时触发的事件
    syncCenterAndZoom(e) {
      // console.log(e.target.getCenter());
      // const {lng, lat} = e.target.getCenter()
      // this.center.lng = lng
      // this.center.lat = lat
      // this.zoom = e.target.getZoom()
    },
    fullSc() {
      this.$store.state.fullScreen = !this.$store.state.fullScreen;
    },
    getPointsSomehow() {
      var arr = [
        // { lng: 114.554023, lat: 31.002106 },
        // { lng: 114.473706, lat: 30.861454 },
        // { lng: 114.468932, lat: 30.862454 },
        // { lng: 114.548764, lat: 30.996478 },
        // { lng: 114.53254, lat: 30.983151 },
        // { lng: 114.479488, lat: 30.893654 },
        // { lng: 114.479273, lat: 30.8916 },
        // { lng: 114.473074, lat: 30.861602 },
        // { lng: 114.473691, lat: 30.861424 },
        // { lng: 114.448182, lat: 30.793439 },
        // { lng: 114.406983, lat: 30.728925 }
        // { lng: 115.464186, lat: 31.287435 },
      ];
      return arr;
    }
    // 查重 如果数组中只有一组有意义的坐标,绘制折线时可能会报错,因为绘制一条折线需要两组不同的坐标点
    // checkPoints({ pointsMW }) {
    //   // 拿到第一组点
    //   var originPoint = pointsMW[0];
    //   // 将第一组点与后续点进行对比 如果坐标集合中只有一组实际坐标点则return false
    //   // 只要坐标集合中有两组不同的实际坐标点,则return true
    //   for (var i = 1; i < pointsMW.length; i++) {
    //     if (
    //       pointsMW[i].lat !== originPoint.lat ||
    //       pointsMW[i].lng !== originPoint.lng
    //     ) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }
  }
};
</script>
<style lang="less" scoped>
.ind1Com {
  position: relative;
  height: 100%;
  .ind-map {
    // height: 621px;
    height: 100%;
    position: relative;
  }
  .ind-mapShow {
    height: 100vh;
    position: relative;
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
  .list-3 {
    position: absolute;
    left: 12px;
    top: 11px;
    z-index: 3;
    li {
      padding: 8px 2px 6px 8px;
      margin-right: 9px;
      float: left;
      background: url("./../../assets/img/l3-bg1.png") center center no-repeat;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
      position: relative;
      overflow: hidden;
      h4 {
        font-size: 12px;
        color: #00e4ff;
        font-weight: 400;
        span {
          float: right;
        }
      }
      .num {
        font-size: 22px;
        color: #ffcd06;
        line-height: 1.2;
        font-family: DIGIB;
        position: absolute;
        bottom: 3px;
        left: 13px;
        width: 100px;
        overflow: hidden;
      }
    }
  }
  .list-4 {
    padding: 0 60px 10px;
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 0;
    text-align: center;
    white-space: nowrap;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    background: url("./../../assets/img/l4-bg1.png") center bottom -21px no-repeat;
    -webkit-background-size: 100% 112px;
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
        // width: 126px;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        background: url("./../../assets/img/l4-bg2.png") center center no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        z-index: 2;
        display: none;
        .inner {
          padding: 0 10px;
          // height: 182px;
          overflow-y: auto;
          .maxwidth-btn {
            width: 150px !important;
          }
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
              background: url("./../../assets/img/icon-chk.png") center center
                no-repeat;
              -webkit-background-size: cover;
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
}

.box-map {
  position: relative;
  z-index: 9;
}
.map-pic {
  margin-left: -79px;
  position: absolute;
  left: 50%;
  bottom: 70px;
  margin-bottom: 6px;
  width: 158px;
  height: 106px;
  border: 1px solid #00c1f3;
  overflow: hidden;
  display: none;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.map-title {
  position: absolute;
  left: 50%;
  bottom: 100%;
  width: 79px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #00e4ff;
  text-align: center;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}
.map-point {
  margin: 0 auto;
  width: 22px;
  height: 40px;
  background: url("./../../assets/img/map-point.png") center center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

.box-map.on {
  .map-title {
    color: #ffcd06;
  }
  .map-pic {
    display: block;
  }
  .map-point {
    background-image: url("./../../assets/img/map-point2.png");
  }
}
/deep/.dv-flyline-chart-enhanced {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
}
.fullSc {
  width: 25px;
  height: 25px;
  background: url("./../../assets/img/fullscreen.png") no-repeat 100% 100%;
  background-size: 100% 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 8;
  cursor: pointer;
}
.outFullSc {
  width: 25px;
  height: 25px;
  background: url("./../../assets/img/outFullScreen.png") no-repeat 100% 100%;
  background-size: 100% 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 8;
  cursor: pointer;
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
.sample {
  width: 22px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  z-index: 9;
}
.sample.active {
}
.iconbg1 {
  background-position: center -47px !important;
}
.disB {
  display: block !important;
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
</style>
