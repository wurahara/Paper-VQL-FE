<template>
  <div class="balance">

    <h1>Create new balance query</h1>
    <h2>Query balance sum</h2>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Date range</h3></el-col>
      <el-col :span="10"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date"></el-date-picker></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Address</h3></el-col>
      <el-col :span="10"><el-input placeholder="Address" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13"><el-button type="primary" icon="el-icon-search">Submit</el-button></el-col>
    </el-row>

    <h2>Query balance records</h2>

    <el-row type="flex"></el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Date range</h3></el-col>
      <el-col :span="10"><el-date-picker v-model="value1" type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date"></el-date-picker></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Address</h3></el-col>
      <el-col :span="10"><el-input placeholder="Address" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Expense range</h3></el-col>
      <el-col :span="4"><el-input placeholder="Expense bottom" v-model="input" clearable></el-input></el-col>
      <el-col :span="2"> to </el-col>
      <el-col :span="4"><el-input placeholder="Expense peak" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3>Income range</h3></el-col>
      <el-col :span="4"><el-input placeholder="Income bottom" v-model="input" clearable></el-input></el-col>
      <el-col :span="2"> to </el-col>
      <el-col :span="4"><el-input placeholder="Income peak" v-model="input" clearable></el-input></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-button type="primary" icon="el-icon-search">Submit</el-button>
      </el-col>
    </el-row>

    <h2>Query result</h2>

    <el-row type="flex" justify="center">
      <el-col :span="13">
        <el-input type="textarea" :rows="20" v-model="textarea" placeholder="Query result" :disabled="true"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
