<template>
  <div id="app">
    <hhBI-header v-if="$store.state.fullScreen" />
    <router-view />
  </div>
</template>
<script>
import hhBIHeader from "./components/hhBIHeader";
export default {
  components: { hhBIHeader },
  // created() {
  //   this.$store.state.fullScreen = false;
  //   document.body.removeChild(document.getElementById("Loading"));
  // }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}

.tit-1 {
  padding: 0 40px;
  
  font-size: 0;
  text-align: center;
  overflow: hidden;
  h3 {
    display: inline-block;
    vertical-align: middle;
    background: url("./assets/img/tit-bg3.png") center center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: relative;
    span {
      display: block;
      color: #00c3f3;
      background: linear-gradient(
        0deg,
        rgba(164, 235, 255, 1) 0,
        rgba(212, 245, 255, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h3:after {
    left: 100%;
    background-image: url("./assets/img/tit-bg2.png");
  }
  h3:before {
    right: 100%;
    background-image: url("./assets/img/tit-bg1.png");
  }
  h3:after,
  h3:before {
    content: "";
    width: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
}
.ind-z1 {
  margin-bottom: 10px;
  background-image: url("./assets/img/ind-bg1.png");
  background-repeat: no-repeat;
  background-position: top center;
  -webkit-background-size: auto 4px;
  background-size: auto 4px;
}
.ind-bg1 {
  background-color: rgba(0, 125, 214, 0.2);
  border: 1px solid #083a5e;
}

</style>
