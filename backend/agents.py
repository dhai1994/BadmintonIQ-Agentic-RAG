from retriever import retriever
from llm import llm

# RETRIEVAL AGENT
def retrieval_agent(state):

    question = state["question"]

    docs = retriever.invoke(question)

    context = "\n".join(
        [doc.page_content for doc in docs]
    )

    return {
        "context": context
    }


# TACTICAL ANALYSIS AGENT
def tactical_agent(state):

    context = state["context"]
    question = state["question"]

    prompt = f"""
    You are an elite badminton tactical analyst.

    Context:
    {context}

    Question:
    {question}

    Analyze tactical weaknesses
    and improvements.
    """

    response = llm.invoke(prompt)

    return {
        "analysis": response.content
    }


# COACH AGENT
def coach_agent(state):

    analysis = state["analysis"]

    prompt = f"""
    You are a professional badminton coach.

    Based on this analysis:

    {analysis}

    Give practical coaching advice
    and training drills.
    """

    response = llm.invoke(prompt)

    return {
        "recommendation": response.content
    }


# SUMMARY AGENT
def summary_agent(state):

    recommendation = state["recommendation"]

    prompt = f"""
    Summarize this badminton
    coaching report clearly.

    {recommendation}
    """

    response = llm.invoke(prompt)

    return {
        "final_answer": response.content
    }