<template>
	<section class="userserch_wrap">
		<article class="top_menu">
			<h2>회원검색</h2>
			<div class="search_area">
				<v-autocomplete chips clearable deletable-chips dense :items="items" placeholder="검색조건을 입력하세요."></v-autocomplete>
			</div>
			<!-- <ul class="serch_area">
				<li><v-autocomplete dense filled rounded></v-autocomplete></li>
				<li><v-select :items="items" label="카테고리 선택" dense outlined></v-select></li>
			</ul> -->
		</article>

		<article class="user_chk_area">
			<form>
			<table>
					<tr>
						<th style="padding-top: 0px;">회원구분</th>
						<td style="vertical-align:top;">
							<label for="ex1"><input type="checkbox" id="ex1" v-model='userAllChecked' value="" @click="allCheck"><span>전체선택</span></label>
							<label for="ex2"><input type="checkbox" id="ex2" v-model='checkedUser' value="1" @change="clickUser"><span>스타트 멤버</span></label>
							<label for="ex3"><input type="checkbox" id="ex3" v-model='checkedUser' value="2" @change="clickUser"><span>입주 멤버</span></label>
						</td>
					</tr>
					<tr>
						<th>성별</th>
						<td>
							<label for="ex4"><input type="checkbox" id="ex4" v-model='checkedGender' value="0" name="gender" @change="clickGender"><span>남자</span></label>
							<label for="ex5"><input type="checkbox" id="ex5" v-model='checkedGender' value="1" name="gender" @change="clickGender"><span>여자</span></label>
							<label for="ex6"><input type="checkbox" id="ex6" v-model='checkedGender' value="2" name="gender" @change="clickGender"><span>선택없음</span></label>
						</td>
					</tr>
					<tr>
						<th>생년월일</th>
						<td>
							<input pattern="[0-9]+" type="text" class="ageform" id="year" maxlength="4" placeholder="년(4자)" >
							<select id="month" class="ageform">
                                    <option>선택하세요</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>                                    
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                            </select>
							<input pattern="[0-9]+" type="text" class="ageform" id="day" maxlength="2" placeholder="일">
						</td>
					</tr>
			</table>
			<div class="btn_area">
				<button type='submit' class="submit user_btn ">검색</button>
				<button class="reset user_btn" @click="reset">초기화</button>
			</div>
			</form>
		</article>

		
	</section>
</template>

<script>
import $ from 'jquery';
export default {
	name:'UserSerch',
	data: () => ({
      items: ['아이디검색', '전화번호검색', '이름검색', '닉네임검색'],
		checkedUser:[],
		checkedGender:[],
		userAllChecked:false,
    }),
	methods: {
		clickUser(event) {
			console.log(1)
          for(let i=0; i<this.checkedUser.length;i++){
            if(this.checkedUser[i] !== event.target.value){
            console.log(this.checkedUser[i])
            this.checkedUser.splice(i,1);
            }
          }
		},
		allCheck(){
			console.log(1)
            if(!this.userAllChecked){
                for(let i=1; i<3; i++){
                    this.checkedUser.push(i)
                }
               this.userAllChecked = true;
            }else{
                 this.checkedUser=[]
                this.userAllChecked  = false;
            }
        },
		clickGender(event) {
			console.log(1)
          for(let i=0; i<this.checkedGender.length;i++){
            if(this.checkedGender[i] !== event.target.value){
            console.log(this.checkedGender[i])
            this.checkedGender.splice(i,1);
            }
          }
		},
		reset(){
			$('form').each(function(){
				this.reset();
			})
		},
	},
	watch : { 
		numbers(a){
			if (isNaN(a) == true){ // 텍스트 금지, isNaN() 안에 숫자를 true로 한다
				alert('숫자만입력해주세요');
			}
		}
	},
}
</script>

<style>
.userserch_wrap {
	padding:20px; margin-bottom: 20px;
	width: 100%; min-width:550px;
	background:#fff; box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
	border-radius:5px;
}
.top_menu {
	padding-bottom:10px; 
	box-sizing: border-box;
	border-bottom:1px solid #e5e5e5;
}
.top_menu h2 {
	font-size:20px;line-height:35px;
	display:inline;
}

/* 검색창 */
.search_area { float:right;}
.search_name {
	float: left; margin-right:10px;
	font-size:16px; line-height:35px; font-weight: bold;
	}
.search_area li {float:left;}
.search_area li:first-child {margin-right:10px;}
.top_menu .theme--light.v-input {width:300px !important;}
.v-text-field {margin-top: -4px;}
.v-chip.v-size--default {
	height:24px !important;
	line-height:21px !important;
}
.v-select__selections { min-height: 35px !important;}


/* 회원 체크박스 */
.userserch_wrap .user_chk_area {margin-top: 15px;}
.userserch_wrap table {
	margin-bottom: 20px;
	width:100%; text-align: left;
}
.userserch_wrap table tr {
	padding-bottom: 5px;
	border-bottom: 1px solid #f5f5f5;
	}
.userserch_wrap table th {
	padding:14px 0px;
	font-size:15px; width:100px;
}

.v-input--selection-controls.v-input {float: left;}/*
.v-input--selection-controls { margin-top: 0px !important;}
.v-input--selection-controls {
	margin: 0px 20px 0 0;
	transform: translateY(-2px);
} */

.user_chk_area table td label {margin-right: 20px;}
.user_chk_area table td label > span {
	font-size: 14px; vertical-align:top;
}
.user_chk_area table td input[type="checkbox"] {
	margin-right: 4px; transform: translateY(1px);
	width: 17px; height: 17px;
}
.user_chk_area table .ageform {
	padding:5px;margin-right: 4px;
	width:120px; height:20px;
	box-sizing: content-box;
	border: solid 1px #dadada;
}
.user_chk_area .btn_area {
	display: flex; justify-content: center;
}
.user_chk_area .btn_area button {
	width: 250px; height: 36px; 
    padding: 0 16px; border-radius: 3px;
}
.user_chk_area .btn_area .user_btn {
	margin-right: 4px;
	font-size: 15px; color: #fff; font-weight: 600; line-height: 36px;
	background: #1976D2;
}
.user_chk_area .btn_area .reset {
	margin: 0;
	background: #607d8b;
}
</style>