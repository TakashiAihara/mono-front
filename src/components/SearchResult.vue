<template v-if="data.length">
  <div class="search-result">
    <h2>検索結果</h2>
    <table class="result-table">
      <thead>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  username = "";
  @Prop() private data!: string;
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

.result-table {
  border: 1px solid black;
  margin: auto;

  th,
  td {
    border: 1px solid black;
  }
}
</style>
