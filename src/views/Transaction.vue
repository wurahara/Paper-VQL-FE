<template>
  <div class="transaction">

    <h1>Create new transaction query</h1>

    <el-card class="card" shadow="hover">
      <h2>Query transaction</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>From account</h4></el-col>
        <el-col :span="20"><el-input placeholder="From account" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>To account</h4></el-col>
        <el-col :span="20"><el-input placeholder="To account" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Value range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Value bottom" v-model="input" clearable></el-input></el-col>
        <el-col :span="2"><div class="to"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Value peak" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2">Submit</el-button>
    </el-card>

    <h2>Query result</h2>
    <el-input class="result" type="textarea" :rows="20" v-model="textarea" placeholder="Query result" :disabled="true"></el-input>

  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom: 10px
h4
  margin 9px 20px 9px 0
  text-align right
.el-button
  font-family Avenir, Helvetica, Arial, sans-serif
.to
  margin-top 9px
.card
  width 60%
  margin 20px auto
.result
  width 60%
</style>
