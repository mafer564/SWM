"""proyecto URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.conf.urls import url,include, patterns
>>>>>>> bf3f22f9ff375dcd015e03f97179a5aac3666eba
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from home.views import HomeView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',HomeView.as_view(),name="home"),
<<<<<<< HEAD
    url(r'^posts/',
    	include('posts.urls',namespace="posts")),
=======
    url(r'^perfil',TemplateView.as_view(template_name='home/perfil.html')),
>>>>>>> bf3f22f9ff375dcd015e03f97179a5aac3666eba
]

