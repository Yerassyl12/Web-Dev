from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    category_id = models.IntegerField(default=1)

    def __str__ (self):
        return f"{self.name} - {self.price} - {self.description} - {self.count} - {self.is_active} - {self.category_id}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "count" : self.count,
            "is_active": self.is_active,
            "category_id": self.category_id
        }
    
class Categoryy(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }