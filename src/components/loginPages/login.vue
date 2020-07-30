<template>
  <div class="main">
    <div class="title">
      <div class="title1">智慧黄黄 BI 平台</div>
      <div class="title2">Enterprise visualization platform</div>
    </div>
    <div class="bg1">
      <div class="trantionbox"></div>
      <login-from class="input_container" />
    </div>
    <div class="footer-copy">
      <div>Copyright © 湖北交投黄黄高速公路运营管理有限公司</div>
      <div>
        微诚科技股份有限公司提供技术服务
        <span style="font-family:Arial;" id="lblSystemVersion">v1.03.07.30.HH.DEV</span>
      </div>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="35"
      shapeType="star"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      class="lizi"
    />
  </div>
</template>
<script>
import loginFrom from "./loginFrom";
export default {
  components: {
    loginFrom
  },
  created() {
    this.$store.state.fullScreen = false;
  }
};
</script>
<style lang="less" scoped>
.main {
  position: relative;
  margin: 0 !important;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .title {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
  }
  .bg1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;
  }
  .footer-copy {
    position: absolute;
    bottom: 0;
    z-index: 2;
    color: #ffffff;
    padding-bottom: 5px;
    width: 100%;
    text-align: center;
    font-size: 13px;
  }
  .trantionbox {
    position: absolute;
    width: 28%;
    z-index: 1;
    top: 24%;
    left: 24%;
    background: url("./../../assets/img/d.png") no-repeat 100% 100%;
    background-size: contain;
    height: 500px;
    -webkit-transform: rotate(360deg);
    animation: rotation 15s linear infinite;
    -moz-animation: rotation 15s linear infinite;
    -webkit-animation: rotation 15s linear infinite;
    -o-animation: rotation 15s linear infinite;
  }
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
}
.title1 {
  height: 60px;
  font-size: 48px;
  line-height: 60px;
  color: #f3f3f3;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 50%;
  top: 31px;
  transform: translateX(-50%);
  z-index: 1;
  text-shadow: -3px 1px rgb(254, 255, 255), -4px 5px rgb(8, 8, 8);
}
.title2 {
  height: 36px;
  font-size: 19px;
  line-height: 40px;
  color: #fff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 91px;
  z-index: 1;
  text-shadow: -3px -2px rgb(7, 161, 233), 2px 2px rgb(2, 89, 202);
}
.input_container {
  width: 315px;
  z-index: 1;
  background-color: #fff;
  position: absolute;
  right: 28%;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  padding: 28px 36px 36px 36px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  top: 36%;
  background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, #000000 100%);
  // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)', GradientType=1);
}

.lizi {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url("./../../../public/img/body-bg1.jpg") no-repeat 100% 100%;
  background-size: 100% 100%;
}
</style>