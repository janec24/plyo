from django.contrib import admin
from .models import Exercises, Splits, Level

# Register your models here.
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'focus', 'reprange', 'duration')

admin.site.register(Exercises, WorkoutAdmin)
admin.site.register(Splits)
admin.site.register(Level)