from django.urls import path
from . import views

urlpatterns = [
    path('', views.getTest),
    path('data/user', views.getJson),
    
    path('task',views.getTask),
    path('task/create',views.createTask),
    path('task/<int:pk>',views.detailTask),
    path('task/<int:pk>/delete',views.delateTask),
    path('task/<int:pk>/update',views.updateTask),
]
