import PyPDF2
import re
import string

class PDFparser:
    pdf_contents = []
    with open('main/to.pdf', 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)

        for page_num in range(len(pdf_reader.pages)):
            # Extract text from the current page
            page = pdf_reader.pages[page_num].extract_text()
            # Remove any extra newlines and whitespaces
            page = re.sub(r'[\n\r\s]+', ' ', page)
            # Remove any punctuation except periods and commas
            page = page.translate(str.maketrans('', '', string.punctuation.replace('.', '').replace(',', '')))
            # Replace periods and commas with periods followed by a newline
            page = re.sub(r'([.,])', r'\1\n', page)
            # Remove any extra periods and newlines
            page = re.sub(r'\.{2,}', '.', page)
            page = re.sub(r'\n{2,}', '\n', page)
            # Split into sentences
            sentences = page.split('\n')
            # Add the sentences to the pdf_contents list
            pdf_contents.extend(sentences)
    
    