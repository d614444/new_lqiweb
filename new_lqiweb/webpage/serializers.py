from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework import serializers

class Pricetable1Serializer(serializers.ModelSerializer):
	f22c = serializers.FloatField(source='pricetable7_f01.f22c')
	f01 = serializers.CharField(source='f11.build_type')
	

	class Meta:
		model = Pricetable1
		fields = ('id', 'f22c', 'f01')
