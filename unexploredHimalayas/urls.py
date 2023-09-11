from django.contrib import admin
from django.urls import path,include
from unexploredHimalayas import views

urlpatterns = [
    path("", views.home,name='Unexplored Himalayas'),
    path("visit/<slug:place>",views.visit)
]

