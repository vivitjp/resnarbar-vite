
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MuiIndex from './page/mui/index.tsx';

// GitHub Pages にデプロイする場合、basename を設定
// GitHubのリポジトリで Rulesets（ルールセット）を作成

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/resnarbar-vite">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mui" element={<MuiIndex />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
