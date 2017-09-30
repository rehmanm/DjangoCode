from rest_framework import serializers

from .models import Card, List

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = '__all__'


class ListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = List
        fields = '__all__'


