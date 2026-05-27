from graph import app

response = app.invoke({
    "question":
    "How can player improve smash defense?"
})

print(response["final_answer"])