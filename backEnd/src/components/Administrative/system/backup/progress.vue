<template>
	<div class="m-l-50 m-t-30 w-500">
      <el-progress type="circle" v-bind:percentage="percentageRate" ></el-progress>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        percentageRate:0
      }
    },
    methods: {
     
    },
    created() {
      
    },
    props:['percentage'],
    watch: {
      percentage(newValue, oldValue){
        this.percentageRate = newValue
        console.log(this.percentageRate)
      }
    }
  }
</script>