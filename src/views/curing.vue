<template>
  <div class="curing">
    <div class="cur1-com">
      <cur1Com />
    </div>
    <div class="cur2-com">
      <div class="cur2-col">
        <cur2-col />
      </div>
      <div class="cur2-cor">
        <cur2-cor />
      </div>
    </div>
  </div>
</template>
<script>
import cur1Com from "./../components/curingPages/cur1Com";
import cur2Col from "./../components/curingPages/cur2Col";
import cur2Cor from "./../components/curingPages/cur2Cor";
export default {
  components: {
    cur1Com,
    cur2Col,
    cur2Cor
  },
  created() {
    this.$store.state.fullScreen=true
  }
};
</script>
<style lang="less" scoped>
.curing {
  padding: 0 14px 4px;
  overflow: hidden;
  .cur1-com {
    width: 100%;
    // height: 160px;
    height: 14.8vh;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .cur2-com {
    width: 100%;
    // height: 815px;
    overflow: hidden;
    height: 76vh;
    margin-bottom: 10px;
    .cur2-col,
    .cur2-cor {
      padding: 0 5px;
    }
    .cur2-col {
      width: 31%;
      height: 100%;
      float: left;
    }
    .cur2-cor {
      width: 69%;
      height: 100%;
      float: left;
    }
  }
}

/deep/.list-3,
/deep/.list-4 {
  display: none;
}
</style>