<template>
  <div id="app">
    1212
    <h1 @click="jumpLogin">跳转</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    methods: {
      jumpLogin() {
        this.$router.push("/login");
      },
    },
  };
</script>
<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        logo,-->
<!--        message: "Learn Vue",-->
<!--        type: import.meta.env.NODE_ENV,-->
<!--        yy: import.meta.env.SNOWPACK_PUBLIC_ENABLE,-->
<!--        ts: import.meta.env.SNOWPACK_PUBLIC_ENABLE_FEATURE,-->
<!--        sss: import.meta.env.SNOWPACK_PUBLIC_ENV,-->
<!--      };-->
<!--    },-->
<!--    created() {-->
<!--    }-->
<!--  };-->
<!--</script>-->
