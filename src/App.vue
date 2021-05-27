<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--222-->
      <!--&lt;!&ndash;<router-link to="/">Home</router-link> |&ndash;&gt;-->
      <!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
    <!--</div>-->
    <router-view/>
    <router-view name="tabbar"></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

</script>

<style lang="scss" src="./assets/scss/global.scss" />
