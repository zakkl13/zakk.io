from django.db import models

# Create your models here.
TYPES = ( ('A', 'Action'), ('N', 'Noun') )

class ShortText(models.Model):
	text = models.CharField(max_length=50)
	type = models.CharField(max_length=1, choices=TYPES)
