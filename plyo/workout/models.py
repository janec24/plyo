from django.db import models

# Create your models here.
class Exercises(models.Model):
    name = models.CharField(max_length=120)
    description = models.CharField(max_length=120, blank=True, null=True)
    focus = models.ForeignKey('Splits', on_delete = models.CASCADE)
    reprange = models.SmallIntegerField(blank=True, null=True)
    duration = models.DurationField(blank=True, null=True)
    level = models.ForeignKey('Level', on_delete = models.CASCADE, blank=True, null=True)
    icon = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name

class Splits(models.Model):
    name = models.CharField(max_length=120)
    icon = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)
    
    def __str__(self):
        return self.name

class Level(models.Model):
    level = models.CharField(max_length=120)
    icon = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)

    def __str__(self):
        return self.level