from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import Locations

# Create your views here.
def home(request):
    content = {
        'places': Locations.objects.all()
    }
    return render(request, 'index.html', content)

def visit(request, place):
    content = {
        'location': Locations.objects.filter(id=str(place))[0]
    }
    return render(request, 'location.html',content )

