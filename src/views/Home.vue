<template>
  <div>
    <div class="main">
      <div class="box-ind1">
        <div class="" :class="fullShow?'ind1-items':'ind1-itemsShow'">
          <div class="ind1-col" v-if="fullShow">
            <ind1-col />
          </div>
          <div :class="fullShow?'ind1-com':'ind1-comShow'">
            <ind1-com />
          </div>
          <div class="ind1-cor" v-if="fullShow">
            <ind1-cor />
          </div>
        </div>
        <div class="ind2-items" v-if="fullShow">
          <div class="ind2-col">
            <ind2-col />
          </div>
          <div class="ind2-com">
            <ind2-com />
          </div>
          <div class="ind2-cor">
            <ind2-cor />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ind1Col from "./../components/homePages/ind1Col.vue";
import ind1Com from "./../components/homePages/ind1Com.vue";
import ind1Cor from "./../components/homePages/ind1Cor.vue";
import ind2Col from "./../components/homePages/ind2Col.vue";
import ind2Com from "./../components/homePages/ind2Com.vue";
import ind2Cor from "./../components/homePages/ind2Cor.vue";
export default {
  components: {
    ind1Col,
    ind1Com,
    ind1Cor,
    ind2Col,
    ind2Com,
    ind2Cor
  },
  watch: {
    "$store.state.fullScreen": function(newVal, oldVal) {
      console.log(newVal, "newVal");
      this.fullShow = newVal;
    }
  },
  data() {
    return {
      fullShow: true
    };
  },
  created(){
    this.$store.state.fullScreen=true
  }
};
</script>
<style lang="less" scoped>
.box-ind1 {
  padding: 0 14px 4px;
  overflow: hidden;
  .ind1-items {
    margin: 0 -5px;
    overflow: hidden;
    // height: 631px;
    height: 58.4vh;
  }
  .ind1-itemsShow {
    overflow: hidden;
    height: 99.5vh;
  }
  .ind1-col,
  .ind1-com,
  .ind1-cor {
    padding: 0 5px;
  }
  .ind1-col {
    float: left;
    width: 24.9%;
    color: #fff;
    height: 99%;
  }
  .ind1-com {
    float: left;
    width: 50.2%;
    height: 99%;
  }
  .ind1-comShow {
    float: left;
    width: 100%;
    height: 100vh;
  }
  .ind1-cor {
    float: left;
    width: 24.9%;
    height: 99%;
  }

  .ind2-items {
    margin: 0 -5px;
    overflow: hidden;
    // height: 365px;
    height: 33.8vh;
    .ind2-col,
    .ind2-com,
    .ind2-cor {
      padding: 0 5px;
    }
    .ind2-col {
      float: left;
      width: 24.9%;
      height: 99%;
    }
    .ind2-com {
      float: left;
      width: 37.6%;
      height: 99%;
    }
    .ind2-cor {
      float: left;
      width: 37.5%;
      height: 99%;
    }
  }
}
</style>
