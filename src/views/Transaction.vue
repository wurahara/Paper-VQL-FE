<template>
  <div class="transaction">

    <h1>Create new transaction query</h1>

    <el-card class="card-panel" shadow="hover" v-loading="loadingState" element-loading-text="Connecting with server ...">
      <h2>Query transaction</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="dateRangeInput" :editable=false type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%;"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>From account</h4></el-col>
        <el-col :span="20"><el-input placeholder="From account" v-model="accountFromInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>To account</h4></el-col>
        <el-col :span="20"><el-input placeholder="To account" v-model="accountToInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Value range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Value bottom" v-model="valueBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Value peak" v-model="valuePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2" @click="transactionQuery">Submit</el-button>
      <el-button type="danger" icon="el-icon-refresh" @click="clearInputContent">Cancel</el-button>
    </el-card>

    <h2>Query result</h2>
    <el-input class="result-display" type="textarea" :rows="20" v-model="resultTextarea" placeholder="Query result" :disabled="true"></el-input>

  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom: 10px
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
.el-input >>> input
  font-family Avenir, 'Nunito', sans-serif
.to-interval
  margin-top 9px
.card-panel
  width 60%
  margin 20px auto
.result-display
  width 60%
.el-textarea >>> textarea
  font-family 'Courier New', Courier, monospace
</style>

<script>
import { queryTransaction } from '../api/transaction'
import { emitWarningNotification } from '../util/helper'
import { checkForContent, checkForContents } from '../util/validator'
import { transformDateFormat } from '../util/formatter'

export default {
  data () {
    return {
      dateRangeInput: '',
      accountFromInput: '',
      accountToInput: '',
      valueBottomInput: '',
      valuePeakInput: '',
      resultTextarea: '',
      loadingState: false
    }
  },

  methods: {
    transactionQuery () {
      if (!this.checkFormContent()) {
        emitWarningNotification('Error', 'All query fields are empty!')
      } else {
        this.loadingState = true
        queryTransaction(this.constructRequestBody()).then(res => {
          this.resultTextarea = JSON.stringify(res, null, 2)
          this.clearInputContent()
          this.loadingState = false
        }).catch(() => {
          this.resultTextarea = ''
          this.clearInputContent()
          this.loadingState = false
        })
      }
    },
    checkFormContent () {
      return checkForContents([
        this.dateRangeInput,
        this.accountFromInput,
        this.accountToInput,
        this.valueBottomInput,
        this.valuePeakInput
      ])
    },
    clearInputContent () {
      this.dateRangeInput = ''
      this.accountFromInput = ''
      this.accountToInput = ''
      this.valueBottomInput = ''
      this.valuePeakInput = ''
    },
    constructRequestBody () {
      const requestBody = {
        DatePeriod: [transformDateFormat(this.dateRangeInput[0]), transformDateFormat(this.dateRangeInput[1])],
        Projection: [],
        Filters: [{
          LogicCode: 'AND',
          Criteria: []
        }],
        Sort: []
      }
      if (checkForContent(this.accountFromInput)) {
        requestBody.Filters[0].Criteria.push({
          FieldName: 'from',
          OpCode: 'IS',
          Parameters: [this.accountFromInput]
        })
      }
      if (checkForContent(this.accountToInput)) {
        requestBody.Filters[0].Criteria.push({
          FieldName: 'to',
          OpCode: 'IS',
          Parameters: [this.accountToInput]
        })
      }
      if (checkForContent(this.valueBottomInput) && checkForContent(this.valuePeakInput)) {
        requestBody.Filters[0].Criteria.push({
          FieldName: 'value',
          OpCode: 'BETWEEN',
          Parameters: [this.valueBottomInput, this.valuePeakInput]
        })
      }
      return requestBody
    }
  }
}
</script>
