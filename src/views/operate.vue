<template>
  <div class="operate">
    <div class="ope1-con">
      <ope1-con />
    </div>
    <div class="ope2-con">
      <ope2-con />
    </div>
    <div class="ope3-con">
      <ope3-con />
    </div>
    <div class="ope4-con">
      <ope4-con />
    </div>
  </div>
</template>
<script>
import ope1Con from "./../components/operatePages/ope1Con";
import ope2Con from "./../components/operatePages/ope2Con";
import ope3Con from "./../components/operatePages/ope3Con";
import ope4Con from "./../components/operatePages/ope4Con";
export default {
  components: {
    ope1Con,
    ope2Con,
    ope3Con,
    ope4Con
  },
  created() {
    this.$store.state.fullScreen=true
  }
};
</script>
<style lang="less" scoped>
.operate {
  padding: 0 14px 4px;
  overflow: hidden;
  height: 92.6vh;
  .ope1-con {
    width: 100%;
    // height: 160px;
    height: 15.8vh;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .ope2-con {
    width: 100%;
    // height: 200px;
    height: 18.5vh;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .ope3-con {
    width: 100%;
    // height: 275px;
    height: 25.4vh;
    float: left;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .ope4-con {
    width: 100%;
    // height: 320px;
    height: 29.6vh;
    overflow: hidden;
    margin-bottom: 10px;
  }
}
</style>