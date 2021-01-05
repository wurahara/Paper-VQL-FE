<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/"><span class="name">VQL-Client</span></router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/block"><span class="route">Block</span></router-link>&nbsp;
        <router-link to="/transaction"><span class="route">Transaction</span></router-link>&nbsp;
        <router-link to="/balance"><span class="route">Balance</span></router-link>
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
  width 60%
.el-header
  background-color #409EFF
  line-height 60px
body
  margin-top 0
  margin-left 0
  margin-right 0
.name
  font-weight bolder
  font-size 20px
.route
  font-weight bold
a
  text-decoration none
  color #FFF
</style>
