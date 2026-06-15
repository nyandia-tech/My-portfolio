from django.contrib import admin
from .models import ContactMessage, Project

# Register your models here.
admin.site.register(Project)
admin.site.register(ContactMessage)
