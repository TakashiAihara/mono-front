<template>
  <!-- <v-app> -->
  <div class="search-component">
      <h2>検索条件</h2>
      <h3>User Name</h3>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account-circle"
          label="Name"
          type="text"
          v-model="username"
        >
          <template v-slot:append-outer>
            <v-btn @click="onClick"> Search </v-btn>
          </template>
        </v-text-field>
      </v-form>
  </div>
  <!-- </v-app> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld extends Vue {
  username = "";
  @Prop() private onclick!: Function;
  onClick() {
    axios.get(`//ubuntu:3000/users?q=${this.username}`).then((resp) => {
      this.onclick(resp.data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 10px 10px;
}
h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
