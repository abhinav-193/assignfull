from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import redirect
import PyPDF2
import re
import string
from .pdfparser import PDFparser
import json


@api_view(['GET','POST'])
def home(request):
    if request.method =='POST':
        data= request.data
        print(data['data']['search'])
        user_input= data['data']["search"]
        pdf_contents= PDFparser.pdf_contents
        sent=""
        for sentence in pdf_contents:
            if user_input in sentence:
                sent+=sentence+"."
        return Response(sent)
    
    if request.method =='GET':
        return Response('Enter an input')
