from rest_framework.serializers import ModelSerializer
from .models import Task
class TaskSerializers(ModelSerializer):
    class Meta:
        model = Task
        fields = ['id','title','body','created','checked']