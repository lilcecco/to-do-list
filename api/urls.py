from django.urls import path
from . import views

urlpatterns = [
    path('', views.getTest),
    path('data/user', views.getJson),
    path('task',views.getTask),
]
