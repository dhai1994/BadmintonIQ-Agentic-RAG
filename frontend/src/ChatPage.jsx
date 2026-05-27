import React, { useState, useRef, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'chat',      icon: '💬', label: 'AI Coach Chat',     badge: null },
  { id: 'analytics', icon: '📊', label: 'Player Analytics',  badge: 'NEW' },
  { id: 'opponent',  icon: '🎯', label: 'Opponent Analysis', badge: null },
  { id: 'upload',    icon: '📁', label: 'Upload Documents',  badge: null },
];

const QUICK_CHIPS = [
  { icon: '🏸', text: 'How to improve my smash?' },
  { icon: '👣', text: 'Footwork drills for beginners' },
  { icon: '🎯', text: 'Backhand clear technique' },
  { icon: '💪', text: 'Stamina training plan' },
  { icon: '🧠', text: 'Match strategy tips' },
  { icon: '⚡', text: 'Net kill improvement' },
];

const ANALYTICS_STATS = [
  { value: '78%', label: 'Smash Accuracy',  trend: '+5% this week', accent: 'linear-gradient(90deg,#00d4ff,#0066ff)' },
  { value: '62%', label: 'Rally Win Rate',  trend: '+2%',           accent: 'linear-gradient(90deg,#10b981,#00d4ff)' },
  { value: '4.2s', label: 'Avg. Recovery', trend: '-0.3s improved', accent: 'linear-gradient(90deg,#f59e0b,#ef4444)' },
  { value: '91%', label: 'Serve Accuracy', trend: '+8%',            accent: 'linear-gradient(90deg,#7c3aed,#0066ff)' },
];

const SKILL_BARS = [
  { label: 'Footwork Speed',   value: 72, color: '#00d4ff' },
  { label: 'Smash Power',      value: 85, color: '#0066ff' },
  { label: 'Net Play',         value: 58, color: '#10b981' },
  { label: 'Defense Stamina',  value: 64, color: '#f59e0b' },
  { label: 'Backhand Control', value: 49, color: '#ef4444' },
];

// ── Typing Indicator ────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="chat-message ai animate-fade-up">
      <div className="chat-avatar ai-avatar">🤖</div>
      <div className="chat-bubble ai-bubble typing-indicator">
        <div className="typing-dot" />
        <div className="typing-dot" />
        <div className="typing-dot" />
      </div>
    </div>
  );
}

