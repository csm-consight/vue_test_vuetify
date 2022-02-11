<template>
  <v-sheet elevation="6" class="headers">
    <v-tabs background-color="#fff" dark next-icon="mdi-arrow-right-bold-box-outline" 
    prev-icon="mdi-arrow-left-bold-box-outline" show-arrows height='64'>
      <v-tabs-slider color="black"></v-tabs-slider>
      <v-app-bar-nav-icon class="menu_bar" @click="closeMenu"></v-app-bar-nav-icon>
      <v-tab>{{ menus[0] }}</v-tab>
      <v-tab>{{ menus[1] }}</v-tab>
    </v-tabs>
  </v-sheet>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'tabs',
  components: {
  },
  props : {
    
	},
  methods: {
    closeMenu(){
      $('.navi').toggle({left:-260})
      $('.headers').css({marginLeft:0})
    }
  },
  data: () => ({
    menus : ['Home','Contact',],
  }),
}
</script>

<style>
.headers {
  margin-left: 260px;
}
.menu_bar {
 padding:32px !important;
 box-sizing: border-box;
}
.theme--dark.v-btn.v-btn--icon {
  color: #000 !important;
}
.v-tab {
  color: #000 !important;
}
.v-application .elevation-6 {
  box-shadow: none !important;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
}
</style>