from django.contrib import admin

from api.models import Product,Categoryy

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id","name","price","description","count","is_active","category_id")

@admin.register(Categoryy)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id","name")
