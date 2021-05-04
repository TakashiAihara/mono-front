<template>
  <div>
    <h2>検索結果</h2>
    <v-simple-table dense v-if="data.length" class="result-table">

      <thead>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data" :key="idx">
          <td>
              <router-link :to="{name: 'PersonDetail', params: {id: item.id}}">
                {{ item.id }}
              </router-link>
            </td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  username = "";
  @Prop() private data!: Array<object>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

*{
  margin: 10px;
}

</style>
