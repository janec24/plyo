# Generated by Django 2.1.5 on 2020-12-28 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout', '0002_auto_20201228_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='level',
            name='icon',
            field=models.ImageField(blank=True, null=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='splits',
            name='icon',
            field=models.ImageField(blank=True, null=True, upload_to=None),
        ),
    ]