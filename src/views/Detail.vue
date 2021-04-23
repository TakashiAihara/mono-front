<template>
    <v-card width="400px" class="mx-auto mt-10">
  <div class="user-detail">
      <v-card-title>User ID</v-card-title>
        <v-card-subtitle>{{ data.id }}</v-card-subtitle>
            <v-divider class="mx-4"></v-divider>
      <v-card-title>User Name</v-card-title>
        <v-card-subtitle>{{ data.name }}</v-card-subtitle>
  </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Detail extends Vue {
  created() {
    axios
      .get(`//ubuntu:3000/users/${this.$route.params.id}`)
      .then((resp) => {
        this.data = resp.data;
        console.log(resp)
      });
  }
  data = {};
}
</script>

<style lang="scss">

.user-detail {
  padding: 30px;

  ul {
    list-style-type: none;
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.5em;
  }

  li {
    color: #2c3e50;
    font-size: 1em;
  }
}
</style>
