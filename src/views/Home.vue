<template>
  <div class="home">
    <SearchComponent></SearchComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchComponent from '@/components/SearchComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    SearchComponent,
  },
})
export default class Home extends Vue {
  data = [
    { id: "001", name: "Tanaka" },
    { id: "002", name: "Tamura" },
    { id: "003", name: "Nakata" },
  ];
}
</script>
