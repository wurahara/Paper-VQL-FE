<template>
  <div id="nav">
    <router-link to="/">VQL-Client</router-link> |
    <router-link to="/block">Block</router-link> |
    <router-link to="/transaction">Transaction</router-link> |
    <router-link to="/balance">Balance</router-link>
  </div>
  <router-view/>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
