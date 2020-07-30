<template>
  <el-dialog
    title="收费站/管理所详细信息"
    :visible.sync="dialogVisibles"
    :modal="false"
    style="margin-top:6vh;"
    width="45%"
    :destroy-on-close="true"
    :before-close="handleClose"
  >
    <el-row>
      <el-col :span="12">
        <div class="fl">收费站名称</div>
        <div class="fr">{{detailsObj.sfzmc?detailsObj.sfzmc:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">占地总面积</div>
        <div class="fr">{{detailsObj.zdmj?detailsObj.zdmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">建筑占地面积</div>
        <div class="fr">{{detailsObj.jzmj?detailsObj.jzmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">石铺路面积</div>
        <div class="fr">{{detailsObj.splmj?detailsObj.splmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">地砖铺路面积</div>
        <div class="fr">{{detailsObj.dplmj?detailsObj.dplmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">沥青路面积</div>
        <div class="fr">{{detailsObj.lqlmj?detailsObj.lqlmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">水泥路面积</div>
        <div class="fr">{{detailsObj.sllmj?detailsObj.sllmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">绿化面积</div>
        <div class="fr">{{detailsObj.lhmj?detailsObj.lhmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">停车区面积</div>
        <div class="fr">{{detailsObj.tcqmj?detailsObj.tcqmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">游泳池面积</div>
        <div class="fr">{{detailsObj.yycmj?detailsObj.yycmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">游泳池长度</div>
        <div class="fr">{{detailsObj.yyccd?detailsObj.yyccd:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">游泳池宽度</div>
        <div class="fr">{{detailsObj.yyckd?detailsObj.yyckd:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">篮球场面积</div>
        <div class="fr">{{detailsObj.lmqcmj?detailsObj.lmqcmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">篮球场长度</div>
        <div class="fr">{{detailsObj.lmqccd?detailsObj.lmqccd:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">篮球场宽度</div>
        <div class="fr">{{detailsObj.lmqckd?detailsObj.lmqckd:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">羽毛球场面积</div>
        <div class="fr">{{detailsObj.yycmj?detailsObj.yycmj:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">羽毛球场长度</div>
        <div class="fr">{{detailsObj.yyccd?detailsObj.yyccd:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">羽毛球场宽度</div>
        <div class="fr">{{detailsObj.yyckd?detailsObj.yyckd:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">收费天棚面积</div>
        <div class="fr">{{detailsObj.sftpmj?detailsObj.sftpmj:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">收费天棚长度</div>
        <div class="fr">{{detailsObj.sftpcd?detailsObj.sftpcd:'暂无信息'}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="fl">收费天棚宽度</div>
        <div class="fr">{{detailsObj.sftpkd?detailsObj.sftpkd:'暂无信息'}}</div>
      </el-col>
      <el-col :span="12">
        <div class="fl">&nbsp;</div>
        <div class="fr">&nbsp;</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="fl">收费站描述</div>
        <div class="fr-mar">{{detailsObj.zsmx?detailsObj.zsmx:'暂无信息'}}</div>
        <!---->
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  props: ["dialogObj", "dialogVisible"],
  data() {
    return {
      detailsObj: {},
      dialogVisibles: false,
    };
  },
  created() {
    this.dialogVisibles = this.dialogVisible;
  },
  mounted() {
    let param = { data: this.dialogObj.MPCODE };
    this.$apiWckj
      .post("WCKJAPI_Emergency", "/GetStationInfoForBI", { param: param })
      .then((res) => {
        if (res) {
          this.detailsObj = res.data;
        } else {
          this.detailsObj = {};
        }
      });
  },
  methods: {
    handleClose() {
      this.dialogVisibles = false;
      this.$emit("showfromChild", this.dialogVisibles);
      console.log("关闭事件");
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-dialog {
  background: -ms-linear-gradient(
    top,
    rgba(247, 247, 247, 0.281),
    rgba(0, 193, 222, 0.3)
  ); /* IE 10 */
  background: -moz-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8),
    rgba(0, 193, 222, 0.3)
  ); /*火狐*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgba(170, 204, 238, 0.8)),
    to(rgba(0, 193, 222, 0.3))
  ); /*谷歌*/
  background: -webkit-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8),
    rgba(0, 193, 222, 0.3)
  ); /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(
    top,
    rgba(170, 204, 238, 0.8) 0%,
    rgba(0, 193, 222, 0.3) 10%
  ); /*Opera 11.10+*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgba(2, 148, 245, 0.89)),
    to(rgba(0, 192, 222, 0.575))
  ); /*谷歌*/
}

/deep/.el-dialog__close {
  color: rgba(247, 247, 247, 0.877);
}
/deep/.el-dialog__title {
  color: rgba(247, 247, 247, 0.877);
}

/deep/.el-dialog__header {
}
/deep/.el-dialog__body {
  color: rgba(247, 247, 247, 0.973);
}
/deep/.el-col-12 {
  padding: 0 50px;
}
/deep/.el-col-24 {
  padding: 0 50px;
}
/deep/.el-dialog__wrapper {
  transition-duration: 0.3s !important;
}
/deep/.dialog-fade-enter-active {
  animation: none !important;
}
/deep/.dialog-fade-leave-active {
  transition-duration: 0.15s !important;
  animation: none !important;
}

/deep/.dialog-fade-enter-active /deep/.el-dialog,
/deep/.dialog-fade-leave-active /deep/.el-dialog {
  animation-fill-mode: forwards !important;
}

/deep/.dialog-fade-enter-active /deep/.el-dialog {
  animation-duration: 0.3s !important;
  animation-name: anim-open !important;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1) !important;
}

/deep/.dialog-fade-leave-active /deep/.el-dialog {
  animation-duration: 0.3s !important;
  animation-name: anim-close !important;
}

@keyframes anim-open {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes anim-close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 1);
  }
}

.fr-mar {
  float: left;
  margin-left: 150px;
}
/deep/.fr {
  margin-right: 50px;
  text-align: left;
}
</style>