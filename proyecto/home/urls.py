from django.conf.urls import url
from . import views

urlpatterns = [

    url(r'^/', HomeView.as_view(), name='home'),
    url(r'^perfil', PerfilView.as_view(), name='perfil'),
]