<template>
  <div id="main-nav">
      <img src="./assets/logo.png" width="20" alt="">
      主架构导航：
      <a href="/vue">vue</a> |
      <a href="/fm">fm</a> |
      <a href="/boat">船厂</a>
      <!-- <router-link to="/app2">app2</router-link> |
      <router-link to="/fm/">OSS告警首页</router-link> |
      <router-link to="/nsmf/#/login">船厂首页</router-link> -->
    </div>
</template>

<script>

export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
#main-nav {
  color: white;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #031129;
  padding: 30px;
  border-bottom: 2px dotted white;
}

#main-nav a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}

#main-nav a.router-link-exact-active {
  font-weight: bold;
  color: #169bfa;
}
</style>
