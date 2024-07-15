from django.db import models

# Create your models here.

class Book(models.Model):
  title = models.CharField(max_length=200)
  author = models.CharField(max_length=100)
  coverURL = models.CharField(max_length=200)
  firstPublishDate = models.PositiveSmallIntegerField()
  onShelf = models.BooleanField(default=False, blank=True, null=True)
      
  def __str__(self):
    return self.title