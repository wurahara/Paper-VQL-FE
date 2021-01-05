<template>
  <div class="block">

    <h1>Create new block query</h1>

    <el-card class="card" shadow="hover">
      <h2>Query block by hash</h2>
      <el-row type="flex" justify="center">
        <el-col :span="3"><h4 class="tag">Hash</h4></el-col>
        <el-col :span="16"><el-input placeholder="Hash" v-model="input" clearable></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-upload2">Submit</el-button></el-col>
      </el-row>
    </el-card>

    <el-card class="card" shadow="hover">
      <h2>Query block by number</h2>
      <el-row type="flex" justify="center">
        <el-col :span="3"><h4 class="tag">Number</h4></el-col>
        <el-col :span="16"><el-input placeholder="Block number" v-model="input" clearable></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-upload2">Submit</el-button></el-col>
      </el-row>
    </el-card>

    <h2>Query result</h2>
    <el-input class="result" type="textarea" :rows="20" v-model="textarea" placeholder="Query result" :disabled="true"></el-input>

  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom 10px
h4
  margin 9px 20px 9px 0
  text-align right
.el-button
  font-family Avenir, Helvetica, Arial, sans-serif
.card
  width 60%
  margin 20px auto
.result
  width 60%
</style>
