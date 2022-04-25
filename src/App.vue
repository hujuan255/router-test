<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/jobs">Jobs</router-link>
  </nav>
  <button @click="redirect">重定向</button>
  <button @click="forward">前进</button>
  <button @click="back">后退</button>
  <router-view />
</template>
<script>
export default {
  methods: {
    redirect() {
      //通过命名路由跳转
      this.$router.push({ name: "home" });
    },
    forward() {
      this.$router.go(1);
    },
    back() {
      this.$router.back(-1);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #fff;
  background: rgb(219, 104, 104);
}
button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 0 10px;
  background: #ccc;
}
</style>
