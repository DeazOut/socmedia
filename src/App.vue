<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
    
  </nav>
  <!-- <v-content class="px-12 py-3">
    <v-container fluid> 
      <router-view v-on:login="UpdateUser" />
    </v-container>
  </v-content> -->
  <router-view/>
</template>

<script>
  // export default {
  //   methods:{
  //     UpdateUser(){
  //       window.alert('НЕВЕРНЫЙ ПАРОЛЬ');
  //     }
  //   }
  // }

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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
