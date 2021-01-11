<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/"><span class="app-tag">VQL-Client</span></router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/block"><span class="route-tag">Block</span></router-link>&nbsp;&nbsp;
        <router-link to="/transaction"><span class="route-tag">Transaction</span></router-link>&nbsp;&nbsp;
        <router-link to="/balance"><span class="route-tag">Balance</span></router-link>&nbsp;&nbsp;
        <router-link to="/auditing"><span class="route-tag">Auditing</span></router-link>
      </div>
    </el-header>
  </el-container>
  <router-view/>
  <el-container>
    <el-footer>Copyright © 2021 COMP PolyU, all rights reserved.</el-footer>
  </el-container>
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
  width 70%
.el-header
  background-color #3579F6
  line-height 60px
.el-footer
  font-weight 500
  margin-top 40px
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
