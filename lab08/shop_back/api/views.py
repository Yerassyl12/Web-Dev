from datetime import datetime,timedelta
from django.http import HttpResponse,HttpRequest,JsonResponse
from api.models import Product,Categoryy
from django.shortcuts import get_object_or_404



def products_by_id(request, product_id=None):
    product = Product.objects.get(id=product_id)  
    return JsonResponse(product.to_json(), safe=False)  

def categories_by_id(request, idd=None):
    categoryy = get_object_or_404(Categoryy, id=idd)  
    return JsonResponse(categoryy.to_json(), safe=False)  

def products_by_category(request, idd=None):
    product = get_object_or_404(Product, category_id=idd) 
    return JsonResponse(product.to_json(), safe=False) 

def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def category_list(request):
    categories = Categoryy.objects.all()
    categories_json = [p.to_json() for p in categories]
    return JsonResponse(categories_json, safe=False)