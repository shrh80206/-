import React from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <h1>你的名字</h1>
          <p className="sub">資深全端工程師 • 電子郵件：your.email@example.com • 電話：+886 9xx-xxx-xxx</p>
        </div>
        <div className="header-actions">
          <button className="print-btn" onClick={() => window.print()}>列印 / 存成 PDF</button>
        </div>
      </header>

      <main className="main">
        <section className="left">
          <About />
        </section>
        <section className="right">
          <Experience />
          <Projects />
        </section>
      </main>

      <footer className="footer">由本簡歷網站產生</footer>
    </div>
  )
}
