<template>
  <div class="helpEmer">
    <div class="help-con">
      <div class="htlpConl">
        <help-conl />
      </div>
      <div class="htlpConr">
        <help-conr />
      </div>
    </div>
    <div class="help-cob">
      <help-cob />
    </div>
  </div>
</template>
<script>
import helpConl from "./../components/helpEmerPages/helpConl";
import helpConr from "./../components/helpEmerPages/helpConr";
import helpCob from "./../components/helpEmerPages/helpCob";
export default {
  components: {
    helpConl,
    helpConr,
    helpCob
  },
  created() {
    this.$store.state.fullScreen=true
  }
};
</script>
<style lang="less" scoped>
.helpEmer {
  padding: 0 14px 4px;
  overflow: hidden;
  .help-con {
    width: 100%;
    // height: 625px;
    height: 57.8vh;
    overflow: hidden;
 
    .htlpConl {
      width: 33.333333333%;
      height: 100%;
      float: left;
    }
    .htlpConr {
      width: 66.666666666%;
      height: 100%;
      float: left;
    }
  }
  .help-cob {
    width: 100%;
    // height: 360px;
    height: 33.5vh;
    overflow: hidden;
  }
}
</style>
