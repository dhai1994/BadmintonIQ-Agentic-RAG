from langgraph.graph import StateGraph
from typing import TypedDict

from agents import (
    retrieval_agent,
    tactical_agent,
    coach_agent,
    summary_agent
)

class GraphState(TypedDict):

    question: str
    context: str
    analysis: str
    recommendation: str
    final_answer: str


graph = StateGraph(GraphState)

graph.add_node(
    "retrieval",
    retrieval_agent
)

graph.add_node(
    "tactical",
    tactical_agent
)

graph.add_node(
    "coach",
    coach_agent
)

graph.add_node(
    "summary",
    summary_agent
)

graph.set_entry_point("retrieval")

graph.add_edge(
    "retrieval",
    "tactical"
)

graph.add_edge(
    "tactical",
    "coach"
)

graph.add_edge(
    "coach",
    "summary"
)

app = graph.compile()