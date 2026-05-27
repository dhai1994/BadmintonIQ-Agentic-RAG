from fastapi import FastAPI
from fastapi import UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pdf_reader import extract_text
from chunking import split_text
from vector_store import create_vector_store

from graph import app


# FASTAPI APP
api = FastAPI()


# CORS FIX
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# HOME ROUTE
@api.get("/")
def home():

    return {
        "message": "Badminton AI Running"
    }


# UPLOAD PDF ROUTE
@api.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):

    file_path = f"../uploads/{file.filename}"

    contents = await file.read()

    with open(file_path, "wb") as f:
        f.write(contents)

    # EXTRACT TEXT
    text = extract_text(file_path)

    # SPLIT INTO CHUNKS
    chunks = split_text(text)

    # CREATE VECTOR DATABASE
    create_vector_store(chunks)

    return {
        "message":
        "PDF uploaded and vector DB created successfully",
        "filename":
        file.filename
    }


# REQUEST MODEL
class ChatRequest(BaseModel):

    question: str


# CHAT ENDPOINT
@api.post("/chat")
async def chat(data: ChatRequest):

    response = app.invoke({
        "question": data.question
    })

    return {
        "response":
        response["final_answer"]
    }