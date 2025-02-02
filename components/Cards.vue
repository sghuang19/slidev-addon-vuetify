<template>
  <!-- Combined -->

  <v-card
    class="mx-auto mb-2rem"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>

  <!-- Variants -->

  <v-row dense>
    <v-col v-for="(variant, i) in variants" :key="i" cols="2" md="4">
      <v-card
        :variant="variant"
        class="mx-auto"
        color="surface-variant"
        max-width="344"
        subtitle="Greyhound divisely hello coldly fonwderfully"
        title="Headline"
      >
        <template v-slot:actions>
          <v-btn text="Button"></v-btn>
        </template>
      </v-card>

      <div class="text-center text-caption">{{ variant }}</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    variants: ["elevated", "flat", "tonal", "outlined", "text", "plain"],
  }),
};
</script>
