<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Angry Pajaritos
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["overlay"]),
  },
};
</script>
