from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework import serializers

class Pricetable1Serializer(serializers.ModelSerializer):
	f22c = serializers.FloatField(source='pricetable7_id.f22c')
	f04 = serializers.CharField(source='pricetable4_id.f04')
	f01 = serializers.CharField(source='pricetable4_id.f01.pricetable4_f01')

	class Meta:
		model = Pricetable1
		fields = ('id', 'f00', 'f22c','f04','f01')
