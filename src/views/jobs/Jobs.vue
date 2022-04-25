<template>
  <h1>工作</h1>
  <div v-if="jobs.length > 0">
    <div class="jobs" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobdeatils', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>工作正在加载中...</p>
  </div>
</template>
<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
.jobs h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.jobs h2:hover {
  background: #ddd;
}
.jobs a {
  text-decoration: none;
}
</style>