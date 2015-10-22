from django.shortcuts import render
from django.http import HttpResponse
from .models import ShortText

# Create your views here.
def index(request):
	#Random code
	Noun = 'penguins'
	Action = 'fantasize about'
	return render(request, 'splash/index.html', {'action': Action, 'noun': Noun})
	#return HttpResponse("This is the splash page index!")
