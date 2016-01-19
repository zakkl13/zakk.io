from django.db import models

# Create your models here.
TYPES = ( ('A', 'Action'), ('N', 'Noun') )

class ShortText(models.Model):
	text = models.CharField(max_length=50)
	type = models.CharField(max_length=1, choices=TYPES)

class WebListing(models.Model):
	url = models.URLField(max_length=100)
	link_text = models.CharField(max_length=50)
	icon = models.ImageField(upload_to='icons')
