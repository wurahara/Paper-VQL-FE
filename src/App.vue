<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/"><span class="app-tag">VQL-Client</span></router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/block"><span class="route-tag">Block</span></router-link>&nbsp;&nbsp;
        <router-link to="/transaction"><span class="route-tag">Transaction</span></router-link>&nbsp;&nbsp;
        <router-link to="/balance"><span class="route-tag">Balance</span></router-link>
      </div>
    </el-header>
  </el-container>
  <router-view/>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 0px
#nav
  width 65%
.el-header
  background-color #409EFF
  line-height 60px
body
  margin-top 0
  margin-left 0
  margin-right 0
.app-tag
  font-weight bolder
  font-size 24px
  &:hover
    color #CCC
.route-tag
  font-weight bold
  font-size 18px
  &:hover
    color #CCC
a
  text-decoration none
  color #FFF
</style>
