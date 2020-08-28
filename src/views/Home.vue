<template>
  <div class="home pt-5">
    <v-container>
      <v-row>
        <v-col
          v-for="bird in birds"
          :key="bird.uid"
          cols="12"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              max-height="300px"
              :src="bird.images.main"
              @click="displayDialog(bird)"
            >
              <v-card-title>{{ bird.uid }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <bird-modal
      :dialog="dialog"
      :bird="currentBird"
      @close-dialog="dialog = false"
    ></bird-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BirdModal from "@/components/BirdModal";
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    BirdModal,
  },
  computed: {
    ...mapState(["birds", "currentBird"]),
  },
  methods: {
    ...mapActions(["setBirds", "setCurrentBird"]),
    displayDialog(bird) {
      this.setCurrentBird(bird._links.self);
      this.dialog = true;
    },
  },
  created() {
    this.setBirds();
  },
};
</script>
