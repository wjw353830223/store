<template>
	<div class="m-l-50 m-t-30 w-500">
      <el-progress type="circle" :percentage="percentage"></el-progress>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      
      }
    },
    methods: {
     
    },
    created() {
      
    },
    props:['percentage']
  }
</script>