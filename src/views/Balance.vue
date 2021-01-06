<template>
  <div class="balance">

    <h1>Create new balance query</h1>

    <el-card class="card-panel" shadow="hover">
      <h2>Query balance sum</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="dateRangeInput1" :editable=false type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Address</h4></el-col>
        <el-col :span="20"><el-input placeholder="Address" v-model="addressInput1" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2" @click="sumQuery">Submit</el-button>
      <el-button type="danger" icon="el-icon-refresh" @click="clearSumInputContent">Cancel</el-button>
    </el-card>

    <el-card class="card-panel" shadow="hover">
      <h2>Query balance records</h2>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Date range</h4></el-col>
        <el-col :span="20"><el-date-picker v-model="dateRangeInput2" :editable=false type="daterange" range-separator="to" start-placeholder="Start date" end-placeholder="End date" style="width:100%"></el-date-picker></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Address</h4></el-col>
        <el-col :span="20"><el-input placeholder="Address" v-model="addressInput2" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Expense range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Expense bottom" v-model="expenseBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Expense peak" v-model="expensePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4"><h4>Income range</h4></el-col>
        <el-col :span="9"><el-input placeholder="Income bottom" v-model="incomeBottomInput" clearable></el-input></el-col>
        <el-col :span="2"><div class="to-interval"> to </div></el-col>
        <el-col :span="9"><el-input placeholder="Income peak" v-model="incomePeakInput" clearable></el-input></el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-upload2" @click="recordsQuery">Submit</el-button>
      <el-button type="danger" icon="el-icon-refresh" @click="clearRecordsInputContent">Cancel</el-button>
    </el-card>

    <h2>Query result</h2>
    <el-input class="result-display" type="textarea" :rows="20" v-model="resultTextarea" placeholder="Query result" :disabled="true"></el-input>

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
  font-weight bold
  width 20%
  margin 10px 40px 0 40px
.to-interval
  margin-top 9px
.card-panel
  width 60%
  margin 20px auto
.result-display
  width 60%
</style>

<script>
export default {
  data () {
    return {
      dateRangeInput1: '',
      addressInput1: '',
      dateRangeInput2: '',
      addressInput2: '',
      expenseBottomInput: '',
      expensePeakInput: '',
      incomeBottomInput: '',
      incomePeakInput: '',
      resultTextarea: ''
    }
  },

  methods: {
    sumQuery () {
      console.log('balance sum query')
      this.clearInputContent()
    },
    recordsQuery () {
      console.log('balance records query')
      this.clearInputContent()
    },
    clearSumInputContent () {
      this.dateRangeInput1 = ''
      this.addressInput1 = ''
    },
    clearRecordsInputContent () {
      this.dateRangeInput2 = ''
      this.addressInput2 = ''
      this.expenseBottomInput = ''
      this.expensePeakInput = ''
      this.incomeBottomInput = ''
      this.incomePeakInput = ''
    },
    clearInputContent () {
      this.clearSumInputContent()
      this.clearRecordsInputContent()
    }
  }
}
</script>
