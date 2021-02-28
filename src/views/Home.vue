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
export default class Home extends Vue {}
</script>
