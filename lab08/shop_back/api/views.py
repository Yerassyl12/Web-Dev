from datetime import datetime,timedelta
from django.http import HttpResponse,HttpRequest,JsonResponse
from api.models import Product,Categoryy
from django.shortcuts import get_object_or_404

def hello(request):
    print(request)
    return HttpResponse("Hello World!")

def about(request):
    return HttpResponse("<h1>About</h1>")

def hour_ahead(request, hour=None):
    cur_time = datetime.now()
    new_time = cur_time + timedelta(hours=int(hour))
    return HttpResponse(f"<h1>cur: {cur_time}</h1> <h1>new: {new_time}</h1>")

def test_json(request):
    data = {
        "message": "Hello World",
        "numbers": [1,2,3,4,5],
        "student": {
            "id": "1234",
            "name": "Student 1",
            "gpa": 3.9
        }
    }
    return JsonResponse(data)

# def products_by_id(request, idd=None):
#     products = Product.objects.get(id=idd)
#     products_json = [p.to_json() for p in products]
#     return JsonResponse(products_json, safe=False)

def products_by_id(request, idd=None):
    product = get_object_or_404(Product, id=idd)  # Получаем один объект
    return JsonResponse(product.to_json(), safe=False)  # Отправляем как JSON

def categories_by_id(request, idd=None):
    categoryy = get_object_or_404(Categoryy, id=idd)  # Получаем один объект
    return JsonResponse(categoryy.to_json(), safe=False)  # Отправляем как JSON

def products_by_category(request, idd=None):
    product = get_object_or_404(Product, category_id=idd)  # Получаем один объект
    return JsonResponse(product.to_json(), safe=False)  # Отправляем как JSON

def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def category_list(request):
    categories = Categoryy.objects.all()
    categories_json = [p.to_json() for p in categories]
    return JsonResponse(categories_json, safe=False)