<template>
  <div class="search-component">
    <h2>検索条件</h2>
    <h3>User Name</h3>
    <input type="text" v-model="username">
    <input value="Search" type="button" @click="onClick">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  username = "";
  @Prop() private onclick!: Function;
  onClick(){
    axios.get(`//localhost:3000/users?q=${this.username}`)
    .then((resp)=>{
      this.onclick((resp.data))
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
