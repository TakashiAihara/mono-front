<template>
  <div class="home">
    <SearchComponent :onclick="setData"></SearchComponent>
    <SearchResult :data="data"></SearchResult>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchComponent from "@/components/SearchComponent.vue";
import SearchResult from "@/components/SearchResult.vue";

@Component({
  components: {
    SearchComponent,
    SearchResult
  },
})
export default class Home extends Vue {
  setData(data: never[]){
    this.data = data;
  }
  data = [];
}
</script>
