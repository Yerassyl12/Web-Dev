from django.urls import path, re_path

from api import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/<int:product_id>/', views.products_by_id),
    path('categories/', views.category_list),
    re_path(r'^categories/(\d{1,2})/$', views.categories_by_id),
    re_path(r'^categories/(\d{1,2})/products$', views.products_by_category),
]
