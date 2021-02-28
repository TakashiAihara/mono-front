<template>
  <div class="home">
    <SearchComponent :onclick="setData"></SearchComponent>
    <SearchResult :data="data"></SearchResult>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchComponent from "@/components/SearchComponent.vue"; // @ is an alias to /src
import SearchResult from "@/components/SearchResult.vue"; // @ is an alias to /src

@Component({
  components: {
    SearchComponent,
    SearchResult
  },
})
export default class Home extends Vue {
  setData(data: Array<{id: string; name: string}>){
    this.data = data;
  }
  data = [
    { id: "001", name: "Tanaka" },
    { id: "002", name: "Tamura" },
    { id: "003", name: "Nakata" },
  ];
}
</script>
