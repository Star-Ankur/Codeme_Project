# Generated by Django 4.0.5 on 2023-09-10 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unexploredHimalayas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locations',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]