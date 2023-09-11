from django.db import models

# Create your models here.
class Locations(models.Model):
    id = models.CharField(primary_key=True, max_length=150)
    name = models.CharField(max_length=150)
    desc = models.TextField()
    image = models.ImageField(upload_to='static/images/')
    lat = models.FloatField()
    long = models.FloatField()

    def __str__(self) -> str:
        return self.name


