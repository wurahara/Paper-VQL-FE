<template>
  <div class="block">

    <h1>Create new block query</h1>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3 class="tag">Hash</h3></el-col>
      <el-col :span="8"><el-input placeholder="Hash" v-model="input" clearable></el-input></el-col>
      <el-col :span="2"><el-button type="primary" icon="el-icon-search">Submit</el-button></el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="3"><h3 class="tag">Block number</h3></el-col>
      <el-col :span="8"><el-input placeholder="Block number" v-model="input" clearable></el-input></el-col>
      <el-col :span="2"><el-button type="primary" icon="el-icon-search">Submit</el-button></el-col>
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
