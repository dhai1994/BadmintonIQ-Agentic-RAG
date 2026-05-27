from retriever import retriever
from llm import llm

def ask_question(question):

    docs = retriever.invoke(question)

    context = "\n".join(
        [doc.page_content for doc in docs]
    )

    prompt = f"""
    You are a badminton AI coach.

    Context:
    {context}

    Question:
    {question}

    Give a clear badminton coaching answer.
    """

    response = llm.invoke(prompt)

    return response.content