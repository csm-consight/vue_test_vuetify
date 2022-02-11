<template>
	<div class="black-bg" v-if="모달창상태 == true">
      <div class="white-bg">
        <article class="details_top_menu">
          <h2>회원정보 상세보기</h2>
        </article>

		<article class="user_info_details">
			<form>
			<table>
				<tbody>
					<tr>
						<td class="tb_name">아이디</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].mail"></td>
						<td class="tb_name">닉네임</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].nixname"></td>
					</tr>
					<tr>
						<td class="tb_name">이름</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].name"></td>
						<td class="tb_name">성별</td>
						<td class="tb_info">{{유저정보[누른것].sex}}</td>
					</tr>
					<tr>
						<td class="tb_name">회원 구분</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].usertype"></td>
						<td class="tb_name">전화번호</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
					</tr>
					<tr>
						<td class="tb_name">보유 포인트</td>
						<td class="tb_info">{{유저정보[누른것].point}}</td>
						<td class="tb_name">최근방문일</td>
						<td class="tb_info">{{유저정보[누른것].lastaccess}}</td>
					</tr>
					<tr>
						<td class="tb_name">가입일</td>
						<td class="tb_info">{{유저정보[누른것].telenumber}}</td>
						<td class="tb_name">추천인 아이디</td>
						<td class="tb_info">{{유저정보[누른것].telenumber}}</td>
					</tr>
					<tr>
						<td class="tb_name">로그인 횟수</td>
						<td class="tb_info">63회</td>
						<td class="tb_name">입주 예정 년도</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
					</tr>
					<tr>
						<td class="tb_name">입주 예정 주소</td>
						<td class="tb_info"><input type="text" name="addr" :value="유저정보[누른것].adrr" @click="searchPostcode"></td>
						<td class="tb_name">상세주소</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].adrr"></td>
						<!-- <td class="tb_info" colspan="3">인천광역시 검단 신도시 어쭈구 저쭈구 자이 아파트 104동 206호</td> -->
					</tr>
				</tbody>
			</table>

			<div class="details_top_menu">
				<h2>추가정보</h2>
			</div>
			<table>
				<tbody>
					<tr>
						<td class="tb_name">결혼정보</td>
						<td class="tb_info">
							<label><input type="radio" name="married" value="기혼">기혼</label>
							<label><input type="radio" name="married" value="미혼">미혼</label>
							<!-- <label for="ex7"><input type="checkbox" id="ex7" v-model='ckMrIf' value="기혼" @change="clickMarry"><span>기혼</span></label>
							<label for="ex8"><input type="checkbox" id="ex8" v-model='ckMrIf' value="미혼" @change="clickMarry"><span>미혼</span></label> -->
						</td>
						<td class="tb_name">자녀 수</td>
						<td><input type="text" readonly :value="유저정보[누른것].nixname"></td>
					</tr>
					<tr>
						<td class="tb_name">인테리어 선호 타입</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].nixname"></td>
						<td class="tb_name">MBTI 성향</td>
						<td><input type="text" :value="유저정보[누른것].nixname"></td>
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
		searchPostcode(){
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
.black-bg {
  display: flex; justify-content: center; align-items: center;
  width: 100%; height: 100%;
  background:rgba(0,0,0,0.3);
  position:fixed; left: 0px; top:0px;
  z-index:1000;
  
}

.white-bg {
  padding:20px;
  width:1000px; 
  border-radius: 5px; background: #fff;
}

.details_top_menu h2 {
	font-size:20px;line-height:35px;
	display:inline;
}

.user_info_details {margin-top: 0px;}
.user_info_details table {
	margin-bottom: 20px;
	width:100%; 
	border: 1px solid #dee2e6;
}

.user_info_details table td {
	padding:5px 5px 5px 8px;
	border-bottom: 1px solid #dee2e6;
}

.user_info_details table .tb_name {
	padding:8px 0; 
	min-width: 150px; text-align: center;
	font-size:14px; 
	background:#f4f4f4;
}
.user_info_details table .t_info {
	padding:2px;
}

.user_info_details table input[type="text"] {
	padding: 2px 4px;
	width:200px; 
	box-sizing: content-box;
	border: solid 1px #dadada;
}

.user_info_details table td label {margin-right: 20px;}
.user_info_details table td label > span {
	font-size: 14px; vertical-align:top;
}
.user_info_details table td input[type="checkbox"] {
	margin-right: 4px; transform: translateY(1px);
	width: 17px; height: 17px;
}
.user_info_details table td input[type="radio"] {
	margin-right: 4px;
	transform: translateY(-1px);
    vertical-align: bottom;
	width: 17px; height: 17px;
	
}


.user_info_details .btn_area {
	display: flex; justify-content: center;
}
.btn_area button {
	width: 250px; height: 36px; 
    padding: 0 16px; border-radius: 3px;
}
.btn_area .user_btn {
	margin-right: 4px;
	font-size: 15px; color: #fff; font-weight: 600; line-height: 36px;
	background: #1976D2;
}
.btn_area .closed {
	margin: 0;
	background: #607d8b;
}
</style>