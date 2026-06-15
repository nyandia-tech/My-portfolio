from django.http import JsonResponse
from django.shortcuts import render
from .models import ContactMessage, Project


# Create your views here.
def home(request):
    projects = Project.objects.all()
    return render(request, 'home.html', {'projects': projects})


def contact_submit(request):
    if request.method != 'POST':
        return JsonResponse({'success': False, 'error': 'Invalid request method.'}, status=405)

    name = request.POST.get('name', '').strip()
    email = request.POST.get('email', '').strip()
    subject = request.POST.get('subject', '').strip()
    message = request.POST.get('message', '').strip()

    errors = {}
    if len(name) < 2:
        errors['name'] = 'Name must be at least 2 characters.'
    if not email or '@' not in email:
        errors['email'] = 'Please enter a valid email address.'
    if len(subject) < 3:
        errors['subject'] = 'Subject must be at least 3 characters.'
    if len(message) < 10:
        errors['message'] = 'Message must be at least 10 characters.'

    if errors:
        return JsonResponse({'success': False, 'errors': errors}, status=400)

    ContactMessage.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message,
    )

    return JsonResponse({'success': True, 'message': 'Message sent successfully! I will get back to you soon.'})
