<template>
  <div class="transaction">

    <h1>Create new transaction query</h1>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Date range</h3></el-col>
      <el-col :span="10"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date"></el-date-picker></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>From account</h3></el-col>
      <el-col :span="10"><el-input placeholder="From account" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>To account</h3></el-col>
      <el-col :span="10"><el-input placeholder="To account" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Value range</h3></el-col>
      <el-col :span="4"><el-input placeholder="Value bottom" v-model="input" clearable></el-input></el-col>
      <el-col :span="2"> to </el-col>
      <el-col :span="4"><el-input placeholder="Value peak" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="12"><el-button type="primary" icon="el-icon-search">Submit</el-button></el-col>
    </el-row>

    <h2>Query result</h2>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-input type="textarea" :rows="20" v-model="textarea" placeholder="Query result" :disabled="true"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus">
.el-row
  margin-bottom: 10px
</style>