// ── Chat Message ────────────────────────────────────────────────────────────
function ChatMessage({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`chat-message ${isUser ? 'user' : 'ai'} animate-fade-up`}>
      <div className={`chat-avatar ${isUser ? 'user-avatar' : 'ai-avatar'}`}>
        {isUser ? '👤' : '🤖'}
      </div>
      <div className={`chat-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
        {msg.content}
        <div className="chat-bubble-meta">{msg.time}</div>
      </div>
    </div>
  );
}

// ── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ activeTab, setActiveTab, chatHistory }) {
  return (
    <aside className="sidebar animate-fade-in">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🏸</div>
        <div className="sidebar-logo-text">
          BadmintonIQ
          <span>Agentic AI Platform</span>
        </div>
      </div>

      <div>
        <div className="sidebar-section-label">Menu</div>
        <nav className="sidebar-nav" style={{ marginTop: 10 }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="sidebar-section-label">Recent Chats</div>
        <div className="sidebar-chat-history" style={{ marginTop: 4 }}>
          {chatHistory.length === 0 ? (
            <div style={{ fontSize: 12, color: 'var(--text-muted)', padding: '12px', textAlign: 'center' }}>
              No chat history yet
            </div>
          ) : (
            chatHistory.slice(0, 4).map((item, i) => (
              <div key={i} className="chat-history-item">
                <div className="chat-history-item-q">🏸 {item.question}</div>
                <div className="chat-history-item-time">{item.time}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-avatar">D</div>
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">Dhairya</div>
          <div className="sidebar-user-role">Pro Athlete</div>
        </div>
        <div className="sidebar-status" title="Online" />
      </div>
    </aside>
  );
}

// ── Analytics Panel ──────────────────────────────────────────────────────────
function AnalyticsPanel() {
  return (
    <div className="chat-area" style={{ display: 'block' }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:700, marginBottom:6,
          background:'linear-gradient(90deg,var(--text-primary),var(--accent-cyan))',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
          Player Performance Analytics
        </h2>
        <p style={{ color:'var(--text-secondary)', fontSize:14 }}>AI-powered insights from your training data</p>
      </div>

      <div className="analytics-grid">
        {ANALYTICS_STATS.map((stat, i) => (
          <div key={i} className="analytics-card animate-fade-up"
            style={{ '--card-accent': stat.accent, animationDelay:`${i*60}ms` }}>
            <div className="analytics-value">{stat.value}</div>
            <div className="analytics-label">{stat.label}</div>
            <div className="analytics-trend">↑ {stat.trend}</div>
          </div>
        ))}
      </div>

      <div style={{ background:'var(--bg-card)', border:'1px solid var(--border-glass)',
        borderRadius:'var(--radius-lg)', padding:24, backdropFilter:'blur(10px)', marginBottom:20 }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:18, marginBottom:20 }}>⚡ Skill Breakdown</h3>
        {SKILL_BARS.map((skill, i) => (
          <div key={i} className="skill-bar-container">
            <div className="skill-bar-header">
              <span style={{ color:'var(--text-secondary)' }}>{skill.label}</span>
              <span style={{ color:skill.color, fontWeight:600 }}>{skill.value}%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill"
                style={{ width:`${skill.value}%`, background:`linear-gradient(90deg,${skill.color}99,${skill.color})` }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ background:'var(--bg-card)', border:'1px solid rgba(239,68,68,0.2)',
        borderRadius:'var(--radius-lg)', padding:24, backdropFilter:'blur(10px)' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:18, marginBottom:14 }}>🎯 AI Weakness Detection</h3>
        <div>
          <span className="weakness-chip red">⚠ Weak backhand defense</span>
          <span className="weakness-chip red">⚠ Low stamina in 3rd set</span>
          <span className="weakness-chip yellow">⚡ Net kill reaction time</span>
          <span className="weakness-chip yellow">🦶 Right-side footwork gap</span>
          <span className="weakness-chip green">✓ Strong smash accuracy</span>
          <span className="weakness-chip green">✓ Excellent front court</span>
        </div>
        <div className="strategy-card" style={{ marginTop:16 }}>
          <strong>AI Recommendation:</strong> Focus on backhand drills 20 mins daily.
          Add 10-minute footwork ladder before practice. Stamina drops after 18-minute rallies —
          incorporate HIIT 3×/week.
        </div>
      </div>
    </div>
  );
}

// ── Opponent Panel ───────────────────────────────────────────────────────────
function OpponentPanel() {
  const [opponent, setOpponent] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!opponent.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        name: opponent,
        weaknesses: ['Backhand cross-court', 'High lift defense', 'Pressure under net'],
        strengths: ['Powerful smash', 'Quick front-court'],
        strategies: [
          'Use cross-court smashes to exploit weak backhand',
          'Lift frequently to test defensive stamina',
          'Apply net pressure — opponent hesitates at net',
          'Vary pace to create confusion with slow lifts and fast net shots',
        ],
      });
      setLoading(false);
    }, 1800);
  };

  return (
    <div className="chat-area" style={{ display:'block' }}>
      <div style={{ marginBottom:24 }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:700, marginBottom:6,
          background:'linear-gradient(90deg,var(--text-primary),#f59e0b)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
          Opponent Analysis Agent
        </h2>
        <p style={{ color:'var(--text-secondary)', fontSize:14 }}>Enter opponent name or describe their playstyle</p>
      </div>

      <div style={{ display:'flex', gap:10, marginBottom:24 }}>
        <input value={opponent} onChange={e => setOpponent(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && analyze()}
          placeholder="e.g. John Smith or 'aggressive smasher'"
          style={{ flex:1, background:'var(--bg-card)', border:'1px solid var(--border-glass)',
            borderRadius:'var(--radius-md)', padding:'12px 16px',
            color:'var(--text-primary)', fontFamily:'var(--font-body)', fontSize:14, outline:'none' }} />
        <button onClick={analyze}
          style={{ padding:'12px 24px', background:'linear-gradient(135deg,#f59e0b,#ef4444)',
            border:'none', borderRadius:'var(--radius-md)', color:'#000', fontWeight:700,
            fontSize:14, cursor:'pointer', fontFamily:'var(--font-body)' }}>
          {loading ? '⏳ Analyzing...' : '🎯 Analyze'}
        </button>
      </div>

      {analysis && (
        <div className="animate-fade-up">
          <div className="opponent-section">
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:20, marginBottom:16 }}>
              🏸 Analysis: {analysis.name}
            </h3>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
              <div>
                <div style={{ fontSize:12, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>WEAKNESSES</div>
                {analysis.weaknesses.map((w, i) => (
                  <div key={i} style={{ fontSize:13, color:'#f87171', padding:'5px 0', borderBottom:'1px solid var(--border-glass)' }}>⚠ {w}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize:12, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>STRENGTHS</div>
                {analysis.strengths.map((s, i) => (
                  <div key={i} style={{ fontSize:13, color:'var(--accent-green)', padding:'5px 0', borderBottom:'1px solid var(--border-glass)' }}>✓ {s}</div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:600, color:'var(--accent-cyan)', marginBottom:10 }}>
              ⚡ Recommended Strategies
            </div>
            {analysis.strategies.map((s, i) => (
              <div key={i} className="strategy-card" style={{ marginTop:8 }}>
                <strong>#{i + 1}</strong> {s}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Upload Panel ─────────────────────────────────────────────────────────────
function UploadPanel() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const inputRef = useRef();

  const processFile = (file) => {
    if (!file || file.type !== 'application/pdf') { alert('PDFs only!'); return; }
    const id = Date.now() + Math.random();
    setFiles(prev => [...prev, { id, name: file.name, size: (file.size/1024).toFixed(0)+' KB', status:'uploading' }]);
    setProgress(prev => ({ ...prev, [id]: 0 }));
    let prog = 0;
    const iv = setInterval(() => {
      prog += Math.random() * 25;
      if (prog >= 100) {
        prog = 100; clearInterval(iv);
        setFiles(prev => prev.map(f => f.id === id ? { ...f, status:'done' } : f));
      }
      setProgress(prev => ({ ...prev, [id]: Math.min(100, Math.round(prog)) }));
    }, 300);
  };

  return (
    <div className="chat-area" style={{ display:'block' }}>
      <div style={{ marginBottom:24 }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:700, marginBottom:6,
          background:'linear-gradient(90deg,var(--text-primary),#10b981)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
          Upload Coaching Documents
        </h2>
        <p style={{ color:'var(--text-secondary)', fontSize:14 }}>Upload PDFs to enrich the AI knowledge base</p>
      </div>

      <div className={`upload-zone ${dragging ? 'dragging' : ''}`}
        onDragEnter={() => setDragging(true)} onDragLeave={() => setDragging(false)}
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); setDragging(false); Array.from(e.dataTransfer.files).forEach(processFile); }}
        onClick={() => inputRef.current.click()}>
        <input ref={inputRef} type="file" accept=".pdf" multiple hidden
          onChange={e => Array.from(e.target.files).forEach(processFile)} />
        <div className="upload-icon">📄</div>
        <div className="upload-title">Drag & drop PDF files here</div>
        <div className="upload-subtitle">Coaching manuals, tactics guides, match transcripts</div>
        <button className="upload-btn" onClick={e => { e.stopPropagation(); inputRef.current.click(); }}>Choose Files</button>
      </div>

      {files.length > 0 && (
        <div style={{ marginTop:20, display:'flex', flexDirection:'column', gap:10 }}>
          {files.map(file => (
            <div key={file.id} className="analytics-card animate-fade-up"
              style={{ '--card-accent':'linear-gradient(90deg,#10b981,#00d4ff)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
                <span style={{ fontSize:13, fontWeight:500 }}>📄 {file.name}</span>
                <span style={{ fontSize:11, color:'var(--text-muted)' }}>{file.size}</span>
                {file.status === 'done' && <span style={{ fontSize:12, color:'var(--accent-green)' }}>✓ Done</span>}
              </div>
              {file.status === 'uploading' && (
                <div className="upload-progress">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width:`${progress[file.id]||0}%` }} />
                  </div>
                  <div className="progress-label">{progress[file.id]||0}%</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Welcome Screen ───────────────────────────────────────────────────────────
function WelcomeScreen({ onChipClick }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-glow"><span className="welcome-glow-emoji">🏸</span></div>
      <div>
        <h1 className="welcome-title">BadmintonIQ<br />AI Coaching Agent</h1>
        <p className="welcome-subtitle" style={{ margin:'12px auto 0' }}>
          Your agentic AI coach — powered by RAG, match analytics, and pro coaching data. Ask anything.
        </p>
      </div>
      <div className="welcome-chips">
        {QUICK_CHIPS.map((chip, i) => (
          <button key={i} className="welcome-chip" onClick={() => onChipClick(chip.text)}>
            <span>{chip.icon}</span>{chip.text}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Chat Panel ───────────────────────────────────────────────────────────────
function ChatPanel({ chatHistory, setChatHistory }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();
  const textareaRef = useRef();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }); }, [messages, loading]);

  const autoResize = () => {
    const ta = textareaRef.current;
    if (ta) { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; }
  };

  const sendMessage = useCallback(async (text) => {
    const query = (text || input).trim();
    if (!query || loading) return;
    const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
    setMessages(prev => [...prev, { role:'user', content:query, time:now }]);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    setLoading(true);
    setChatHistory(prev => [{ question:query, time:now }, ...prev].slice(0, 4));

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method:'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        role:'ai',
        content: data.answer || data.response || 'No response.',
        time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role:'ai',
        content:'⚠️ Cannot reach backend. Make sure Flask is running on port 5000.',
        time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }),
      }]);
    } finally { setLoading(false); }
  }, [input, loading, setChatHistory]);

  return (
    <>
      <div className="chat-area">
        {messages.length === 0
          ? <WelcomeScreen onChipClick={sendMessage} />
          : messages.map((msg, i) => <ChatMessage key={i} msg={msg} />)
        }
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="input-area">
        <div className="input-container">
          <textarea ref={textareaRef} className="chat-input" value={input}
            onChange={e => { setInput(e.target.value); autoResize(); }}
            onKeyDown={e => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }}}
            placeholder="Ask your AI coach anything about badminton…" rows={1} />
          <div className="input-actions">
            <div className="input-action-btn" title="Attach">📎</div>
            <div className="input-action-btn" title="Voice">🎙️</div>
            <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}>
              {loading ? '⏳' : '➤'}
            </button>
          </div>
        </div>
        <div style={{ marginTop:8, fontSize:11, color:'var(--text-muted)', textAlign:'center' }}>
          Powered by RAG · Shift+Enter for new line · Your data is private
        </div>
      </div>
    </>
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────
export default function ChatPage() {
  const [activeTab, setActiveTab] = useState('chat');
  const [chatHistory, setChatHistory] = useState([]);

  const tabLabels = { chat:'AI Coach Chat', analytics:'Player Analytics', opponent:'Opponent Analysis', upload:'Upload Documents' };

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':      return <ChatPanel chatHistory={chatHistory} setChatHistory={setChatHistory} />;
      case 'analytics': return <AnalyticsPanel />;
      case 'opponent':  return <OpponentPanel />;
      case 'upload':    return <UploadPanel />;
      default:          return <ChatPanel chatHistory={chatHistory} setChatHistory={setChatHistory} />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} chatHistory={chatHistory} />
      <div className="main-content">
        <header className="main-header">
          <div className="main-header-title">{tabLabels[activeTab]}</div>
          <div className="header-badges">
            <div className="header-badge badge-live">Live</div>
            <div className="header-badge badge-iq">IQ v2.0</div>
          </div>
        </header>
        <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}