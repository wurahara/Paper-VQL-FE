<template>
  <div class="block">

    <h1>Create new block query</h1>

    <el-card class="card-panel" shadow="hover">
      <h2>Query block by hash</h2>
      <el-row type="flex" justify="center">
        <el-col :span="3"><h4 class="tag">Hash</h4></el-col>
        <el-col :span="16"><el-input placeholder="Hash" v-model="hashInput" clearable></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-upload2" @click="hashQuery">Submit</el-button></el-col>
      </el-row>
    </el-card>

    <el-card class="card-panel" shadow="hover">
      <h2>Query block by number</h2>
      <el-row type="flex" justify="center">
        <el-col :span="3"><h4 class="tag">Number</h4></el-col>
        <el-col :span="16"><el-input placeholder="Block number" v-model="blockNumberInput" clearable></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-upload2" @click="numQuery">Submit</el-button></el-col>
      </el-row>
    </el-card>

    <h2>Query result</h2>
    <el-input class="result-display" type="textarea" v-model="resultTextarea" placeholder="Query result" :rows="20" :disabled="true">
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

<script>
import { queryBlockByHash, queryBlockByNum } from '../api/block'
import { emitWarningNotification } from '../util/helper'
import { checkForContent } from '../util/validator'

export default {
  data () {
    return {
      hashInput: '',
      blockNumberInput: '',
      resultTextarea: ''
    }
  },

  methods: {
    hashQuery () {
      if (checkForContent(this.hashInput) === false) {
        emitWarningNotification('Warning', 'Block hash cannot be empty.')
      } else {
        queryBlockByHash(this.hashInput).then(res => {
          this.resultTextarea = JSON.stringify(res, null, 2)
        }).catch(() => {
          this.resultTextarea = ''
          this.clearInputContent()
        })
      }
    },
    numQuery () {
      if (checkForContent(this.blockNumberInput) === false) {
        emitWarningNotification('Warning', 'Block number cannot be empty.')
      } else {
        queryBlockByNum(this.blockNumberInput).then(res => {
          this.resultTextarea = JSON.stringify(res, null, 2)
        }).catch(() => {
          this.resultTextarea = ''
          this.clearInputContent()
        })
      }
    },
    clearInputContent () {
      this.hashInput = ''
      this.blockNumberInput = ''
    }
  }
}
</script>
