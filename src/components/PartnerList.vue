<template>
<div>

	<section class="list_wrap">
     
		<article class="top_menu">
			<h2>파트너사 목록</h2>
			<div class="search_area">
				<v-autocomplete chips clearable deletable-chips dense :items="categoris" placeholder="검색조건을 입력하세요."></v-autocomplete>
			</div>
		</article>
    <form>
    <ModalPart :모달창상태="모달창상태" :누른것="누른것" :유저정보="유저정보" @closeModal="모달창상태 = false" />
    <table class="list_table">
      <thead>
        <tr class="table_header">
          <th style="width:5%;">선택</th>
          <th>이름</th>
          <th>회사명</th>
          <th>아이디</th>
          <th>사업자등록번호</th>
          <th>전화번호</th>
          <th>등록된 상품 갯수</th>
          <th>추가정보</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a,i) in paginatedData" :key="i" class="table_body">
          <td><input type="checkbox" name="checks" v-model='selectPartner' :value="i" class="ck"></td>
          <td>{{a.name}}</td>
          <td>{{a.mail}}</td>
          <td>{{a.nixname}}</td>
          <td>{{a.gender}}</td>
          <td>{{a.telenumber}}</td>
          <td>{{a.age}}</td>
          <td><span @click="모달창상태 = true; 누른것 = 유저정보[i].id">상세정보</span></td>
        </tr>
      </tbody>
    </table> 

    <div class="list_btn_area">
      <input type="checkbox" value="" v-model='checked' id="allcheck" @change="allcheck"><label id="allcheck" for="allcheck">전체선택</label>
      <button class="exceldown" @click="excelDown">엑셀 다운로드</button>
      <button class="messagepost" @click="massgePost">선택한 사람에게 문자 발송하기</button>
      <button class="delete" @click="userDelete">삭제</button>
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
import ModalPart from './Modal_partner_info'
import $ from 'jquery';
export default {
  name:'UserList',
	data: () => ({
      selectPartner:[],
      checked: false,
      page: 1,
      모달창상태 : false,
      누른것 : 0,
      pageSize: 10,
      pageNum: 0,
      categoris: ['아이디검색', '회사명검색', '전화번호검색', '이름검색', '사업자번호검색', ],
      데이터갯수 : 0,
    }),
  props : {
		유저정보 : Array,  
	},
	methods: {
    allcheck(){
        if( this.checked == true ){
          // console.log(1)
          this.selectPartner = true
        } else if (this.checked == false ){
          // console.log(2)
          this.selectPartner = []
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
	excelDown(){
            if ( $('.table_body input:checkbox[name="checks"]:checked').length === 0 ){
              alert('다운 받을 항목을 선택해주세요.')
              return;
            }
    },
	massgePost(){
            if ( $('.table_body input:checkbox[name="checks"]:checked').length === 0 ){
              alert('보낼 항목을 선택해주세요.')
              return;
            }
    },

    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }

	},
  components: { // 컴포넌트 불러온뒤 여기에 적어야함
    ModalPart
  },
  computed: {
    pageCount () {
      let listLeng = this.유저정보.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
          // console.log(listLeng)
          // console.log(listSize)
          // console.log('찾기')
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

.list_btn_area input { display:none;}
.list_btn_area label {
  padding:6px 15px; float: left; margin-right:5px;
  color: #fff;
  background:#1976D2; border-radius: 3px;
  cursor: pointer;
}
.list_btn_area::after {content: ''; display: block;clear: both;}


.list_btn_area .delete,.exceldown,.messagepost {
 padding:6px 10px; float:right;
 color:#fff; text-align: center;
 background: #1976D2; border-radius: 3px;
 cursor: pointer;
}
.list_btn_area .exceldown {
	float:left; margin-right:5px;
	padding-left: 30px;
	color: #fff;
	background: #00914a url(../../public/excel.png)no-repeat 8px center; 
	}
.list_btn_area .messagepost {float:left; background:#607d8b; }
.list_btn_area .delete:hover { background:#607d8b;}






</style>