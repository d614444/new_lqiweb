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
month = [
         '01', '02', '03', 
         '04', '05', '06', 
         '07', '08', '09',
         '10', '11', '12'
         ]
class testcustomapi(APIView):

    @api_view(['GET', 'POST'])
    def get(request, format=None):

        if request.method == 'POST':   
            country = request.POST.get('country')
            country_area = request.POST.get('country_area')
            year_1 = request.POST.get('year_1')
            year_2 = request.POST.get('year_2')
            global cotent
            if (
                country_area == '全部' and 
                year_1 == '全部'
                ):
                for i in range(12):
                    regex_value = (r'^.{3,4}'+month[i])
                    #print (month[i])
                    average= Pricetable1.objects.filter(
                        f32=country ,
                        ).filter(
                        Q(f11=2)|Q(f11=3)|Q(f11=7)|Q(f11=8)|Q(f11=9)|Q(f11=12)
                        ).filter(pricetable5_f01__f07__regex = regex_value
                        ).aggregate(Avg('pricetable7_f01__f21a')).get('pricetable7_f01__f21a__avg')
                    cotent[i+1] = average
                return Response(cotent)
            else:
                print ("next step!")
        return Response(cotent, status=status.HTTP_200_OK) 


def homepage(request):

    return render(request, 'page_home.html')

