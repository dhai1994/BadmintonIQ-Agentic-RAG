from langchain_chroma import Chroma
from embedding import embeddings

db = Chroma(
    persist_directory="../vectordb",
    embedding_function=embeddings
)

retriever = db.as_retriever()