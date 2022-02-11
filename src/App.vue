<template>
<div id="wrap">
  <v-app id="app" class="app_wrap">
    <Navigation />
    <Headers style="display:none;" />
    <section class="container_box">
      <Datalist style="display:none;" />
      <UserSerch />
      <UserList :유저정보="유저정보" />
    </section>
    
  </v-app>
</div>
</template>


<script>
import Navigation from './components/Navigation.vue';
import Headers from './components/Header.vue';
import Datalist from './components/Datelist.vue';
import UserList from './components/UserList.vue';
import UserSerch from './components/UserSerch.vue';

import 유저정보 from './assets/testdata.js';

import $ from 'jquery';

export default {
  name: 'App',
  components: {
    Navigation,
    Headers,
    Datalist,
    UserList,
    UserSerch
  },
  methods: {
    clickEvent(){
      $('button').css({color:'red'})
    }
  },
  data: () => ({
    테스트용 : 0,
    유저정보 : 유저정보,
  }),
};
</script>
<style>
html,body { width:100%; height:100%; }
body,div,p,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,form,fieldset,button,input { margin:0; padding:0; }
body,h1,h2,h3,h4,input,button { font-family: "Roboto", sans-serif;  font-size:12px; }
ul,li,ol { list-style:none; }
img,fieldset,iframe { border:0; }
img { vertical-align:top; }
table { border-collapse:collapse; }
a {text-decoration:none; }

div {
  box-sizing: border-box;
}
.v-application--wrap {
  background-color: #F4F6F9;
}
.container_box {
  padding:30px 30px 30px 290px;
  width: 100%;
  height:100%;
  
}
</style>
