from django.shortcuts import render
from django.http import HttpResponse 
from rest_framework import viewsets
from .serializers import ExerciseSerializer
from .models import Exercises, Splits, Level
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# Create your views here.
def index(request):
    return render(request, 'workout/index.html')

def display(request):
    return HttpResponse("Workout on this page")

class ExerciseView (viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset = Exercises.objects.all()

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()