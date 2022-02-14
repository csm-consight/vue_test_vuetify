<template>
<div>

  <UserSerch />
 
	<section class="userlist_wrap">
     

		<article class="top_menu">
			<h2>회원목록</h2>
		</article>
    <form>
    <Modal :모달창상태="모달창상태" :누른것="누른것" :유저정보="유저정보" @closeModal="모달창상태 = false" />
    <table class="user_table">
      <thead>
        <tr class="table_header">
          <th style="width:5%;">선택</th>
          <th>회원구분</th>
          <th>아이디(이메일)</th>
          <th>이름</th>
          <th>성별</th>
          <th>닉네임</th>
          <th>생년월일</th>
          <th>전화번호</th>
          <th>최근접속</th>
          <th>추가정보</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a,i) in paginatedData" :key="i" class="table_body">
          <td><input type="checkbox" name="checks" v-model='selectUser' :value="i" @change="checkeds" class="ck"></td>
          <td>{{a.usertype}}</td>
          <td>{{a.mail}}</td>
          <td>{{a.name}}</td>
          <td>{{a.gender}}</td>
          <td>{{a.nixname}}</td>
          <td>{{a.age}}</td>
          <td>{{a.telenumber}}</td>
          <td>{{a.lastaccess}}</td>
          <td><span @click="모달창상태 = true; 누른것 = 유저정보[i].id">상세정보</span></td>
        </tr>
      </tbody>
    </table> 

    <div class="allsel_del_area">
      <input type="checkbox" value="i" v-model='checked' id="allcheck" @change="allcheck"><label id="allcheck" for="allcheck">전체선택</label>
      <p class="delete" @click="userDelete">삭제</p>
    </div>
    </form>


    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
    </div>
    <!-- <v-pagination v-model="page" :length="7" :total-visible="5"></v-pagination> -->

		
	</section>
</div>
</template>

<script>
import Modal from './Modal_user_info.vue'
import UserSerch from './UserSerch.vue';
import $ from 'jquery';
export default {
  name:'UserList',
	data: () => ({
      selectUser:[],
      checked: false,
      page: 1,
      모달창상태 : false,
      누른것 : 0,
      pageSize: 5,
      pageNum: 0,
    }),
  props : {
		유저정보 : Array,  
	},
	methods: {
    allcheck(){
        if( this.checked == true ){
          // console.log(1)
          this.selectUser = true
        } else if (this.checked == false ){
          // console.log(2)
          this.selectUser = []
        } 
    },
    checkeds(event){ // 체크 확인
      for(let i=0; i < this.selectUser.length; i++){
          if(this.selectUser[i] !== event.target.checked){
          console.log(this.selectUser[i])
          }
      }
    },
    userDelete(){
            if ( $('.table_body input:checkbox[name="checks"]:checked').length === 0 ){
              alert('삭제하실 정보를 체크해주세요.')
              return;
            }
            // $('.table_body input:checkbox[name="checks"]:checked').each(function(e,b){
            //   console.log('b ::', b.parentElement.parentElement);
            //    let a = b.parentElement.parentElement;
            //    $(a).remove();
            //    return false
            // })
    },


    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }

	},
  components: { // 컴포넌트 불러온뒤 여기에 적어야함
    Modal,
    UserSerch,
  },
  computed: {
    pageCount () {
      let listLeng = this.유저정보.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
          console.log(listLeng)
          console.log(listSize)
          console.log('찾기')
      if (listLeng % listSize > 0) page += 1;
      
      
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
     paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.유저정보.slice(start, end);
    }
  }

}
</script>

<style>
.userlist_wrap {
	padding:20px; 
	width: 100%; min-width:550px;
	background:#fff; box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
	border-radius:5px;
}
.top_menu {
	padding-bottom:10px; 
	box-sizing: border-box;
	border-bottom:1px solid #e5e5e5;
	margin-bottom: 20px;
}
.top_menu h2 {
	font-size:20px;line-height:35px;
	display:inline;
}

/* 테이블 */
.user_table {
  margin-bottom: 10px;
  width:100%;
  white-space: nowrap;
}
.table_header {
  background-color: #607d8b;
}

.table_header th {
  padding:12px;
  font-weight: 700; font-size: 14px; color: #fff;
  border: 1px solid #dee2e6;
}
.table_body td {
  text-align: center;
  padding:12px;
  border: 1px solid #dee2e6;
}
.table_body:hover {
  background:#f5f5f5f5;
}
.table_body td input {
  width:15px; height:15px;
  vertical-align: middle;
}
.table_body td > span {
  padding:6px 10px;
  color: #fff; cursor: pointer;
  background:#1976D2; border-radius: 3px;
}
.table_body td > span:hover { background:#607d8b;}
.allsel_del_area input {
  margin:0 5px;
  width:15px; height:15px;
  vertical-align:sub; display:none;
}
.allsel_del_area label {
  padding:6px 15px; float: left;
  height: 30px;
  color: #fff;
  background:#1976D2; border-radius: 3px;
  cursor: pointer;
}
.allsel_del_area::after {content: ''; display: block;clear: both;}
.allsel_del_area .delete {
 padding:6px 10px; float:right;
 width:50px; color:#fff; text-align: center;
 background: #1976D2; border-radius: 3px;
 cursor: pointer;
}
.allsel_del_area .delete:hover { background:#607d8b;}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}





</style>