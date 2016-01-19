from django.shortcuts import render
from django.http import HttpResponse
from .models import WebListing

# Create your views here.
def index(request):
	#Random code
	Noun = 'penguins'
	Action = 'fantasize about'
	AllLinks = WebListing.objects.all()
	return render(request, 'splash/index.html', {'action': Action, 'noun': Noun, 'linklist': AllLinks})
	#return HttpResponse("This is the splash page index!")
