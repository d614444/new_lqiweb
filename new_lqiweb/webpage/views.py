from django.shortcuts import render
from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework.views import APIView
from webpage.serializers import Pricetable1Serializer, Pricecalculater
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import render
from django.db.models import Avg, Sum
# Create your views here.

aprm_id = {'臺北市':'A', '臺中市':'B', '基隆市':'C', 
           '臺南市':'D', '高雄市':'E', '新北市':'F', 
           '宜蘭縣':'G', '桃園市':'H', '新竹縣':'J', 
           '新竹市':'O'}



class Get_landdata_all(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.all()
    serializer_class = Pricetable1Serializer

class Get_landdata_A(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.filter(f32='A')
    serializer_class = Pricetable1Serializer

class Get_landdata_B(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.filter(f32='B')
    serializer_class = Pricetable1Serializer

class Get_landdata_C(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.filter(f32='C')
    serializer_class = Pricetable1Serializer

class Get_landdata_D(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.filter(f32='D')
    serializer_class = Pricetable1Serializer

class Get_landdata_avgtest(viewsets.ModelViewSet):
    a = Pricetable7.objects.filter(id_id__f32='D').aggregate(Avg('f21a')).get('f21a__avg')
    queryset = Pricetable7.objects.filter(id_id__f32='D')
    serializer_class = Pricecalculater


 


def homepage(request):
    return render(request, 'page_home.html')    