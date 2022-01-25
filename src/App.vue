<template>
  <v-app id="app">
    <vtabs />
    <div>{{테스트용}}</div>
  </v-app>
  
</template>


<script>
import vtabs from './components/tabs.vue';

export default {
  name: 'App',
  components: {
    vtabs
  },
  methods: {

  },
  data: () => ({
    테스트용 : 0,
  }),
};
</script>
<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}
.a {color:#fff;}
</style>
