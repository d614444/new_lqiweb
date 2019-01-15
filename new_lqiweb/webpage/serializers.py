from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework import serializers

class Pricetable1Serializer(serializers.ModelSerializer):
	f07 = serializers.CharField(source='pricetable5_f01.f07')
	f28 = serializers.CharField(source='pricetable5_f01.f28')
	f21a = serializers.FloatField(source='pricetable7_f01.f21a')
	f22a = serializers.FloatField(source='pricetable7_f01.f22a')
	class Meta:
		model = Pricetable1
		fields = ('id', 'f00', 'f07', 'f28', 'f21a', 'f22a')
