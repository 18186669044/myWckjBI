<template>
  <div class="cur2cor">
    <div class="cur2Body">
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
      ></baidu-map>
    </div>
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import mapStyleJson from "./../tools/custom_map_config.json";
export default {
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 114.310681;
      this.center.lat = 30.601163;
      this.zoom = 10;
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
    //改变缩放比例  拖动地图时触发的事件
    syncCenterAndZoom(e) {
      // console.log(e.target.getCenter());
      // const {lng, lat} = e.target.getCenter()
      // this.center.lng = lng
      // this.center.lat = lat
      // this.zoom = e.target.getZoom()
    }
  }
};
</script>
<style lang="less" scoped>
.cur2cor {
  height: 100%;
  width: 100%;
  .cur2Body {
    height: 100%;
    width: 100%;
    .map{
        width: 100%;
        height: 100%;
    }
  }
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