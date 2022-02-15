<template>
  <v-card class="mx-auto navi" width="260">
    <v-list>
      <v-list-item class="logo">
        <v-list-item-title>Ipzu09</v-list-item-title>
      </v-list-item>

      <v-list-group :value="true" prepend-icon="mdi-account-circle" >
        <template v-slot:activator>
          <v-list-item-title>회원관리</v-list-item-title>
        </template>

        <!-- <v-list-group :value="true" no-action sub-group >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>회원목록</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>

        </v-list-group> -->
        
        <router-link to="/">
        <v-list-group no-action sub-group class="noneicon" >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>회원목록</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

        <router-link to="/1">
        <v-list-group no-action sub-group class="noneicon" >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>회원등록</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

        <v-list-group no-action sub-group class="noneicon" >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>회원탈퇴내역</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

        <v-list-group no-action sub-group class="noneicon" >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>회원가입폼</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

        <v-list-group no-action sub-group class="noneicon" >
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>회원그룹 설정</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

      </v-list-group>

      <v-list-group prepend-icon="mdi-account-circle" >
        <template v-slot:activator>
          <v-list-item-title>파트너 관리</v-list-item-title>
        </template>

        <router-link to="/partner">
        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>파트너 목록</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

        <router-link to="/itemmanage">
        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>상품관리</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

        <router-link to="/2">
        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>로그인 기록</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

        <router-link to="/2">
        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>매출 통계</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        </router-link>

      </v-list-group>

           <v-list-group prepend-icon="mdi-account-circle" >
        <template v-slot:activator>
          <v-list-item-title>매거진</v-list-item-title>
        </template>

        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>매거진 등록</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

        <v-list-group no-action sub-group class="noneicon">
          <template v-slot:activator >
            <v-list-item-content>
              <v-list-item-title>매거진 리스트</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

      </v-list-group>



    </v-list>
  </v-card>
</template>


<script>
 export default {
  name:'Nav',
  props : {
    
	},
  methods: {

  },
    data: () => ({
      admins: [
        ['구매자', 'mdi-account-multiple-outline'],
        ['판매자', 'mdi-cog-outline'],
      ],
      회원목록 : ['회원목록','회원등록','회원탈퇴내역','회원가입폼','회원그룹설정'],
      파트너관리 : ['파트너 목록','상품관리','로그인 기록','매출통계'],
    }),
  }
</script>

<style>

.navi {
	position: fixed !important; left:0;
  height:100vh;
  z-index: 1000;
}
.v-list {
  padding: 0 !important;
}
.logo {
  height: 65px;
  background-color:#1976D2;
}
.logo .v-list-item__title {
  font-size:18px !important;
  color: #fff !important; 
}

.noneicon .v-icon {
  display: none !important;
}
.v-list-item__title {
  color:#000 !important;
}
.v-sheet.v-card {
	border-radius: 0 
}
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item {
 cursor: pointer;
}
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item:hover {
 cursor: pointer;
 background-color:#F6F6F6;
}

</style>