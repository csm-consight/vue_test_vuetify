<template>
  <v-sheet elevation="6">
    <v-tabs background-color="#5F54F0" dark next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline" show-arrows>
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab v-for="i in 6" :key="i" :href="'#tab-' + i">
        설명 {{ i }}
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>