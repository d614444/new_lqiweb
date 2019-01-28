from django.shortcuts import render
from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework.views import APIView
from webpage.serializers import Pricetable1Serializer, Pricecalculater
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import HttpResponse
from django.db.models import Avg, Sum, Q
from rest_framework.decorators import api_view
from rest_framework import authentication, permissions
from rest_framework import status

# Create your views here.

#filter(pricetable5_f01__f07__regex = r'^102'

cotent ={}
price_list = []
price_month = []
Area_dic = {
            'A' : ['松山區', '大安區', '大同區', '中正區', '中山區', '萬華區',
                    '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
            'B' : ['中區', '東區', '南區', '西區', '北區', 
                    '北屯區', '西屯區', '南屯區', '太平區', '大里區', 
                    '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', 
                    '東勢區', '和平區', '新社區', '潭子區', '大雅區',
                    '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', 
                    '清水區', '大甲區', '外埔區', '大安區'],
            'C' : ['七堵區', '安樂區', '中山區', '暖暖區','仁愛區','信義區',
                    '中正區'],
            'D' : ['新營區', '鹽水區', '白河區', '柳營區', '後壁區', '東山區',
                    '麻豆區', '下營區', '六甲區', '官田區', '大內區', '佳里區',
                    '學甲區', '西港區', '七股區', '將軍區', '北門區', '新化區',
                    '善化區', '新市區', '安定區', '山上區', '玉井區', '楠西區', 
                    '南化區', '左鎮區', '仁德區', '歸仁區', '關廟區', '龍崎區', 
                    '永康區', '東區', '南區', '北區', '安南區', '安平區', 
                    '中西區'],
            'E' : ['鹽埕區', '鼓山區', '左營區', '楠梓區', '三民區', '新興區', 
                    '前金區', '苓雅區', '前鎮區', '旗津區', '小港區', '鳳山區', 
                    '林園區', '大寮區', '大樹區', '大社區', '仁武區', '鳥松區',
                    '岡山區', '橋頭區', '燕巢區', '田寮區', '阿蓮區', '路竹區', 
                    '湖內區', '茄萣區', '永安區', '彌陀區', '梓官區', '旗山區', 
                    '美濃區', '六龜區', '甲仙區', '杉林區', '內門區', '茂林區',
                    '桃源區', '那瑪夏區'],
            'F' : ['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區',
                    '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區',
                    '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區',
                    '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區',
                    '五股區', '八里區', '淡水區', '三芝區', '石門區' ],
            'G' : ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉',
                    '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
            'H' : ['中壢區', '平鎮區', '楊梅區', '新屋區', '桃園區', '觀音區',
                    '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'],
            'I' : ['竹北市', '關西鎮', '新埔鎮', '竹東鎮', '湖口鄉', '橫山鄉',
                    '新豐鄉', '芎林鄉', '寶山鄉', '北埔鄉', '峨眉鄉', '尖石鄉',
                    '五峰鄉'],
            'J' : ['東區','北區','香山區']

            }
month = [
         '01', '02', '03', 
         '04', '05', '06', 
         '07', '08', '09',
         '10', '11', '12'
         ]
class testcustomapi(APIView):
 
    @api_view(['GET', 'POST'])
    def Get_Ajax_Data(request, format=None):
        if request.method == 'POST':   
            country = request.POST.get('country')
            country_area = request.POST.get('country_area')
            year_1 = request.POST.get('year_1')
            year_2 = request.POST.get('year_2')
            global cotent
            global price_list
            cotent ={}
            if (
                country_area == '全部' and 
                year_1 == '全部'
                ):
                #for country_area_id in Area_dic[country]:
                    average_list = Pricetable1.objects.filter(
                            f32=country
                            ).filter(
                            Q(f11=2)|Q(f11=3)|Q(f11=7)|Q(f11=8)|Q(f11=9)|Q(f11=12)
                            ).filter(
                            pricetable5_f01__f28='N'
                            ).values_list('f00','pricetable7_f01__f21a', 'pricetable5_f01__f07')
                    print (len(average_list))
                    for i in range(12):            
                        for country_area_id in Area_dic[country]:
                            print (country_area_id)
                            for fix_data in average_list:
                                if country_area_id == fix_data[0]:
                                #print (fix_data[0])
                                    if fix_data[2][3:5] == month[i]:
                                        price_month = []
                                        #global price_month 
                                        price_month.append(fix_data[2])

                        price_list.append(price_month)   
                        #price_list.append(price_month[1])
                                    #regex_value = (r'^.{3,4}'+month[i])
                                    #print (fix_data[2][3:5])
                                    #print (month[i])
                                    
                                       # price_list.append(fix_data[2])
                                        #print (fix_data[2])
                                        #price_list = []        
                    #print (average_list)        
                        #price_list.append(round(average,2))
                    print (price_list[0])    
                    #cotent[country_area_id] = price_list
                    #price_list = []
            return Response(cotent)
 
        return Response(cotent, status=status.HTTP_200_OK) 

def homepage(request):

    return render(request, 'page_home.html')

