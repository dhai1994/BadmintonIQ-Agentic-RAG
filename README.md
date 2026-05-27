# BadmintonIQ-Agentic-RAG 🏸🤖

An advanced **Agentic AI-powered Badminton Intelligence Platform** designed to help badminton players improve performance, analyze opponents, learn techniques, and receive AI-driven coaching guidance using **RAG (Retrieval-Augmented Generation)** and **Large Language Models (LLMs)**.

This platform acts like a **personal AI badminton coach** capable of understanding badminton-specific strategies, player weaknesses, match situations, and training techniques.

---

# 🚀 Key Features

## 🧠 AI Coach Chat

Ask anything related to badminton:

* Smash improvement
* Footwork techniques
* Net kill training
* Defensive strategies
* Doubles rotation
* Match preparation
* Recovery techniques
* Grip correction
* Tactical gameplay

The AI provides:

* Detailed explanations
* Technique improvement tips
* Personalized badminton guidance
* Training drills and suggestions

---

## 🎯 Opponent Analysis Agent

Analyze your opponent intelligently.

Example:

> “My opponent has a powerful smash”

The AI can:

* Detect strengths
* Identify weaknesses
* Suggest counter strategies
* Recommend gameplay plans
* Provide tactical badminton coaching

### Example Analysis

✅ Strengths:

* Powerful smash
* Fast front-court play

❌ Weaknesses:

* Weak backhand defense
* Struggles under net pressure
* High lift vulnerability

⚡ AI Strategy Suggestions:

* Target backhand corners
* Use deceptive drops
* Apply net pressure
* Force defensive lifts

---

## 📚 RAG-Based Knowledge System

The system uses Retrieval-Augmented Generation (RAG).

You can upload:

* Badminton coaching PDFs
* Training manuals
* Match reports
* Tactical documents
* Player analysis reports

The AI retrieves relevant badminton knowledge and generates intelligent responses using vector search and LLM reasoning.

---

## 💾 Chat History Saving

* Previous badminton chats are stored
* Easily revisit coaching sessions
* Continue old conversations
* Personalized AI interaction

---

## 📄 Document Upload System

Upload badminton documents and ask questions directly from them.

Example:

* “How to improve net kill from this training PDF?”
* “Summarize doubles rotation strategy”

---

## ⚡ Real-Time AI Responses

Fast AI-powered badminton coaching using:

* OpenRouter LLMs
* Semantic retrieval
* Vector embeddings

---

# 🏗️ Project Structure

```bash
BadmintonIQ-Agentic-RAG/
│
├── backend/
│   ├── agents.py
│   ├── chunking.py
│   ├── config.py
│   ├── create_vector_db.py
│   ├── embedding.py
│   ├── graph.py
│   ├── llm.py
│   ├── main.py
│   ├── pdf_reader.py
│   ├── rag.py
│   ├── retriever.py
│   ├── vector_store.py
│   └── vectordb/
│
├── frontend/
│
├── uploads/
│
├── vectordb/
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Modern Dark UI
* Responsive Design

## Backend

* Python
* FastAPI
* LangChain

## AI / ML

* RAG Architecture
* OpenRouter LLMs
* Sentence Transformers
* Semantic Search
* Vector Embeddings

## Database

* ChromaDB Vector Database

---

# 🧠 How the AI Works

1. User uploads badminton documents
2. PDFs are read and chunked
3. Embeddings are generated
4. Data is stored in ChromaDB
5. User asks badminton-related queries
6. Relevant context is retrieved
7. AI generates intelligent badminton coaching responses

---

# 📦 Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/dhai1994/BadmintonIQ-Agentic-RAG.git
cd BadmintonIQ-Agentic-RAG
```

---

# 2️⃣ Backend Setup

Move into backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

## Windows

```bash
venv\Scripts\activate
```

## Linux / Mac

```bash
source venv/bin/activate
```

---

# 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 4️⃣ Setup Environment Variables

Create `.env` inside backend folder:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Get API Key from:

[OpenRouter](https://openrouter.ai/keys?utm_source=chatgpt.com)

---

# 5️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

Move to frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run frontend:

```bash
npm start
```

or

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

or

```bash
http://localhost:5173
```

---

# 🗃️ Create Vector Database

Run:

```bash
python create_vector_db.py
```

This creates embeddings and stores badminton knowledge inside ChromaDB.

---

# 🔥 Features Demonstrated

✅ AI badminton coach chat
✅ Opponent weakness analysis
✅ Tactical badminton guidance
✅ RAG document retrieval
✅ Chat history saving
✅ Modern responsive UI
✅ Semantic badminton search
✅ AI-generated badminton strategies

---

# 📄 Example Queries

## AI Coach Chat

* “How to improve smash accuracy?”
* “Best footwork drills for singles?”
* “How to defend body smashes?”
* “Teach me deceptive drop shots”

## Opponent Analysis

* “Opponent has strong backhand”
* “Player is weak at front court”
* “Opponent plays aggressive doubles”

---

# 🛡️ Security

* `.env` files ignored using `.gitignore`
* API keys secured using environment variables
* Sensitive credentials removed from Git history

---

# 🌟 Future Improvements

* 🎙️ Voice AI Coach
* 📹 Match Video Analysis
* 📊 Performance Analytics Dashboard
* 🏸 Personalized Training Plans
* 📱 Mobile Application
* 🤖 Multi-Agent AI Coaching System

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push changes
5. Open Pull Request

---

# 📜 License

MIT License

---

# 👨‍💻 Author

### Dhairya Rathore

AI/ML Developer | Full Stack Developer | Agentic AI Enthusiast

GitHub: [dhai1994 GitHub Profile](https://github.com/dhai1994?utm_source=chatgpt.com)

---

# ⭐ Support

If you like this project:

* Star the repository ⭐
* Share it with others
* Contribute to improve the platform

---


