<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <div>该工作的id为{{ id }}</div>
    <div>{{ job.details }}</div>
  </div>
  <div v-else>
    <p>工作详情正在加载中...</p>
  </div>
</template>
<script>
export default {
  //name: "JobDetails",
  props: ["id"],
  data() {
    return {
      job: {},
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style lang='less' scoped>
</style>