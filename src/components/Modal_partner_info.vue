<template>
	<div class="black-bg" v-if="모달창상태 == true">
      <div class="white-bg">
        <article class="details_top_menu">
          <h2>파트너 상세보기</h2>
        </article>

		<article class="user_info_details">
			<form>
			<table>
				<tbody>
					<tr>
						<td class="tb_name">아이디</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].mail"></td>
						<td class="tb_name">회사명</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].usertype"></td>
					</tr>
					<tr>
						<td class="tb_name">대표번호</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
						<td class="tb_name">휴대폰번호</td>
						<td class="tb_info">{{유저정보[누른것].telenumber}}</td>
					</tr>
					<tr>
						<td class="tb_name">이름</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].name"></td>
						<td class="tb_name">사업자등록번호</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
					</tr>
					<tr>
						<td class="tb_name">등록일</td>
						<td class="tb_info">{{유저정보[누른것].point}}</td>
						<td class="tb_name">최근방문일</td>
						<td class="tb_info">{{유저정보[누른것].lastaccess}}</td>
					</tr>
					<tr>
						<td class="tb_name">상품등록</td>
						<td class="tb_info">{{유저정보[누른것].telenumber}}</td>
						<td class="tb_name">직원 수</td>
						<td class="tb_info">{{유저정보[누른것].telenumber}}</td>
					</tr>
					<tr>
						<td class="tb_name">1일 시공 가능 건수</td>
						<td class="tb_info">63회</td>
						<td class="tb_name">카드결제</td>
						<td class="tb_info">가능</td>
					</tr>
					<tr>
						<td class="tb_name">세금계산서</td>
						<td class="tb_info">가능</td>
						<td class="tb_name">현금영수증</td>
						<td class="tb_info">불가</td>
					</tr>
					<tr>
						<td class="tb_name">입주 예정 주소</td>
						<td class="tb_info" colspan="3"><input type="text" name="addr" :value="유저정보[누른것].adrr" @click="searchPostcodes"></td>
					</tr>
					<tr>
						<td class="tb_name">회사소개</td>
						<td class="tb_info" colspan="3">대충 회사 소개하는 문구</td>
					</tr>
					<tr>
						<td class="tb_name">회사소개</td>
						<td class="tb_info" colspan="3">대충 회사 소개하는 문구</td>
					</tr>
				</tbody>
			</table>

			
	
			<div class="btn_area">
				<button type='submit' class="submit user_btn ">수정하기</button>
				<button class="closed user_btn" @click="closed">닫기</button>
			</div>
			</form>
		</article>  


        
      </div>
  </div>
</template>

<script>

import $ from 'jquery';
export default {
	name:'Modal',
	data: () => ({

    }),
  props : {
		모달창상태 : Boolean,
		누른것 : Number,
		유저정보 : Array,
	},
	methods: {
		closed(){ 
			this.$emit('closeModal')
		},
		searchPostcodes(){
				console.log('작동')
				new window.daum.Postcode({
					oncomplete: function(data){
						$('input[name="addr"]').val(data.address)
					}
				}).open()
		}

    },
	watch : { 
		
	},
}
</script>

<style>

</style>