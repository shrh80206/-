import React from 'react'

export default function About() {
  return (
    <div className="card">
      <h2>關於我</h2>
      <p>
        簡短介紹：具備前後端經驗，專長於 React、Node.js 與系統設計。可自由修改此處為你的個人簡介。
      </p>
      <h3>聯絡方式</h3>
      <ul>
        <li>電子郵件：your.email@example.com</li>
        <li>電話：+886 9xx-xxx-xxx</li>
        <li>地點：台北，台灣</li>
      </ul>
      <h3>技能</h3>
      <ul>
        <li>JavaScript / TypeScript</li>
        <li>React、Vite</li>
        <li>Node.js、Express</li>
        <li>Docker、CI/CD</li>
      </ul>
    </div>
  )
}
