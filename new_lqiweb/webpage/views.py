from django.shortcuts import render
from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework.views import APIView
from webpage.serializers import Pricetable1Serializer
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import render
# Create your views here.

aprm_id = {'臺北市':'A', '臺中市':'B', '基隆市':'C', 
           '臺南市':'D', '高雄市':'E', '新北市':'F', 
           '宜蘭縣':'G', '桃園市':'H', '新竹縣':'J', 
           '新竹市':'O'}




class Get_landdata(viewsets.ModelViewSet):

    queryset = Pricetable1.objects.filter(f32=aprm_id[country_ID])
    serializer_class = Pricetable1Serializer
        

    def homepage(request):
        if request.method == 'POST':
        	country_ID = ''
            country_ID = (request.POST['country-list'])
        return render(request, 'page_home.html')