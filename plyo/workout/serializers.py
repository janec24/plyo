from rest_framework import serializers
from .models import Exercises, Splits, Level

class ExerciseSerializer ( serializers.ModelSerializer):
    class Meta: 
        model = Exercises
        fields = ('id','name', 'description', 'focus', 'reprange', 'level', 'icon')