$(function(){

	var country = ['臺北市', '新北市', '臺中市', 
				   '基隆市', '臺南市', '高雄市', 
				   '宜蘭縣', '桃園市', '新竹縣', 
				   '新竹市'];
	var year = ['100','101','102', 
				'103','104','105','106',
				'107'];
	var areas = new Array();
	areas[0] = ['全部','松山區','大安區',
	            '大同區','中正區','中山區',
	            '萬華區','信義區','士林區',
	            '北投區','內湖區','南港區',
	            '文山區'];
	areas[1] = ['全部', '萬里區', '金山區',
	            '板橋區', '汐止區', '深坑區',
	            '石碇區', '瑞芳區', '平溪區',
	            '雙溪區', '貢寮區', '新店區',
	            '坪林區', '烏來區', '永和區',
	            '中和區', '土城區', '三峽區',
	            '樹林區', '鶯歌區', '三重區',
				'新莊區', '泰山區', '林口區', 
				'蘆洲區', '五股區', '八里區', 
				'淡水區', '三芝區', '石門區' ]
	areas[2] = ['全部', '中區', '東區', 
	            '南區', '西區', '北區', 
	            '北屯區', '西屯區', '南屯區', 
	            '太平區', '大里區', '霧峰區', 
	            '烏日區', '豐原區', '后里區',
	            '石岡區', '東勢區', '和平區', 
	            '新社區', '潭子區', '大雅區',
	            '神岡區', '大肚區', '沙鹿區', 
	            '龍井區', '梧棲區', '清水區',
		        '大甲區', '外埔區', '大安區']
	areas[3] = ['全部', '七堵區', '安樂區', 
	            '中山區', '暖暖區', '仁愛區',
	            '信義區', '中正區']
	areas[4] = ['全部', '新營區', '鹽水區',
	            '白河區', '柳營區', '後壁區',
	            '東山區', '麻豆區', '下營區',
	            '六甲區', '官田區', '大內區',
	            '佳里區', '學甲區', '西港區',
	            '七股區', '將軍區', '北門區', 
	            '新化區', '善化區', '新市區',
	            '安定區', '山上區', '玉井區', 
	            '楠西區', '南化區', '左鎮區', 
	            '仁德區', '歸仁區', '關廟區',
	            '龍崎區', '永康區', '東區',
	            '南區', '北區', '安南區', 
	            '安平區', '中西區']
	areas[5] = ['全部', '鹽埕區', '鼓山區', 
	            '左營區', '楠梓區', '三民區', 
	            '新興區', '前金區', '苓雅區', 
	            '前鎮區', '旗津區', '小港區', 
	            '鳳山區', '林園區', '大寮區', 
	            '大樹區', '大社區', '仁武區', 
	            '鳥松區', '岡山區', '橋頭區', 
	            '燕巢區', '田寮區', '阿蓮區', 
	            '路竹區', '湖內區', '茄萣區', 
	            '永安區', '彌陀區', '梓官區', 
	            '旗山區', '美濃區', '六龜區',
	            '甲仙區', '杉林區', '內門區',
	            '茂林區', '桃源區', '那瑪夏區']
	areas[6] = ['全部', '宜蘭市', '羅東鎮', 
	            '蘇澳鎮','頭城鎮', '礁溪鄉',
	            '壯圍鄉', '員山鄉', '冬山鄉',
	            '五結鄉', '三星鄉', '大同鄉',
	            '南澳鄉']
	areas[7] = ['全部', '中壢區', '平鎮區',
	            '楊梅區', '新屋區', '桃園區',
	            '觀音區', '龜山區', '八德區', 
	            '大溪區', '復興區', '大園區',
	            '蘆竹區']
	areas[8] = ['全部','竹北市','關西鎮',
	            '新埔鎮', '竹東鎮','湖口鄉',
	            '橫山鄉', '新豐鄉','芎林鄉',
	            '寶山鄉', '北埔鄉','峨眉鄉',
	            '尖石鄉','五峰鄉']
	areas[9] = ['全部','東區','北區','香山區']

	for (var i=0; i<country.length; i++){

		$('#country-list-people')
		.append($("<option></option>")
		    .attr("value",country[i])
		    .text(country[i]))
		}
	for (var i=0; i<year.length; i++){

		$('#people-time_1')
		.append($("<option></option>")
		    .attr('value', year[i])
		    .text(year[i]))
		}

	$('#country-list-people').change(function() {
		index = this.selectedIndex;
		$('#area-list-people').empty();
		for (var i = 0; i<areas[index].length; i++){
			$('#area-list-people')
			.append($('<option></option>')
				.attr('value',areas[index][i])
				.text(areas[index][i]));
			}
		});
		$('#country-list-people').change();

		$('#people-time_1').change(function(){
			$('#people-time_2').empty();
			if ($('#people-time_1').val()== '全部'){
				$('#people-time_2')
				.append($('<option></option>')
					.text('--'));
		}else{
			for (var i = 0; i<year.length; i++){
				if ($('#people-time_1').val() == year[i]){
					var year_value = $('#people-time_1').val()
					var year_locate = year.indexOf(year_value)
					$('#people-time_2')
					.append($('<option></option>')
						.text('--'));

					for (var g = year_locate ; g<year.length; g++){
						var count_n =g+1;
						$('#people-time_2')
						.append($('<option></option>')
							.attr('value',year[count_n])
							.text(year[count_n]));
						$('#people-time_2 > option').filter(function(){
						 	return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
					}).remove()
					}}
		}}});
		$('#people-time_1').change();
	});
