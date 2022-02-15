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
						<td class="tb_info">{{유저정보[누른것].mail}}</td>
						<td class="tb_name">회사명</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].usertype"></td>
					</tr>
					<tr>
						<td class="tb_name">대표번호</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
						<td class="tb_name">휴대폰번호</td>
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
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
						<td class="tb_info"><input type="text" :value="유저정보[누른것].telenumber"></td>
					</tr>
					<tr>
						<td class="tb_name">1일 시공 가능 건수</td>
						<td class="tb_info"><input type="text" value="63회"></td>
						<td class="tb_name">카드결제</td>
						<td class="tb_info"><input type="text" value="가능"></td>
					</tr>
					<tr>
						<td class="tb_name">세금계산서</td>
						<td class="tb_info"><input type="text" value="가능"></td>
						<td class="tb_name">현금영수증</td>
						<td class="tb_info"><input type="text" value="불가"></td>
					</tr>
					<tr>
						<td class="tb_name">입주 예정 주소</td>
						<td class="tb_info" colspan="3"><input type="text" name="addr" :value="유저정보[누른것].adrr" @click="searchPostcodes"></td>
					</tr>
					<tr>
						<td class="tb_name">회사소개</td>
						<td class="tb_info" colspan="3"><textarea :value="유저정보[누른것].adrr" class="cp_intro"></textarea></td>
					</tr>
					<tr>
						<td class="tb_info ck_area" colspan="4">
							<div class="ck_area_title">
								<p class="ck_area_name">시공 가능 지역</p>
								<input type="checkbox" value="" v-model='areaChecked' id="area_allcheck" @change="areaAllCheck"><label id="allcheck" for="area_allcheck">전체 선택/해제</label>
							</div>
							<div class="ck_area_box">
								<label for="area_seoul"><input type="checkbox" id="area_seoul" v-model='areaChecks' value="B0" name="area_chk"><span>서울</span></label>
								<label for="area_busan"><input type="checkbox" id="area_busan" v-model='areaChecks' value="B1" name="area_chk"><span>부산</span></label>
								<label for="area_daegu"><input type="checkbox" id="area_daegu" v-model='areaChecks' value="B2" name="area_chk"><span>대구</span></label>
								<label for="area_incheon"><input type="checkbox" id="area_incheon" v-model='areaChecks' value="B3" name="area_chk"><span>인천</span></label>
								<label for="area_gwangju"><input type="checkbox" id="area_gwangju" v-model='areaChecks' value="B4" name="area_chk"><span>광주</span></label>
								<label for="area_daejeon"><input type="checkbox" id="area_daejeon" v-model='areaChecks' value="B5" name="area_chk"><span>대전</span></label>
								<label for="area_ulsan"><input type="checkbox" id="area_ulsan" v-model='areaChecks' value="B6" name="area_chk"><span>울산</span></label>
								<label for="area_sejong"><input type="checkbox" id="area_sejong" v-model='areaChecks' value="B7" name="area_chk"><span>세종</span></label>
								<label for="area_gyeonggi"><input type="checkbox" id="area_gyeonggi" v-model='areaChecks' value="B8" name="area_chk"><span>경기</span></label>
								<label for="area_gangwon"><input type="checkbox" id="area_gangwon" v-model='areaChecks' value="B9" name="area_chk"><span>강원</span></label>
								<label for="area_chungbuk"><input type="checkbox" id="area_chungbuk" v-model='areaChecks' value="B10" name="area_chk"><span>충북</span></label>
								<label for="area_chungnam"><input type="checkbox" id="area_chungnam" v-model='areaChecks' value="B11" name="area_chk"><span>충남</span></label>
								<label for="area_jeonbuk"><input type="checkbox" id="area_jeonbuk" v-model='areaChecks' value="B12" name="area_chk"><span>전북</span></label>
								<label for="area_jeonnam"><input type="checkbox" id="area_jeonnam" v-model='areaChecks' value="B13" name="area_chk"><span>전남</span></label>
								<label for="area_kyongbuk"><input type="checkbox" id="area_kyongbuk" v-model='areaChecks' value="B14" name="area_chk"><span>경북</span></label>
								<label for="area_kyeongnam"><input type="checkbox" id="area_kyeongnam" v-model='areaChecks' value="B15" name="area_chk"><span>경남</span></label>
								<label for="area_jeju"><input type="checkbox" id="area_jeju" v-model='areaChecks' value="B16" name="area_chk"><span>제주</span></label>
							</div>
						</td>
					</tr>
					<tr>
						<td class="tb_info ck_categori" colspan="4">
							<div class="ck_categori_title">
								<p class="ck_categori_name">전문 분야</p>
								<input type="checkbox" value="" v-model='categoriChecked' id="categori_allcheck" @change="categoriAllCheck"><label id="allcheck" for="categori_allcheck">전체 선택/해제</label>
							</div>
							<div class="ck_categori_box">
								<label for="inst_aircon"><input type="checkbox" id="inst_aircon" v-model='categoriChecks' value="A0" name="expertise"><span>에어컨설치</span></label>
								<label for="inst_tv"><input type="checkbox" id="inst_tv" v-model='categoriChecks' value="A1" name="expertise"><span>벽걸이TV설치</span></label>
								<label for="inst_cleaning"><input type="checkbox" id="inst_cleaning" v-model='categoriChecks' value="A2" name="expertise"><span>입주청소</span></label>
								<label for="inst_julnun"><input type="checkbox" id="inst_julnun" v-model='categoriChecks' value="A3" name="expertise"><span>줄눈&탄성코트</span></label>
								<label for="inst_subdoor"><input type="checkbox" id="inst_subdoor" v-model='categoriChecks' value="A4" name="expertise"><span>중문설치</span></label>
								<label for="inst_sbs"><input type="checkbox" id="inst_sbs" v-model='categoriChecks' value="A5" name="expertise"><span>새집증후군</span></label>
								<label for="curtain"><input type="checkbox" id="curtain" v-model='categoriChecks' value="A6" name="expertise"><span>커튼&블라인드</span></label>
								<label for="insulating_films"><input type="checkbox" id="insulating_films" v-model='categoriChecks' value="A7" name="expertise"><span>가전제품</span></label>
								<label for="led_light"><input type="checkbox" id="led_light" v-model='categoriChecks' value="A8" name="expertise"><span>가구</span></label>
								<label for="inst_etc"><input type="checkbox" id="inst_etc" v-model='categoriChecks' value="A9" name="expertise"><span>기타(시공)</span></label>
								<label for="product_etc"><input type="checkbox" id="product_etc" v-model='categoriChecks' value="A10" name="expertise"><span>기타(제품)</span></label>
								<label for="subscribe_service"><input type="checkbox" id="subscribe_service" v-model='categoriChecks' value="A11" name="expertise"><span>월정액 서비스</span></label>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			
	
			<div class="btn_area">
				<button type='submit' class="submit user_btn">수정하기</button>
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
		areaChecks:[],
		categoriChecks:[],
		areaChecked: false,
		categoriChecked: false,
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
				console.log('postcode동작')
				new window.daum.Postcode({
					oncomplete: function(data){
						$('input[name="addr"]').val(data.address)
					}
				}).open()
		},
		// checkeds(event){ // 체크 확인
		// 	for(let i=0; i < this.areaChecks.length; i++){
        //     if(this.areaChecks[i] !== event.target.checked){
		// 		console.log(this.areaChecks[i])
		// 		}
		// 	}
		// },
		areaAllCheck(){
			if( this.areaChecked == true ){
			// console.log(1)
			this.areaChecks = true
			} else if (this.areaChecked == false ){
			// console.log(2)
			this.areaChecks = []
			} 
		},
		categoriAllCheck(){
			if( this.categoriChecked == true ){
			// console.log(1)
			this.categoriChecks = true
			} else if (this.categoriChecked == false ){
			// console.log(2)
			this.categoriChecks = []
			} 
		},

    },
	watch : { 
		
	},
}
</script>

<style>
.ck_area,.ck_categori {padding: 10px 15px !important;}
.ck_area .ck_area_title,.ck_categori .ck_categori_title  {
	display: flex; align-items: center;
	padding-bottom: 8px;
	}
.ck_area .ck_area_title input,.ck_categori .ck_categori_title input { display:none;}
.ck_area .ck_area_title label,.ck_categori .ck_categori_title label {
  padding:4px 15px; float: left; margin-right:5px;
  font-size: 13px; color: #fff;
  background:#1976D2; border-radius: 3px;
  cursor: pointer;
}
.ck_area .ck_area_name,.ck_categori .ck_categori_name {
	margin: 0 7px 0 0;
	font-size: 16px;
}
.ck_area .ck_area_box label {
	margin-right:15px;
}
.ck_categori .ck_categori_box label {
	margin-right:18px;
}

.user_info_details table td .cp_intro  {
	width:100%;
}

</style>