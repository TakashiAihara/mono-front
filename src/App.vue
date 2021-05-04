<template>
  <v-app>
    <v-container>
      <router-link to="/">
        <v-btn class="ma-2" color="primary" dark>
          Home
          <v-icon dark right> mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/person">
        <v-btn class="ma-2" dark>
          Regist
          <v-icon right> mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-container>
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
