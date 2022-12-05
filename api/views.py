from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializers
from django.http import JsonResponse

# Create your views here.
@api_view(['GET'])
def getTest(request):   
    return JsonResponse('test')

@api_view(['POST'])
def getJson(request):
    data = request.data
    print(data['name'])
    es = data['name'] + "!"
    return Response(es)

@api_view(['GET'])
def getTask(request):   
    data = Task.objects.all()
    serializers = TaskSerializers(data,many=True)
    return Response(serializers.data)