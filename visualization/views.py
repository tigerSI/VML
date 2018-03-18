from django.shortcuts import render
from visualization_core.student import Student

# Create your views here.
def index(request):
    s = Student("Jason")
    context = { 's' : s }
    return render(request, 'visualization/index.html', context)