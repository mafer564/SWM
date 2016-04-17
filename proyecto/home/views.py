from django.shortcuts import render
from django.views.generic import TemplateView

class HomeView(TemplateView):
	template_name="home/home.html"
class PerfilView(TemplateView):
	template_name="home/perfil.html"

# Create your views here.
