<template>
  <div class="block">

    <h1>Create new location query</h1>

    <el-card class="card-panel" shadow="hover">
      <h2>Query location</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Start latitude</h4></el-col>
        <el-col :span="9"><el-input placeholder="Bottom" v-model="startLatitudeBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Peak" v-model="startLatitudePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Start longitude</h4></el-col>
        <el-col :span="9"><el-input placeholder="Bottom" v-model="startLongitudeBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Peak" v-model="startLongitudePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>End latitude</h4></el-col>
        <el-col :span="9"><el-input placeholder="Bottom" v-model="endLatitudeBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Peak" v-model="endLatitudePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>End longitude</h4></el-col>
        <el-col :span="9"><el-input placeholder="Bottom" v-model="endLongitudeBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Peak" v-model="endLongitudePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2" @click="locationQuery">Submit</el-button>
      <el-button type="danger" icon="el-icon-refresh" @click="clearLocationInputContent">Cancel</el-button>
    </el-card>

    <h2>Query result</h2>
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
  width 20%
  margin 10px 40px 0 40px
.to-interval
  margin-top 9px
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
