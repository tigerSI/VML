from django.shortcuts import render

from visualization_core import sample

def index(request):
    context = {}

    size, input_data = sample.input_sample_1d()

    context["size"] = size
    context["content"] = input_data

    return render(request, 'visualization/index.html', context)