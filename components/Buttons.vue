<template>
  <!-- Variants -->

  <v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="variant in [
          'flat',
          'text',
          'elevated',
          'tonal',
          'outlined',
          'plain',
        ]"
        :key="variant"
        cols="auto"
      >
        <v-btn color="primary" :variant="variant">{{ variant }}</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- Icon -->

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn icon="mdi-account" size="x-small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-plus" size="small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="$vuetify"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-open-in-new" size="large"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-calendar" size="x-large"></v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- Elevation -->

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn size="x-small">Extra small Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="small">Small Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn>Regular Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="large">Large Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="x-large">X-Large Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
