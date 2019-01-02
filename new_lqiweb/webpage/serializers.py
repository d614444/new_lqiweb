from webpage.models import Pricetable1, Pricetable2, Pricetable3, Pricetable4, Pricetable5, Pricetable6, Pricetable7
from rest_framework import serializers



class Pricetable4Serializer(serializers.HyperlinkedModelSerializer):
    #p1 = Pricetable1Serializer(read_only=True)
    id_name = serializers.HyperlinkedRelatedField(view_name='ladntable',queryset=Pricetable4.objects.all())
    class Meta:
        model = Pricetable4
        fields = ('id', 'f02', 'f03','id_name')         