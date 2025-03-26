from django.urls import path, re_path

from api import views

urlpatterns = [
    path('hello/', views.hello),
    path('about/', views.about),
    re_path(r'^time/plus/(\d{1,2})/$', views.hour_ahead),
    path('json/', views.test_json),
    path('products/', views.products_list),
    re_path(r'^products/(\d{1,2})/$', views.products_by_id),
    path('categories/', views.category_list),
    re_path(r'^categories/(\d{1,2})/$', views.categories_by_id),
    re_path(r'^categories/(\d{1,2})/products$', views.products_by_category),
]
