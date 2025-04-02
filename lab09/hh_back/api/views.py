import json
from django.shortcuts import render
from datetime import datetime,timedelta
from django.http import HttpResponse,HttpRequest,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company,Vacancy

# Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        products_json = [p.to_json() for p in companies]
        return JsonResponse(products_json, safe=False)
    
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            product = Company.objects.create(
                name = data['name'],
                description = data['description'],
                city = data['city'],
                address = data['address'],
            )
        except Exception as e:
            return JsonResponse({'errror': str(e)})
        
        return JsonResponse(product.to_json(), status=201)

@csrf_exempt
def companies_by_id(request, company_id=None):
    try: 
        company = Company.objects.get(id=company_id)  
    except Company.DoesNotExist as e:
        return JsonResponse({'errror': str(e)},status=404)
    
    if request.method == "GET":
        return JsonResponse(company.to_json(), safe=False)  
    
    elif request.method == "PUT":
        new_data = json.loads(request.body)
        company.name = new_data['name']
        company.description = new_data['description']
        company.city = new_data['city']
        company.address = new_data['address']
        company.save()
        
        return JsonResponse(company.to_json()) 
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'message': 'Company deleted'})

@csrf_exempt
def vacancies_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        products_json = [p.to_json() for p in vacancies]
        return JsonResponse(products_json, safe=False)
    
    elif request.method == "POST":
        data = json.loads(request.body)
        
        company_id = data.get("company") 
            
        company = Company.objects.get(id=company_id)  
        try:
            product = Vacancy.objects.create(
                name = data['name'],
                description = data['description'],
                salary = data['salary'],
                company = company,
            )
        except Exception as e:
            return JsonResponse({'errror': str(e)})
        
        return JsonResponse(product.to_json(), status=201)

@csrf_exempt
def vacancies_by_id(request, vacancy_id=None):
    try: 
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'errror': str(e)},status=404)
    
    if request.method == "GET":
        return JsonResponse(vacancy.to_json(), safe=False) 
    
    elif request.method == "PUT":
        new_data = json.loads(request.body)
        company_id = new_data.get("company") 
            
        company = Company.objects.get(id=company_id) 
        
        vacancy.name = new_data['name']
        vacancy.description = new_data['description']
        vacancy.salary = new_data['salary']
        vacancy.company = company
        
        vacancy.save()
        
        return JsonResponse(vacancy.to_json()) 
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted'})
    
def vacancies_by_company_id(request, company_id=None):
    vacancy = Vacancy.objects.filter(company_id=company_id) 
    vacancies_json = [v.to_json() for v in vacancy]  
    return JsonResponse(vacancies_json, safe=False)