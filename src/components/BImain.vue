<template>
  <div class="BImain">
    <dv-decoration-9>跳转中...</dv-decoration-9>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  created() {
    let token = this.$route.query.token; //    "bcfc426a043445aca64cac1627eb44c8"
    let param = { token: token };
    this.$ajax
      // .get("http://qywx.hhgs.org.cn:9098/WCKJAPI_MD/VcationToken"
      .post(
        "http://qywx.hhgs.org.cn:9098/WCKJAPI_MD/VcationToken",
        //   .post("http://192.168.2.229:1102/WCKJAPI_MD/VcationToken",
        {
          param: JSON.stringify(param)
        }
      )
      .then(res => {
        console.log(res);

        if (res.data.code == 0) {
          // window.sessionStorage.setItem("token", res.data);
          Cookies.set("token", token); // Cookies.set('token', res.data, {expires: 7}); cookie保存7天
          this.$router.push("/Home");
          this.$store.state.fullScreen = true;
        } else {
          this.$notify.error({
            title: "error",
            message: res.data.message
          });
          this.$router.push("/login");
        }
      })
      .catch(error=>{
          this.$notify.error({
            title: "服务器异常，请重新登陆"
          });
          this.$router.push("/login");
      })
  }
};
</script>
<style lang="less" scoped>
.BImain {
  width: 100%;
  height: 100vh;
  position: relative;
  .dv-decoration-9 {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #048cc1;
  }
}
</style>