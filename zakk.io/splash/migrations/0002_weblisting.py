# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('splash', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebListing',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.URLField(max_length=100)),
                ('link_text', models.CharField(max_length=50)),
                ('icon', models.ImageField(upload_to=b'icons')),
            ],
        ),
    ]
