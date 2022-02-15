<template>
<div>

	<section class="list_wrap">
    
		<article class="top_menu">
			<h2>상품관리</h2>
			<!-- <div class="search_area">
				<v-autocomplete chips clearable deletable-chips dense :items="categoris" placeholder="검색조건을 입력하세요."></v-autocomplete>
			</div> -->
		</article>
    <form>
    <table class="list_table">
      <thead>
        <tr class="table_header">
          <th style="width:5%;">선택</th>
          <th>회사명</th>
          <th>이메일</th>
          <th>카테고리</th>
          <th>지역</th>
          <th>아파트명</th>
          <th>상품명</th>
          <th>등록일</th>
          <th>마감일</th>
          <th>승인</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a,i) in paginatedData" :key="i" class="table_body">
			<td><input type="checkbox" name="checks" v-model='selectItem' :value="i" class="ck"></td>
			<td>{{a.name}}</td>
			<td>{{a.mail}}</td>
			<td>{{a.nixname}}</td>
			<td>{{a.gender}}</td>
			<td>{{a.telenumber}}</td>
			<td>{{a.age}}</td>
			<td>{{a.age}}</td>
			<td>{{a.age}}</td>
			<td>
				<select class="confirm">
					<option value="1">승인대기</option>
					<option value="0">판매중</option>
					<option value="2">정산완료</option>
				</select>
				<button class="confirm_change">변경</button>
			</td>
        </tr>
      </tbody>
    </table> 

    <div class="list_btn_area">
      <input type="checkbox" value="" v-model='checked' id="allcheck" @change="allcheck"><label id="allcheck" for="allcheck">전체선택</label>
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
import $ from 'jquery';
export default {
  name:'UserList',
	data: () => ({
      selectItem:[],
      checked: false,
      page: 1,
      pageSize: 10,
      pageNum: 0,
    }),
  props : {
		유저정보 : Array,  
	},
	methods: {
    allcheck(){
        if( this.checked == true ){
          // console.log(1)
          this.selectItem = true
        } else if (this.checked == false ){
          // console.log(2)
          this.selectItem = []
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
.list_wrap {
	padding:20px; 
	width: 100%; min-width:550px;
	background:#fff; box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
	border-radius:5px;
}

.confirm {
	padding:4px 5px;margin-right: 4px;
	width:100px;
	box-sizing: content-box;
	border: solid 1px #dadada;
	background:url(../../public/arrow.png)no-repeat right 8px center;
}
.confirm_change {padding:6px 10px;
  color: #fff; cursor: pointer;
  background:#1976D2; border-radius: 3px;
  }
  .confirm_change:hover {
	background:#607d8b;
  }
</style>