from django.shortcuts import render
from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework.views import APIView
from webpage.serializers import Pricetable1Serializer
from rest_framework.response import Response
from rest_framework import viewsets
# Create your views here.

class Get_landdata(viewsets.ModelViewSet):
    queryset = Pricetable1.objects.all()
    serializer_class = Pricetable1Serializer