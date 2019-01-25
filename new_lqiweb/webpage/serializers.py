from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework import serializers
import numpy

class Pricetable1Serializer(serializers.ModelSerializer):
	f07 = serializers.CharField(source='pricetable5_f01.f07')
	f28 = serializers.CharField(source='pricetable5_f01.f28')
	f21a = serializers.FloatField(source='pricetable7_f01.f21a')
	f22a = serializers.FloatField(source='pricetable7_f01.f22a')
	class Meta:
		model = Pricetable1
		fields = ('id', 'f00', 'f07', 'f28', 'f21a', 'f22a')

class Pricecalculater(serializers.ModelSerializer):
	#avg = serializers.SerializerMethodField()
	
	#def avgprice(self, obj):
		#avgcal = obj.f21a
		#return avgcal

	class Meta:
		model = Pricetable7
		fields = '__all__'

