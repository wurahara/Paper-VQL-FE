<template>
  <div class="block">

    <h1>Create new auditing query</h1>

    <el-card class="card-panel" shadow="hover">
      <h2>Query auditing</h2>
      <el-row type="flex" justify="center">
        <el-col :span="3"><h4>Date</h4></el-col>
        <el-col :span="16"><el-date-picker v-model="dateInput" :editable=false type="date" placeholder="Select Date" style="width:100%"></el-date-picker></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-upload2" @click="dateQuery">Submit</el-button></el-col>
      </el-row>
    </el-card>

    <h2>Merkle Proof</h2>
    <el-input class="result-display" type="textarea" v-model="resultTextarea" placeholder="Query result" :rows="20" :disabled="true" style="font-family: 'Courier New', Courier, monospace">
    </el-input>

  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom 10px
h1
  font-weight 600
h2
  font-weight 500
h4
  margin 9px 20px 9px 0
  text-align right
  font-weight 500
.el-button
  font-family Avenir, 'Nunito', sans-serif
  font-weight bold
.el-input >>> input
  font-family Avenir, 'Nunito', sans-serif
.card-panel
  width 60%
  margin 20px auto
.result-display
  width 60%
.el-textarea >>> textarea
  font-family 'Courier New', Courier, monospace
</style>
