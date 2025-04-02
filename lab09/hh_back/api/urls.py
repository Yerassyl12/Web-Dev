from django.urls import path, re_path

from api import views

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:company_id>/', views.companies_by_id),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:vacancy_id>/', views.vacancies_by_id),
    path('companies/<int:company_id>/vacancies', views.vacancies_by_company_id),
    # re_path(r'^categories/(\d{1,2})/$', views.categories_by_id),
    # re_path(r'^categories/(\d{1,2})/products$', views.products_by_category),
]