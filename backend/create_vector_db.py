import os

from pdf_reader import extract_text
from chunking import split_text
from vector_store import create_vector_store

all_chunks = []

pdf_folder = "../uploads"

for file in os.listdir(pdf_folder):

    if file.endswith(".pdf"):

        pdf_path = os.path.join(
            pdf_folder,
            file
        )

        print(f"Reading: {file}")

        text = extract_text(pdf_path)

        chunks = split_text(text)

        all_chunks.extend(chunks)

print("Creating vector DB...")

create_vector_store(all_chunks)

print("Vector DB created successfully")