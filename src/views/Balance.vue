<template>
  <div class="balance">

    <h1>Create new balance query</h1>

    <el-card class="card" shadow="hover">
      <h2>Query balance sum</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Address</h4></el-col>
        <el-col :span="20"><el-input placeholder="Address" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2">Submit</el-button>
    </el-card>

    <el-card class="card" shadow="hover">
      <h2>Query balance records</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Address</h4></el-col>
        <el-col :span="20"><el-input placeholder="Address" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Expense range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Expense bottom" v-model="input" clearable></el-input></el-col>
        <el-col :span="2"><div class="to"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Expense peak" v-model="input" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Income range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Income bottom" v-model="input" clearable></el-input></el-col>
        <el-col :span="2"><div class="to"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Income peak" v-model="input" clearable></el-input></el-col>
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
