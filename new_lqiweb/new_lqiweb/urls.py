"""new_lqiweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from webpage.views import Get_landdata_all, Get_landdata_A,  Get_landdata_B, Get_landdata_C, Get_landdata_D, homepage
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'landpoint_all', Get_landdata_all, 'alldata')
router.register(r'landpoint_A', Get_landdata_A, 'A')
router.register(r'landpoint_B', Get_landdata_B, 'B')
router.register(r'landpoint_C', Get_landdata_C, 'C')
router.register(r'landpoint_D', Get_landdata_D, 'D')

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
    path('home/', homepage)
]
