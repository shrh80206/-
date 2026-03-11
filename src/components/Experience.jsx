import React from 'react'

export default function Experience() {
  return (
    <div className="card">
      <h2>工作經歷</h2>
      <article>
        <h3>資深工程師 — 公司甲</h3>
        <p className="meta">2021 - 現在</p>
        <p>負責產品前後端整合，設計 API 與提升系統效能。</p>
      </article>

      <article>
        <h3>工程師 — 公司乙</h3>
        <p className="meta">2018 - 2021</p>
        <p>參與大型專案，負責使用者介面與前端架構重構。</p>
      </article>
      <article>
        <h3>實習生 — 公司丙</h3>
        <p className="meta">2017 - 2018</p>
        <p>協助品質測試與自動化工具開發，提升團隊開發效率。</p>
      </article>
    </div>
  )
}
