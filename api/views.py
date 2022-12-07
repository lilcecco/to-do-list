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
    try:
        data = Task.objects.all()
        serializers = TaskSerializers(data,many=True)
        return Response(serializers.data)
    except Exception as e:
        response = [
            {
                'error':e.__context__
            }
        ]
        return Response(response)

@api_view(['POST'])
def createTask(request):
    try:
        data = request.data
        task = Task.objects.create(
            title=data['title'],
            body=data['body'],
            checked=data['checked'],
            )
        serializers = TaskSerializers(instance=task, data=data)
        return Response(serializers.data)
    except Exception as e:
        response = [
            {
                'error':e.__context__
            }
        ]
        return Response(response)

@api_view(['PUT'])
def updateTask(request, pk):
    try:
        task = Task.objects.get(id=pk)
        serialzers = TaskSerializers(task,data=request.POST)
        if serialzers.is_valid():
            serialzers.save()
        return Response(serialzers.data)
    except Exception as e:
        response = [
            {
                'error':e.__context__
            }
        ]
        return Response(response)

@api_view(['GET'])
def detailTask(request, pk):
    try:
        task = Task.objects.get(id=pk)
        serializer = TaskSerializers(task,many=False)
        return Response(serializer.data)
    except Exception as e:
        response = [
            {
                'error':e.__context__
            }
        ]
        return Response(response)

@api_view(['DELETE'])
def delateTask(request,pk):
    try:
        task = Task.objects.get(id=pk)
        task.delete()
        return Response('task delated')
    except Exception as e:
        response = [
            {
                'error':e.__context__
            }
        ]
        return Response(response)
    