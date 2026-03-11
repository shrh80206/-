簡歷網站範本（React + Vite）

這個專案同時提供兩種版本：

- React + Vite 的開發版（需要 Node.js / npm）
- 純靜態的 `static_resume.html`（不需安裝任何工具，直接在瀏覽器開啟）

快速開始（若有 Node.js）：

```powershell
npm install
npm run dev
```

如果沒有 Node.js：

直接在檔案總管上雙擊 `static_resume.html` 或在瀏覽器中開啟它。

也可以用簡單的本地伺服器（選用，需安裝 Python）：

```powershell
# 使用 Python 3 啟動靜態伺服器
python -m http.server 8000
# 然後在瀏覽器開啟 http://localhost:8000/static_resume.html
```

主要檔案：
- `index.html`
- `src/App.jsx`, `src/components/*`

請編輯 `src/components/*` 或 `static_resume.html` 以填入你的個人資料與調整格式。

遊戲範例
-------

專案內也包含兩個純靜態遊戲，可直接用瀏覽器開啟：

- `static_tictactoe.html`（圈圈叉叉）
- `static_chess.html`（西洋棋，點選棋格移動，使用 chess.js 作棋局邏輯）

如果你沒有 Node.js / npm
-------------------------

已提供一個純靜態版本 `static_resume.html`，不需要安裝任何工具：

- 直接在檔案總管上雙擊 `static_resume.html` 或在瀏覽器中開啟它。
- 點擊頁面右上角的「印出 / 儲存為 PDF」按鈕可列印或儲存為 PDF。

若你想用簡單的本地伺服器（選擇性）：

```powershell
# Python 3 (若已安裝)
python -m http.server 8000
# 然後在瀏覽器開啟 http://localhost:8000/static_resume.html
```

