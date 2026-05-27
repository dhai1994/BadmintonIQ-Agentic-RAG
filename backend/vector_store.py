from langchain_chroma import Chroma
from embedding import embeddings


def create_vector_store(chunks):

    db = Chroma.from_texts(
        texts=chunks,
        embedding=embeddings,
        persist_directory="../vectordb"
    )

    return db