<template>
  <div class="transaction">
    <h1>Create new transaction query</h1>

    <el-row type="flex"><el-col :span="13"><h2>Date range</h2></el-col></el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date">
    </el-date-picker>
      </el-col>
    </el-row>

    <el-row type="flex"><el-col :span="14"><h2>From account</h2></el-col></el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-input placeholder="From account" v-model="input" clearable></el-input>
      </el-col>
    </el-row>

    <el-row type="flex"><el-col :span="14"><h2>To account</h2></el-col></el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-input placeholder="To account" v-model="input" clearable></el-input>
      </el-col>
    </el-row>

    <el-row type="flex"><el-col :span="14"><h2>Value range</h2></el-col></el-row>

    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-input placeholder="Value bottom" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="1"> to </el-col>

      <el-col :span="6">
        <el-input placeholder="Value peak" v-model="input" clearable></el-input>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-button type="primary" icon="el-icon-search">Submit</el-button>
      </el-col>
    </el-row>

    <el-row type="flex"><el-col :span="14"><h2>Query result</h2></el-col></el-row>

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
