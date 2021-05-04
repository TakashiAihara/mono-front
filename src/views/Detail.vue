<template>
  <v-card width="400px" class="mx-auto mt-10">
    <div class="user-detail">
      <v-row justify="space-between">
        <v-card-title>User ID</v-card-title>
        <v-form ref="form">
          <v-text-field
            v-model="data.id"
            label="User ID"
            disabled
          ></v-text-field>
        </v-form>
      </v-row>
      <v-row justify="space-between">
        <v-card-title>User Name</v-card-title>
        <v-form ref="form">
          <v-text-field v-model="data.name" label="User Name"></v-text-field>
        </v-form>
      </v-row>
      <v-row justify="space-between">

        <v-btn v-if="this.$route.params.id" block @click="registData"
          >Update</v-btn
        >
        <v-btn v-else block @click="registData">Regist</v-btn>
      </v-row>
    </div>
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,idx) in errors" :key="idx">{{ error }}</li>
    </ul>
  </p>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Detail extends Vue {
  created() {
    if (this.$route.params.id) {
      axios
        .get(`//localhost:3000/person/${this.$route.params.id}`)
        .then((resp) => {
          this.data = resp.data;
          console.log(resp);
        });
    }
  }

  registData() {
    // idがあるかどうかで put post を分ける。
    this.errors = [];
    if (!this.data.name) {
      this.errors.push("Name required.");
      return;
    }
    if (this.$route.params.id) {
      // put
      console.log(this.$data);
      console.log(this.$route);
      console.log(this.$route.params.id);
      axios
        .put(`//localhost:3000/person/${this.$route.params.id}`, this.data) // URLパラメータからid取得。画面からは取らない。
        .then((response) => {
          const e = response.data;
          console.log(this);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post(`//localhost:3000/person`, this.data)
        .then((response) => {
          const e = response.data;
          console.log(this);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  data = {};
  errors: Array<string> = [];
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
