# Generated by Django 3.2.3 on 2021-07-12 20:26

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_auto_20210711_1814'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=versatileimagefield.fields.VersatileImageField(blank=True, help_text='Upload a product image', null=True, storage='django.core.files.storage.FileSystemStorage', upload_to='images/', verbose_name='Image'),
        ),
    ]
