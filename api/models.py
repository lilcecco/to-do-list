from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length = 30)
    body = models.TextField(null=True,blank= True)
    created = models.DateTimeField(auto_now=True)
    checked = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    