from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

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