# Generated by Django 2.1.5 on 2020-12-28 20:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercises',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=120)),
                ('reprange', models.SmallIntegerField()),
                ('duration', models.DurationField()),
            ],
        ),
        migrations.CreateModel(
            name='Splits',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('icon', models.ImageField(upload_to=None)),
            ],
        ),
        migrations.AddField(
            model_name='exercises',
            name='splits',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workout.Splits'),
        ),
    ]
