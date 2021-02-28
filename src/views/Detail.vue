<template>
  <div class="user-detail">
      <ul>
        User Id
        <li>{{ data.id }}</li>
      </ul>
      <ul>
        User Name
        <li>{{ data.name }}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Detail extends Vue {
  created() {
    axios
      .get(`//localhost:3000/users/${this.$route.params.id}`)
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
