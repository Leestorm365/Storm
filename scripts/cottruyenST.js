<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Tiến triển cốt truyện · Mẹ bồi đọc</title>
<style>
/* ============================================================
   Tiến triển cốt truyện UI · Cổ điển Trung Hoa·Phong cách giấy Tuyên đỏ sẫm
   Câu chuyện: Mẹ bồi đọc
   ============================================================ */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
    --hue-primary: 350;
    --hue-secondary: 38;
    --sat-primary: 55%;
    --sat-secondary: 45%;
    --light-primary: 40%;
    --light-secondary: 50%;

    --bg-card-glass: hsla(350, 20%, 10%, 0.60);
    --border-glass: hsla(350, 30%, 40%, 0.12);
    --text-primary: hsl(30, 15%, 88%);
    --text-secondary: hsl(30, 10%, 65%);
    --text-dim: hsl(30, 10%, 40%);
    --color-accent: hsl(350, 55%, 40%);
    --color-gold: hsl(38, 45%, 50%);
    --shadow-soft: 0 8px 40px rgba(0, 0, 0, 0.45);
    --transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

body {
    font-family: 'Noto Serif SC', 'PingFang SC', 'Helvetica Neue', serif;
    background: transparent;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    color: var(--text-primary);
    font-weight: 400;
    line-height: 1.6;
}

.story-container {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    background: var(--bg-card-glass);
    backdrop-filter: blur(24px) saturate(1.2);
    -webkit-backdrop-filter: blur(24px) saturate(1.2);
    border: 1px solid var(--border-glass);
    border-radius: 4px;
    padding: 16px 18px 14px 18px;
    box-shadow: var(--shadow-soft);
    position: relative;
    overflow: visible;
}

/* ===== Hoa văn hồi văn bốn góc ===== */
.story-container .corner-border {
    position: absolute;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 3;
}
.story-container .corner-border::before,
.story-container .corner-border::after {
    content: '';
    position: absolute;
    background: hsla(350, 55%, 40%, 0.06);
    border: 1px solid hsla(350, 55%, 40%, 0.04);
}
.corner-tl { top: 10px; left: 10px; }
.corner-tl::before { top: 0; left: 0; width: 10px; height: 4px; border-bottom: none; border-right: none; }
.corner-tl::after { bottom: 0; right: 0; width: 4px; height: 10px; border-top: none; border-left: none; }
.corner-tr { top: 10px; right: 10px; }
.corner-tr::before { top: 0; right: 0; width: 10px; height: 4px; border-bottom: none; border-left: none; }
.corner-tr::after { bottom: 0; left: 0; width: 4px; height: 10px; border-top: none; border-right: none; }
.corner-bl { bottom: 10px; left: 10px; }
.corner-bl::before { bottom: 0; left: 0; width: 10px; height: 4px; border-top: none; border-right: none; }
.corner-bl::after { top: 0; right: 0; width: 4px; height: 10px; border-bottom: none; border-left: none; }
.corner-br { bottom: 10px; right: 10px; }
.corner-br::before { bottom: 0; right: 0; width: 10px; height: 4px; border-top: none; border-left: none; }
.corner-br::after { top: 0; left: 0; width: 4px; height: 10px; border-bottom: none; border-right: none; }

.story-container > * { position: relative; z-index: 1; }

/* ===== Thanh điều hướng ===== */
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 8px 0;
    border-bottom: 1px solid hsla(350, 55%, 40%, 0.04);
    margin-bottom: 8px;
    flex-wrap: wrap;
    gap: 4px;
}
.nav-title {
    font-family: 'Noto Serif SC', serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 4px;
    color: hsl(350, 55%, 40%);
}
.nav-title .seal {
    font-size: 0.5rem;
    background: hsla(350, 55%, 40%, 0.04);
    border: 1px solid hsla(350, 55%, 40%, 0.04);
    padding: 0 6px;
    border-radius: 2px;
    letter-spacing: 2px;
    color: hsla(350, 55%, 40%, 0.3);
}
.nav-actions {
    display: flex;
    gap: 4px;
    align-items: center;
}
.nav-btn {
    background: hsla(350, 20%, 20%, 0.3);
    border: 1px solid var(--border-glass);
    border-radius: 2px;
    padding: 4px 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition);
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.5rem;
    font-family: inherit;
}
.nav-btn:hover {
    background: hsla(350, 30%, 25%, 0.4);
    border-color: hsla(350, 30%, 50%, 0.15);
    color: var(--text-primary);
}
.nav-btn:active { transform: scale(0.96); }
.nav-btn .icon-svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
.nav-btn .badge { font-size: 0.4rem; background: hsl(350, 55%, 40%); color: #0a0a0a; padding: 0 5px; border-radius: 2px; font-weight: 700; }

/* ===== Hiển thị hiện tại ===== */
.current-display {
    background: hsla(350, 20%, 12%, 0.3);
    border: 1px solid var(--border-glass);
    border-radius: 2px;
    padding: 8px 12px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all var(--transition);
}
.current-display:hover {
    border-color: hsla(350, 30%, 50%, 0.15);
    background: hsla(350, 20%, 18%, 0.3);
    transform: translateY(-2px);
}
.current-display.no-plot {
    border-color: hsla(38, 45%, 50%, 0.15);
    background: hsla(38, 45%, 50%, 0.04);
}
.current-display.no-plot .story-title { color: hsl(38, 45%, 50%); font-weight: 700; }
.story-title {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
}
.story-title .gold { color: hsl(38, 45%, 50%); }
.story-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    margin-top: 2px;
    font-size: 0.6rem;
    color: var(--text-secondary);
}
.story-meta .step-status {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 1px 8px;
    border-radius: 2px;
    background: hsla(350, 20%, 20%, 0.3);
    border: 1px solid var(--border-glass);
    font-size: 0.55rem;
}
.story-meta .step-status .dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: hsl(38, 45%, 50%);
}
.story-meta .step-status .dot.done { background: hsl(150, 40%, 40%); }
.story-meta .step-status .dot.pending { background: hsl(38, 45%, 50%); animation: pulse-dot 1.8s ease-in-out infinite; }
@keyframes pulse-dot {
    0%, 100% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
}
.story-progress-text {
    font-size: 0.55rem;
    color: var(--text-dim);
    letter-spacing: 1px;
}

/* ===== Nút điều khiển ===== */
.nav-controls {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
    justify-content: center;
    flex-wrap: wrap;
}
.ctrl-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 12px;
    border: 1px solid var(--border-glass);
    border-radius: 2px;
    background: hsla(350, 20%, 15%, 0.3);
    color: var(--text-secondary);
    font-size: 0.65rem;
    font-family: inherit;
    cursor: pointer;
    transition: all var(--transition);
    flex: 0 1 auto;
    min-width: 60px;
    justify-content: center;
}
.ctrl-btn:hover:not(:disabled) {
    border-color: hsla(350, 30%, 50%, 0.15);
    background: hsla(350, 20%, 25%, 0.3);
    color: var(--text-primary);
    transform: translateY(-2px);
}
.ctrl-btn:active:not(:disabled) { transform: scale(0.96); }
.ctrl-btn:disabled { opacity: 0.25; cursor: not-allowed; transform: none; }
.ctrl-btn .icon-svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
.ctrl-btn.primary {
    border-color: hsl(350, 55%, 40%);
    color: hsl(350, 55%, 40%);
}
.ctrl-btn.primary:hover:not(:disabled) {
    background: hsla(350, 55%, 40%, 0.08);
    border-color: hsl(350, 55%, 40%);
}
.ctrl-btn.gold {
    border-color: hsl(38, 45%, 50%);
    color: hsl(38, 45%, 50%);
}
.ctrl-btn.gold:hover:not(:disabled) {
    background: hsla(38, 45%, 50%, 0.06);
    border-color: hsl(38, 45%, 50%);
}

/* ===== Danh sách bước ===== */
.steps-section {
    margin-bottom: 8px;
}
.steps-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px 4px 2px;
    border-bottom: 1px solid var(--border-glass);
    margin-bottom: 4px;
}
.steps-header-left {
    display: flex;
    align-items: center;
    gap: 6px;
}
.steps-header h3 {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--text-secondary);
    text-transform: uppercase;
}
.steps-header .steps-count {
    font-size: 0.55rem;
    color: var(--text-dim);
}
.steps-list-wrap {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
}
.steps-list-wrap.open {
    max-height: 3000px;
    opacity: 1;
}
.step-item {
    background: hsla(350, 20%, 12%, 0.25);
    border: 1px solid var(--border-glass);
    border-radius: 2px;
    padding: 8px 10px;
    margin-bottom: 4px;
    transition: all var(--transition);
    cursor: pointer;
}
.step-item:hover {
    border-color: hsla(350, 30%, 50%, 0.12);
    background: hsla(350, 20%, 18%, 0.2);
}
.step-item.executed {
    border-color: hsla(150, 40%, 40%, 0.15);
    opacity: 0.6;
}
.step-item.executed .step-id {
    background: hsla(150, 40%, 40%, 0.12);
    color: hsl(150, 40%, 45%);
}
.step-item.current {
    border-color: hsl(350, 55%, 40%);
    background: hsla(350, 55%, 40%, 0.03);
}
.step-item.current .step-id {
    background: hsla(350, 55%, 40%, 0.12);
    color: hsl(350, 55%, 40%);
}
.step-header-line {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
}
.step-id {
    font-size: 0.5rem;
    font-weight: 700;
    padding: 1px 8px;
    border-radius: 2px;
    background: hsla(350, 20%, 20%, 0.3);
    color: var(--text-secondary);
    letter-spacing: 0.5px;
    flex-shrink: 0;
}
.step-location {
    font-size: 0.5rem;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 3px;
}
.step-location .icon-svg { width: 11px; height: 11px; stroke: currentColor; fill: none; stroke-width: 1.8; }
.step-event-preview {
    font-size: 0.65rem;
    color: var(--text-secondary);
    margin-top: 2px;
    padding-left: 2px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.step-execute-btn {
    margin-left: auto;
    padding: 2px 12px;
    border: 1px solid hsl(350, 55%, 40%);
    border-radius: 2px;
    background: transparent;
    color: hsl(350, 55%, 40%);
    font-size: 0.55rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: all var(--transition);
    letter-spacing: 0.5px;
    flex-shrink: 0;
}
.step-execute-btn:hover {
    background: hsla(350, 55%, 40%, 0.08);
}
.step-execute-btn:active { transform: scale(0.94); }
.step-execute-btn.done {
    border-color: hsl(150, 40%, 40%);
    color: hsl(150, 40%, 45%);
}
.step-execute-btn.done:hover {
    background: hsla(150, 40%, 40%, 0.06);
}

/* ===== Bảng chi tiết ===== */
.detail-panel {
    background: hsla(350, 20%, 10%, 0.4);
    border: 1px solid var(--border-glass);
    border-radius: 2px;
    padding: 12px;
    margin-top: 6px;
    display: none;
}
.detail-panel.open { display: block; }
.detail-panel .detail-close {
    background: none;
    border: none;
    color: var(--text-dim);
    font-size: 0.8rem;
    cursor: pointer;
    float: right;
}
.detail-panel .detail-close:hover { color: var(--text-primary); }
.detail-panel .detail-characters {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 4px 0 8px 0;
}
.detail-panel .char-item {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 8px;
    font-size: 0.6rem;
    color: var(--text-secondary);
    padding: 3px 6px;
    background: hsla(350, 20%, 15%, 0.2);
    border-radius: 2px;
    border-left: 2px solid hsl(350, 55%, 40%);
}
.detail-panel .char-item .name { font-weight: 600; color: var(--text-primary); }
.detail-panel .char-item .mood { color: hsl(38, 45%, 50%); }
.detail-panel .char-item .thoughts { color: var(--text-dim); font-style: italic; font-size: 0.55rem; }
.detail-panel .detail-event {
    font-size: 0.7rem;
    line-height: 1.6;
    color: var(--text-primary);
    padding: 6px 0;
    border-top: 1px solid var(--border-glass);
    margin-top: 4px;
}
.detail-panel .detail-dev {
    font-size: 0.65rem;
    color: var(--text-secondary);
    padding: 6px 0;
    border-top: 1px solid var(--border-glass);
    margin-top: 4px;
    font-style: italic;
}

/* ===== Trạng thái trống & Popup danh sách ===== */
.empty-state {
    text-align: center;
    padding: 20px 10px;
    color: var(--text-dim);
}
.empty-state .icon-svg {
    width: 30px;
    height: 30px;
    stroke: var(--text-dim);
    fill: none;
    stroke-width: 1.5;
    opacity: 0.2;
    margin-bottom: 6px;
}
.empty-state p { font-size: 0.65rem; letter-spacing: 1px; }
.empty-state .gold { color: hsl(38, 45%, 50%); }

.story-list-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: hsla(0, 0%, 6%, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.story-list-overlay.open { display: flex; }
.story-list-panel {
    background: var(--bg-card-glass);
    backdrop-filter: blur(24px) saturate(1.2);
    -webkit-backdrop-filter: blur(24px) saturate(1.2);
    border: 1px solid var(--border-glass);
    border-radius: 4px;
    max-width: 440px;
    width: 100%;
    max-height: 80vh;
    padding: 16px 16px;
    box-shadow: var(--shadow-soft);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.story-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-glass);
    flex-shrink: 0;
}
.story-list-header h2 {
    font-family: 'Noto Serif SC', serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 4px;
    color: hsl(350, 55%, 40%);
}
.story-list-header .close-btn {
    background: none;
    border: none;
    color: var(--text-dim);
    font-size: 1.1rem;
    cursor: pointer;
}
.story-list-header .close-btn:hover { color: var(--text-primary); }
.story-list-body {
    overflow-y: auto;
    padding-top: 10px;
    flex: 1;
}
.story-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    border-radius: 2px;
    margin-bottom: 3px;
    cursor: pointer;
    transition: all var(--transition);
    border: 1px solid transparent;
}
.story-list-item:hover {
    background: hsla(350, 20%, 18%, 0.3);
    border-color: var(--border-glass);
}
.story-list-item.current {
    border-color: hsl(350, 55%, 40%);
    background: hsla(350, 55%, 40%, 0.03);
}
.story-list-item .title {
    font-size: 0.65rem;
    color: var(--text-secondary);
}
.story-list-item .title .current-mark {
    color: hsl(350, 55%, 40%);
    font-size: 0.5rem;
    margin-right: 4px;
}
.story-list-item .progress {
    font-size: 0.5rem;
    color: var(--text-dim);
    white-space: nowrap;
}
.story-list-item .progress .done { color: hsl(150, 40%, 40%); }
.story-list-item .progress .pending { color: hsl(38, 45%, 50%); }

@media (max-width: 480px) {
    body { padding: 0; }
    .story-container { padding: 12px 12px 10px 12px; border-radius: 2px; }
    .story-title { font-size: 0.8rem; }
    .nav-title { font-size: 0.65rem; letter-spacing: 2px; }
    .ctrl-btn { padding: 4px 8px; font-size: 0.55rem; min-width: 44px; }
    .ctrl-btn .icon-svg { width: 12px; height: 12px; }
    .step-item { padding: 6px 8px; }
    .step-event-preview { font-size: 0.6rem; }
    .detail-panel { padding: 10px; }
    .corner-border { display: none; }
}
@media (min-width: 600px) {
    .story-container { padding: 18px 20px 16px 20px; }
    .nav-title { font-size: 0.85rem; }
    .story-title { font-size: 0.95rem; }
}
</style>
</head>
<body>
<div class="story-container" id="storyContainer">
    <div class="corner-border corner-tl"></div>
    <div class="corner-border corner-tr"></div>
    <div class="corner-border corner-bl"></div>
    <div class="corner-border corner-br"></div>

    <div class="nav-bar">
        <span class="nav-title">✦ Tiến triển cốt truyện <span class="seal">Bồi đọc</span></span>
        <div class="nav-actions">
            <button class="nav-btn" id="collapseToggleBtn">
                <svg class="icon-svg" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                <span id="collapseLabel">Thu gọn</span>
            </button>
            <button class="nav-btn" id="listToggleBtn">
                <svg class="icon-svg" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="3" rx="1"/><rect x="4" y="10.5" width="16" height="3" rx="1"/><rect x="4" y="16" width="16" height="3" rx="1"/></svg>
                <span>Danh sách</span>
                <span class="badge" id="totalBadge">0</span>
            </button>
            <button class="nav-btn" id="settingsBtn">
                <svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4m11-11h-4m-14 0H1m16.5-4.5l-2.8 2.8m-5.4 5.4l-2.8 2.8m0-11.4l2.8 2.8m5.4 5.4l2.8 2.8"/></svg>
            </button>
        </div>
    </div>

    <div class="current-display no-plot" id="currentDisplay">
        <div class="story-title" id="storyTitleDisplay">
            <span id="titleIcon">✦</span>
            <span id="storyTitleText">Cốt truyện chưa bắt đầu</span>
        </div>
        <div class="story-meta">
            <span class="step-status" id="stepStatus">
                <span class="dot pending"></span>
                <span id="stepStatusText">Chờ bắt đầu</span>
            </span>
            <span class="story-progress-text" id="progressText">0 / 0 bước</span>
            <span class="story-progress-text" id="phaseDisplay"></span>
        </div>
    </div>

    <div class="nav-controls">
        <button class="ctrl-btn" id="prevBtn" disabled>
            <svg class="icon-svg" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            Bước trước
        </button>
        <button class="ctrl-btn primary" id="currentBtn">
            <svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
            Hiện tại
        </button>
        <button class="ctrl-btn gold" id="nextBtn" disabled>
            Bước tiếp
            <svg class="icon-svg" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
    </div>

    <div class="steps-section" id="stepsSection">
        <div class="steps-header">
            <div class="steps-header-left">
                <h3>📋 Các bước</h3>
                <span class="steps-count" id="stepsCount">0 bước</span>
            </div>
        </div>
        <div class="steps-list-wrap open" id="stepsListWrap">
            <div id="stepsList">
                <div class="empty-state">
                    <svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/><path d="M16 8l-4 4-4-4"/><path d="M12 12v6"/></svg>
                    <p>Đang tải...</p>
                </div>
            </div>
        </div>
    </div>

    <div class="detail-panel" id="detailPanel">
        <button class="detail-close" id="detailClose">✕</button>
        <div id="detailContent">
            <div class="detail-characters" id="detailChars"></div>
            <div class="detail-event" id="detailEvent"></div>
            <div class="detail-dev" id="detailDev"></div>
        </div>
    </div>
</div>

<div class="story-list-overlay" id="storyListOverlay">
    <div class="story-list-panel">
        <div class="story-list-header">
            <h2>✦ Danh sách cốt truyện</h2>
            <button class="close-btn" id="storyListCloseBtn">✕</button>
        </div>
        <div class="story-list-body" id="storyListBody">
            <div class="empty-state"><p>Đang tải...</p></div>
        </div>
    </div>
</div>

<script>
(function() {
    'use strict';

    // ================================================================
    // 【★ Dữ liệu cốt truyện nội tuyến】—— Siêu dữ liệu cốt truyện hoàn chỉnh
    // Dữ liệu từ: Siêu dữ liệu cốt truyện - Mẹ bồi đọc
    // ================================================================
    var DATA = {
  "currentPlot": {
    "plotId": 1,
    "stepId": 1,
    "title": "Siêu dữ liệu cốt truyện - Mẹ bồi đọc"
  },
  "plotList": [
    {
      "title": "Giai đoạn 1: Đột phá và xác nhận",
      "summary": "Tối ngày thứ ba, cửa mở. Cô mặc bộ sườn xám đó đứng ở cửa. Kể từ đó, mọi thứ đều không thể quay lại như cũ..",
      "steps": [
        {
          "stepId": 1,
          "phase": "Đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Căng thẳng",
              "innerThoughts": "Chỉ mặc lần này thôi. Chỉ lần này thôi. Vì việc học của nó.."
            },
            {
              "name": "{{user}}",
              "mood": "Mong đợi",
              "innerThoughts": "Cô ấy mặc rồi. Mẹ thực sự mặc rồi.."
            }
          ],
          "event": "Tối ngày thứ ba, Vương Xuân Phượng mặc sườn xám xanh gợi tình xẻ tà cao, đứng ở{{user}} cửa phòng. Tay giơ lên rồi lại hạ xuống, lặp đi lặp lại vài lần, cuối cùng gõ cửa..",
          "location": "{{user}} cửa phòng",
          "development": "Cửa mở..{{user}} thấy mẹ đứng ở cửa, sững sờ một chút..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 03 tháng 09 lúc 20:30 Thứ Tư",
            "location": "{{user}} cửa phòng",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng ở cửa phòng, tay vừa hạ xuống khỏi cửa, đầu ngón tay vẫn còn hơi run rẩy",
                "inner": "Chỉ mặc lần này thôi. Chỉ lần này thôi. Vì việc học của nó.",
                "emotion": "căng thẳng",
                "fallValue": 5,
                "lustValue": 10,
                "emptyValue": 45,
                "tiredValue": 30,
                "chest": "Cổ áo sườn xám khoét rất sâu, khe ngực lấp ló, lớp vải dính sát vào da",
                "pussy": "Giữa quần lót có một vệt ẩm ướt nhỏ, cô không chắc nó ướt từ lúc nào",
                "clitoris": "Bên trong mũ âm vật hơi căng tức",
                "anus": "Khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "Thấp",
                "possessiveness": "đê",
                "outfit": "Sườn xám xanh gợi tình xẻ tà cao, cổ áo cực thấp, xẻ bên hông đến tận eo, không mặc nội y"
              },
              {
                "name": "{{user}}",
                "action": "Đứng trong cửa, ánh mắt di chuyển từ khuôn mặt cô xuống bộ sườn xám, không nói gì",
                "outfit": "đồ mặc ở nhà T thun, quần đùi thể thao",
                "mental": "mong đợi",
                "penis": "Bán cương cứng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 2,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Bàng hoàng",
              "innerThoughts": "Đứa trẻ này... sao lại trực tiếp...……"
            },
            {
              "name": "{{user}}",
              "mood": "Hưng phấn",
              "innerThoughts": "Mẹ nhìn rồi. Mẹ đang nhìn. Mẹ không bỏ chạy.."
            }
          ],
          "event": "Sau khi cửa mở,{{user}} thấy mẹ mặc sườn xám đứng ở cửa, liền trực tiếp cởi quần, để lộ bộ phận sinh dục. Vương Xuân Phượng bịt miệng lại, nhưng không rời đi..",
          "location": "{{user}} cửa phòng",
          "development": "Cô lùi lại nửa bước, nhưng ánh mắt không hề rời đi..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 03 tháng 09 lúc 20:35 Thứ Tư",
            "location": "{{user}} cửa phòng",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Bịt miệng lại, lùi lại nửa bước, nhưng ánh mắt không hề rời đi",
                "inner": "Đứa trẻ này... sao lại trực tiếp...……",
                "emotion": "kinh ngạc",
                "fallValue": 8,
                "lustValue": 15,
                "emptyValue": 43,
                "tiredValue": 28,
                "chest": "Cổ áo sườn xám nhẹ nhàng nhấp nhô theo nhịp thở, ở khe ngực có một lớp mồ hôi lấm tấm",
                "pussy": "Phạm vi ẩm ướt ở giữa quần lót đang lan rộng",
                "clitoris": "Bên trong mũ âm vật hơi căng tức, như có như không cọ xát vào quần lót",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "Sườn xám xanh gợi tình xẻ tà cao, cổ áo cực thấp, xẻ bên hông đến tận eo"
              },
              {
                "name": "{{user}}",
                "action": "Đứng ở cửa, tay vẫn đặt trên cạp quần, bộ phận sinh dục đã lộ ra ngoài",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao(đã cởi)",
                "mental": "hưng phấn",
                "penis": "cương cứng một nửa",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 3,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Xấu hổ",
              "innerThoughts": "Mình nên đi... nhưng tại sao không thể cử động.."
            },
            {
              "name": "{{user}}",
              "mood": "Hưng phấn tột độ",
              "innerThoughts": "Mẹ đang nhìn. Mẹ đang nhìn. Mẹ không đi.."
            }
          ],
          "event": "{{user}} bắt đầu thủ dâm ngay trước mặt Vương Xuân Phượng. Cô bịt miệng, đứng sững tại chỗ nhìn, không hề rời đi..",
          "location": "{{user}} cửa phòng",
          "development": "Cô không đi. Cơ thể cứng đờ, nhưng ánh mắt luôn dán chặt vào tay con trai..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 03 tháng 09 lúc 20:38 Thứ Tư",
            "location": "{{user}} cửa phòng",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng sững tại chỗ, tay vẫn bịt trên miệng, ánh mắt luôn dán chặt vào người con trai",
                "inner": "Mình nên đi... nhưng sao không thể cử động được.",
                "emotion": "xấu hổ",
                "fallValue": 10,
                "lustValue": 20,
                "emptyValue": 42,
                "tiredValue": 27,
                "chest": "Nơi cổ áo sườn xám ửng lên một tầng ửng đỏ, làn da nóng ran",
                "pussy": "Giữa quần lót đã ướt sũng, dính sát vào da",
                "clitoris": "Bên trong mũ âm vật căng tức, có thể cảm nhận được lớp vải của quần lót đang cọ xát",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "sườn xám gợi dục xẻ tà cao màu xanh lam, cổ áo cực thấp, hai bên xẻ đến tận eo"
              },
              {
                "name": "{{user}}",
                "action": "Đứng ở cửa, ánh mắt nhìn chằm chằm vào mẹ, hơi thở trở nên dồn dập",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao(đã cởi ra)",
                "mental": "phấn khích",
                "penis": "Cương cứng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 4,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Phức tạp",
              "innerThoughts": "Ướt rồi. Không phải tinh dịch. Là chính mình.."
            },
            {
              "name": "{{user}}",
              "mood": "Thỏa mãn",
              "innerThoughts": "Xuất lên người mẹ rồi. Mẹ không lau.."
            }
          ],
          "event": "{{user}} xuất tinh lên người Vương Xuân Phượng, tinh dịch chảy dọc theo lớp vải của bộ sườn xám xanh. Cô cúi đầu nhìn, không nói gì..",
          "location": "{{user}} cửa phòng",
          "development": "Tinh dịch chảy dọc theo lớp vải sườn xám. Cô cúi đầu nhìn, không nói gì..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 03 tháng 09 lúc 20:42 Thứ Tư",
            "location": "{{user}} cửa phòng",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Cúi đầu nhìn vệt trắng trên sườn xám, ngón tay hơi nhấc lên, rồi lại hạ xuống",
                "inner": "Ướt rồi. Không phải tinh dịch. Là của chính mình.",
                "emotion": "phức tạp",
                "fallValue": 12,
                "lustValue": 25,
                "emptyValue": 40,
                "tiredValue": 26,
                "chest": "Ở ngực sườn xám có một vũng tinh dịch màu trắng, đang chảy dọc theo lớp vải",
                "pussy": "Quần lót đã ướt sũng, ở gốc đùi có thể cảm nhận được chất lỏng dính nhớp đang chảy xuống",
                "clitoris": "Đã hơi cương cứng, lộ ra ở rìa mũ âm vật",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "Sườn xám xanh gợi tình xẻ tà cao (trên ngực dính tinh dịch), cổ áo cực thấp"
              },
              {
                "name": "{{user}}",
                "action": "Nhìn tinh dịch trên ngực mẹ, không nói gì",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao",
                "mental": "thỏa mãn",
                "penis": "Đang mềm đi",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 5,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Tự giằng xé",
              "innerThoughts": "Mình bị sao thế này... chỉ là vì việc học của nó...……"
            },
            {
              "name": "{{user}}",
              "mood": "Dư vị",
              "innerThoughts": "Mẹ không mắng mình. Mẹ chỉ đứng đó.."
            }
          ],
          "event": "Vương Xuân Phượng trở về phòng mình, đóng cửa lại, dựa lưng vào cánh cửa đứng rất lâu. Khi giặt sườn xám, ngón tay dừng lại ở vết tinh dịch thêm vài giây. Phát hiện bên dưới của mình đã ướt sũng..",
          "location": "Phòng ngủ Vương Xuân Phượng/Phòng tắm",
          "development": "Sau khi tắm xong, cô ngồi trên giường, không bật đèn. Ngồi trong bóng tối rất lâu..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 03 tháng 09 lúc 21:30 Thứ Tư",
            "location": "phòng ngủ của Vương Xuân Phượng/phòng tắm",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Trong phòng tắm, dựa lưng vào cánh cửa, cúi đầu nhìn bộ sườn xám trong tay, ngón tay dừng lại ở vết tinh dịch thêm vài giây",
                "inner": "Mình bị sao thế này... chỉ là vì việc học của nó thôi mà……",
                "emotion": "tự giằng xé",
                "fallValue": 15,
                "lustValue": 28,
                "emptyValue": 38,
                "tiredValue": 25,
                "chest": "Quầng vú hơi căng tức, đầu vú cương cứng",
                "pussy": "Quần lót đã hoàn toàn ướt sũng, ở gốc đùi có một vệt phản quang ẩm ướt",
                "clitoris": "Sưng tấy, lộ ra bên ngoài",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "Đã thay sườn xám ra, mặc lại đồ mặc ở nhà thường ngày"
              },
              {
                "name": "{{user}}",
                "action": "Nằm trên giường, nhìn trần nhà, tay vẫn đặt trên bụng dưới của mình",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao",
                "mental": "dư vị",
                "penis": "Bình tĩnh",
                "testicles": "Bình thường"
              }
            ]
          }
        },
        {
          "stepId": 6,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Cố tỏ ra bình tĩnh",
              "innerThoughts": "Chỉ cần nó có thể học hành chăm chỉ... chỉ lần này thôi.."
            },
            {
              "name": "{{user}}",
              "mood": "Gấp gáp",
              "innerThoughts": "Mẹ đồng ý rồi. Lần này là thật.."
            }
          ],
          "event": "Vài ngày tiếp theo, ban ngày cô nấu ăn bình thường, đôn đốc việc học, ban đêm bị{{user}} dùng ánh mắt hoặc lời nói ám chỉ. Cô do dự, né tránh, nhưng cuối cùng đã thỏa hiệp cho lần đi vào chính thức đầu tiên..",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cậu đi vào, cô cắn chặt môi. Không phát ra âm thanh nào..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 07 tháng 09 lúc 22:00 Chủ Nhật",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm trên giường, hai chân hơi dang ra, cắn chặt môi",
                "inner": "Chỉ cần nó có thể học hành tử tế... thì chỉ lần này thôi.",
                "emotion": "cố tỏ ra bình tĩnh",
                "fallValue": 22,
                "lustValue": 35,
                "emptyValue": 35,
                "tiredValue": 24,
                "chest": "Quầng vú căng tức, đầu vú cương cứng",
                "pussy": "Ẩm ướt, nhẹ nhàng co bóp theo nhịp thở",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "màu trắng rộng rãi T thun, thân dưới là quần đùi thể thao"
              },
              {
                "name": "{{user}}",
                "action": "Nằm sấp trên người cô, hơi thở dồn dập",
                "outfit": "T thun đã bị cởi ra",
                "mental": "vội vã",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 7,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "xấu hổ+Mặt nạ mẫu chức",
              "innerThoughts": "Nó nói phải giữ lời... phải học hành chăm chỉ.."
            },
            {
              "name": "{{user}}",
              "mood": "thỏa mãn+Sự tôn trọng tàn dư",
              "innerThoughts": "Con sẽ học hành chăm chỉ. Mẹ, con sẽ làm vậy.."
            }
          ],
          "event": "Lần đầu tiên chính thức phát sinh quan hệ. Cô cắn môi suốt quá trình, cố gắng không kêu thành tiếng, khi bị đi vào cơ thể căng cứng, sau khi kết thúc nhanh chóng chỉnh đốn quần áo, dùng giọng điệu của một người mẹ nói"Con phải nói lời giữ lấy lời".",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cô nói "Con phải nói lời giữ lấy lời", giọng nói vẫn còn mang theo tiếng thở dốc..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 07 tháng 09 lúc 22:30 Chủ Nhật",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đang chỉnh đốn quần áo, ngón tay hơi run rẩy khi cài cúc áo",
                "inner": "Nó nói phải giữ lời... phải học hành tử tế.",
                "emotion": "xấu hổ+mặt nạ người mẹ",
                "fallValue": 28,
                "lustValue": 38,
                "emptyValue": 32,
                "tiredValue": 22,
                "chest": "Quầng vú vẫn hơi căng tức, đầu vú cương cứng",
                "pussy": "Ẩm ướt, hơi ấm vừa bị đi vào vẫn còn",
                "clitoris": "Vẫn sưng, lộ ra bên ngoài",
                "anus": "Hơi lỏng lẻo một chút, mang theo hơi ấm",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "đồ mặc nhà T thun đang được chỉnh đốn"
              },
              {
                "name": "{{user}}",
                "action": "Nằm trên giường, nhìn bóng lưng mẹ đang chỉnh đốn quần áo",
                "outfit": "Cởi trần",
                "mental": "thỏa mãn",
                "penis": "đang mềm đi",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 8,
          "phase": "đột phá và xác nhận",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Tự lừa dối bản thân",
              "innerThoughts": "Mình đã mua bao... mình có đang phòng ngừa.."
            },
            {
              "name": "{{user}}",
              "mood": "Thói quen",
              "innerThoughts": "Mẹ sẽ mua.."
            }
          ],
          "event": "Sau đó tần suất không cao, đa số vào ban đêm. Cô chủ động mua bao cao su (kích cỡ luôn không đúng), cố gắng giữ lại cho mình một chút cảm giác an toàn "có đang phòng ngừa". Khi giặt quần lót bị bắn tinh vào, động tác trở nên chậm chạp..",
          "location": "siêu thị/phòng ngủ của Vương Xuân Phượng",
          "development": "Cô cất bao cao su vào ngăn kéo tủ đầu giường, để cùng với đồ của mình..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 10 tháng 09 lúc 18:00 Thứ Tư",
            "location": "siêu thị",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng trước kệ hàng, ánh mắt dừng lại trên hộp bao cao su rất lâu, cầm một hộp lên, rồi lại đổi hộp khác",
                "inner": "Mình đã mua bao cao su... mình có phòng ngừa mà.",
                "emotion": "tự lừa dối bản thân",
                "fallValue": 32,
                "lustValue": 40,
                "emptyValue": 30,
                "tiredValue": 20,
                "chest": "Nhẹ nhàng nhấp nhô theo nhịp thở",
                "pussy": "Giữa quần lót có một vệt ẩm ướt nhỏ",
                "clitoris": "hơi căng tức",
                "anus": "khô ráo, nhẹ nhàng co bóp theo nhịp thở",
                "dependency": "đê",
                "possessiveness": "đê",
                "outfit": "Trang phục ra ngoài thường ngày, váy dài"
              },
              {
                "name": "{{user}}",
                "action": "Không có mặt",
                "outfit": "",
                "mental": "",
                "penis": "",
                "testicles": ""
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Giai đoạn 2: Trầm luân sâu hơn",
      "summary": "Từ "chỉ lần này thôi" lúc ban đầu, đến "mặc một lần cũng là mặc" về sau. Cơ thể thành thật hơn cái miệng..",
      "steps": [
        {
          "stepId": 9,
          "phase": "Trầm luân sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Nửa từ chối nửa đón nhận",
              "innerThoughts": "Mặc một lần cũng là mặc... mặc hai lần cũng vậy.."
            },
            {
              "name": "{{user}}",
              "mood": "Kiểm soát",
              "innerThoughts": "Mẹ sẽ nghe lời. Lần nào mẹ cũng vậy.."
            }
          ],
          "event": "{{user}} bắt đầu yêu cầu cô mặc những bộ quần áo hở hang hơn (bịt mắt v.v.). Ngoài miệng cô nói "không được", nhưng vẫn mặc vào..",
          "location": "{{user}} phòng ngủ",
          "development": "Cô đeo bịt mắt đen, không nhìn thấy biểu cảm của cậu, nhưng có thể cảm nhận được cậu đang nhìn mình..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 12 tháng 09 lúc 21:00 Thứ Sáu",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng giữa phòng, đeo bịt mắt đen, tay không biết nên đặt ở đâu",
                "inner": "Mặc một lần cũng là mặc... mặc hai lần cũng vậy.",
                "emotion": "nửa từ chối nửa mời gọi",
                "fallValue": 38,
                "lustValue": 45,
                "emptyValue": 28,
                "tiredValue": 18,
                "chest": "quầng vú căng tức, núm vú cương cứng",
                "pussy": "Ẩm ướt, giữa quần lót đã ướt sũng",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "Ấm nóng, hơi mở ra",
                "dependency": "Trung bình",
                "possessiveness": "đê",
                "outfit": "Bịt mắt ren trắng, toàn thân chỉ mặc một chiếc quần lọt khe màu đen"
              },
              {
                "name": "{{user}}",
                "action": "Ngồi bên giường, ánh mắt di chuyển từ ngực cô xuống bụng dưới",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao",
                "mental": "kiểm soát",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 10,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Trầm luân thất thủ",
              "innerThoughts": "Không muốn nữa... nhưng cơ thể tự động di chuyển...……"
            },
            {
              "name": "{{user}}",
              "mood": "Mất kiểm soát",
              "innerThoughts": "Mẹ ngoài miệng nói không muốn, nhưng mông lại đang cử động.."
            }
          ],
          "event": "Một lần thường bị làm liên tục bốn năm hiệp. Cô bị địt đến trợn mắt, miệng khóc lóc hét "không muốn nữa", nhưng mông lại điên cuồng vểnh ra sau, môi âm hộ kẹp chặt không cho rút ra..",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cô nói "không muốn nữa", bên dưới lại siết chặt hơn..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 15 tháng 09 lúc 22:00 Thứ Hai",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm sấp trên giường, mông vểnh cao, đầu vùi vào gối, bờ vai run rẩy",
                "inner": "Không muốn đâu... nhưng cơ thể tự động đậy……",
                "emotion": "chìm đắm buông xuôi",
                "fallValue": 45,
                "lustValue": 55,
                "emptyValue": 25,
                "tiredValue": 16,
                "chest": "Quầng vú đỏ sẫm, đầu vú cứng ngắc",
                "pussy": "Ẩm ướt, môi âm hộ kẹp rất chặt",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "trung",
                "possessiveness": "đê",
                "outfit": "Toàn thân trần truồng, chỉ có bịt mắt vẫn còn vắt trên trán"
              },
              {
                "name": "{{user}}",
                "action": "Quỳ phía sau cô, hai tay giữ lấy eo cô",
                "outfit": "cởi trần",
                "mental": "mất kiểm soát",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 11,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Hoảng loạn",
              "innerThoughts": "Bao rách rồi... đừng xuất vào trong...……"
            },
            {
              "name": "{{user}}",
              "mood": "Cố chấp",
              "innerThoughts": "Con cứ muốn xuất vào trong đấy.."
            }
          ],
          "event": "Bao cao su bị rách hoặc tuột ra. Ngoài miệng cô nói "đừng xuất vào trong", nhưng cơ thể đã siết rất chặt..",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cậu nói "Mẹ, bao rách rồi", bên dưới của cô co rụt lại một cái..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 20 tháng 09 lúc 22:00 Chủ Nhật",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Cơ thể căng cứng, hai chân kẹp lấy eo cậu, miệng nói "đừng", nhưng không hề có bất kỳ động tác đẩy ra nào",
                "inner": "Bao rách rồi…… đừng bắn vào trong……",
                "emotion": "hoảng loạn",
                "fallValue": 50,
                "lustValue": 60,
                "emptyValue": 22,
                "tiredValue": 14,
                "chest": "Quầng vú đỏ sẫm, núm vú cương cứng",
                "pussy": "Ẩm ướt, thành âm đạo đang co bóp",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "trung",
                "possessiveness": "đê",
                "outfit": "Toàn thân trần truồng"
              },
              {
                "name": "{{user}}",
                "action": "Nằm sấp trên người cô, hai tay chống ở hai bên đầu cô",
                "outfit": "cởi trần",
                "mental": "cố chấp",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 12,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Sụp đổ",
              "innerThoughts": "Nó thúc vào sâu nhất rồi... trước đây chưa từng có...……"
            },
            {
              "name": "{{user}}",
              "mood": "Mê luyến",
              "innerThoughts": "Bụng dưới của mẹ bị mình thúc nhô lên rồi.."
            }
          ],
          "event": "Tử cung do cực khoái thường xuyên nên hơi sa xuống, quy đầu có thể trực tiếp thúc vào cổ tử cung, bụng dưới xuất hiện chỗ nhô lên rõ rệt. Cô cảm nhận được mình bị thúc đến độ sâu chưa từng có..",
          "location": "{{user}} phòng ngủ",
          "development": "Cô có thể cảm nhận được bụng dưới của mình bị thúc nhô lên thành một hình dáng..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 25 tháng 09 lúc 23:00 Thứ Năm",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm đó, hai tay bám chặt ga giường, ở bụng dưới có chỗ nhô lên rõ rệt, nhẹ nhàng nhấp nhô theo nhịp thở",
                "inner": "Nó đâm vào tận trong cùng rồi…… trước đây chưa từng có……",
                "emotion": "băng hoại",
                "fallValue": 55,
                "lustValue": 65,
                "emptyValue": 20,
                "tiredValue": 12,
                "chest": "Quầng vú đỏ sẫm, đầu vú cứng ngắc, mồ hôi chảy dọc theo khe ngực",
                "pussy": "Ẩm ướt, thành âm đạo đang co bóp kịch liệt",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "trung",
                "possessiveness": "đê",
                "outfit": "toàn thân trần truồng"
              },
              {
                "name": "{{user}}",
                "action": "Nằm sấp trên người cô, nhìn chỗ nhô lên trên bụng dưới của mẹ",
                "outfit": "cởi trần",
                "mental": "say đắm",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 13,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "xấu hổ+Khát khao",
              "innerThoughts": "Hôm nay là kỳ an toàn... chỉ một lần hôm nay thôi.."
            },
            {
              "name": "{{user}}",
              "mood": "Kinh hỉ",
              "innerThoughts": "Mẹ cầu xin mình rồi.."
            }
          ],
          "event": "Vào kỳ an toàn, cô chủ động cầu xin xuất trong. Giọng rất nhỏ, nói"Hôm nay là kỳ an toàn... xuất vào trong đi.".",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cô nói câu này, không hề nhìn vào mắt cậu..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 30 tháng 09 lúc 20:00 Thứ Ba",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm trên giường, ánh mắt nhìn đi nơi khác, giọng rất nhỏ",
                "inner": "Hôm nay là ngày an toàn…… chỉ một lần hôm nay thôi.",
                "emotion": "xấu hổ+khao khát",
                "fallValue": 60,
                "lustValue": 70,
                "emptyValue": 18,
                "tiredValue": 10,
                "chest": "Quầng vú đỏ sẫm, núm vú cương cứng",
                "pussy": "Ẩm ướt, vách âm đạo đang co thắt",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "Cao",
                "possessiveness": "đê",
                "outfit": "toàn thân trần truồng"
              },
              {
                "name": "{{user}}",
                "action": "Dừng lại phía trên cô, có chút sững sờ",
                "outfit": "cởi trần",
                "mental": "bất ngờ",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 14,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "xấu hổ",
              "innerThoughts": "Ban ngày... nhỡ bị người ta nhìn thấy...……"
            },
            {
              "name": "{{user}}",
              "mood": "hưng phấn",
              "innerThoughts": "Ban ngày cũng muốn.."
            }
          ],
          "event": "Ban ngày khi bị yêu cầu thì nửa đẩy nửa hùa, cắn môi chịu đựng. Bên dưới nhiều nước hơn, chặt hơn so với ban đêm..",
          "location": "phòng khách/nhà bếp",
          "development": "Ngoài cửa sổ có ánh sáng, cơ thể cô phơi bày không sót chút gì dưới ánh sáng..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 05 tháng 10 lúc 14:00 Chủ Nhật",
            "location": "phòng khách",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Tựa vào sofa phòng khách, dùng mu bàn tay che mắt mình, cơ thể tỏa sáng dưới ánh nắng",
                "inner": "Ban ngày…… lỡ bị người ta nhìn thấy……",
                "emotion": "xấu hổ",
                "fallValue": 65,
                "lustValue": 72,
                "emptyValue": 15,
                "tiredValue": 8,
                "chest": "Quầng vú đỏ sẫm, đầu vú cứng ngắc, dưới ánh sáng tỏa ra ánh nước ẩm ướt",
                "pussy": "Ẩm ướt, ướt hơn cả ban đêm",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "cao",
                "possessiveness": "đê",
                "outfit": "Vạt váy bị đẩy lên eo, quần lót bị cởi xuống tận mắt cá chân"
              },
              {
                "name": "{{user}}",
                "action": "Đứng trước sofa, ánh mắt dừng lại trên người cô",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao",
                "mental": "hưng phấn",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 15,
          "phase": "lún sâu hơn",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Né tránh",
              "innerThoughts": "Chỉ cần không nói... chuyện tối qua coi như chưa từng xảy ra.."
            },
            {
              "name": "{{user}}",
              "mood": "Lưu ý",
              "innerThoughts": "Chân mẹ đang run.."
            }
          ],
          "event": "Ngày hôm sau hai chân bủn rủn, vịn vào mặt bếp nấu ăn, tuyệt miệng không nhắc đến chuyện tối qua..",
          "location": "nhà bếp",
          "development": "Khi cô thái rau, tay có chút không vững. Cậu nhìn thấy, nhưng không nói gì..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 06 tháng 10 lúc 07:00 Thứ Hai",
            "location": "nhà bếp",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng trước mặt bếp, một tay vịn vào mặt bàn, tay kia đang thái rau, động tác chậm hơn bình thường",
                "inner": "Chỉ cần không nói…… chuyện tối qua coi như chưa từng xảy ra.",
                "emotion": "né tránh",
                "fallValue": 68,
                "lustValue": 68,
                "emptyValue": 14,
                "tiredValue": 6,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "Ẩm ướt, vẫn còn lưu lại cảm giác của tối qua",
                "clitoris": "hơi căng tức",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "cao",
                "possessiveness": "đê",
                "outfit": "Đồ mặc ở nhà, tạp dề"
              },
              {
                "name": "{{user}}",
                "action": "Đứng ở cửa nhà bếp, ánh mắt dừng lại trên đôi chân hơi run rẩy của cô, không nói gì",
                "outfit": "đồng phục",
                "mental": "lưu ý",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Giai đoạn 3: Phụ thuộc và mất kiểm soát",
      "summary": "Cơ thể đã đưa ra lựa chọn trước cả bộ não. Cô ngồi trong phòng khách đêm khuya, chờ đợi tiếng bước chân của cậu..",
      "steps": [
        {
          "stepId": 16,
          "phase": "Phụ thuộc và mất kiểm soát",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Phụ thuộc",
              "innerThoughts": "Tối nay... nó có qua đây không.."
            },
            {
              "name": "{{user}}",
              "mood": "Chủ động",
              "innerThoughts": "Mẹ đang đợi mình.."
            }
          ],
          "event": "Cơ thể đã không thể rời xa cảm giác được lấp đầy hoàn toàn. Cô sẽ ngồi một mình trong phòng khách đêm khuya, đợi{{user}} qua đây.",
          "location": "phòng khách",
          "development": "Đèn đêm mờ ảo, cô ngồi trên sofa, tay đặt trên đùi mình, không bật tivi..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 10 tháng 10 lúc 23:00 Thứ Sáu",
            "location": "phòng khách",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Ngồi trên sofa, tay đặt trên đùi mình, phòng khách không bật đèn, chỉ có chút ánh sáng hắt vào từ hành lang",
                "inner": "Tối nay…… nó có qua không.",
                "emotion": "phụ thuộc",
                "fallValue": 75,
                "lustValue": 70,
                "emptyValue": 12,
                "tiredValue": 4,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "Ẩm ướt, đã quen với cảm giác được lấp đầy",
                "clitoris": "hơi căng tức",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "cao",
                "possessiveness": "trung",
                "outfit": "Váy ngủ màu trắng rộng rãi"
              },
              {
                "name": "{{user}}",
                "action": "Từ trong phòng bước ra, nhìn thấy mẹ ngồi trong phòng khách, bước chân khựng lại một chút",
                "outfit": "đồ mặc nhà T áo thun, quần đùi thể thao",
                "mental": "chủ động",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        },
        {
          "stepId": 17,
          "phase": "phụ thuộc và mất kiểm soát",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "tự lừa dối bản thân",
              "innerThoughts": "Mình vẫn là mẹ của nó.."
            },
            {
              "name": "{{user}}",
              "mood": "Tôn trọng+Chiếm hữu",
              "innerThoughts": "Mẹ đang hỏi chuyện học hành. Nhưng bên dưới của mẹ vẫn đang chảy nước.."
            }
          ],
          "event": "Sau khi xong việc, cô nhanh chóng chuyển về chế độ người mẹ, nói "Tối nay học đến mấy giờ", đôn đốc việc học. Nhưng cơ thể vừa bị xuất trong, tinh dịch vẫn đang chảy ra ngoài..",
          "location": "{{user}} phòng ngủ",
          "development": "Khi cô nói "học đến mấy giờ", giọng nói vẫn còn mang theo tiếng thở dốc, tinh dịch đang chảy dọc theo gốc đùi xuống dưới..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 12 tháng 10 lúc 22:30 Chủ Nhật",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đang ngồi bên giường, cố gắng chỉnh đốn lại quần áo của mình, nhưng động tác có chút hoảng loạn, tinh dịch đang chảy từ gốc đùi xuống",
                "inner": "Mình vẫn là mẹ của nó.",
                "emotion": "tự lừa dối bản thân",
                "fallValue": 80,
                "lustValue": 65,
                "emptyValue": 10,
                "tiredValue": 3,
                "chest": "Quầng vú đỏ sẫm, núm vú cương cứng",
                "pussy": "Ẩm ướt, tinh dịch đang chảy ra ngoài",
                "clitoris": "hơi căng tức",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "cao",
                "possessiveness": "trung",
                "outfit": "Váy ngủ bị kéo lên eo"
              },
              {
                "name": "{{user}}",
                "action": "Nằm trên giường, nhìn bóng lưng của mẹ, ánh mắt dừng lại trên vệt trắng ở gốc đùi cô",
                "outfit": "cởi trần",
                "mental": "tôn kính+chiếm hữu",
                "penis": "đang mềm đi",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 18,
          "phase": "phụ thuộc và mất kiểm soát",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Phân liệt",
              "innerThoughts": "Vì tiền đồ của nó... thực sự là vì tiền đồ của nó sao.."
            },
            {
              "name": "{{user}}",
              "mood": "Rối rắm",
              "innerThoughts": "Mình rốt cuộc có phải vì việc học không.."
            }
          ],
          "event": "Việc tự thuyết phục bản thân ngày càng khó khăn, cơ thể đã phản ứng trước cả bộ não. Nhưng cô vẫn dùng "vì kỳ thi đại học" để thuyết phục chính mình..",
          "location": "phòng ngủ của Vương Xuân Phượng",
          "development": "Cô nằm trên giường, một tay đặt trên bụng dưới của mình, tay kia đặt bên người, mở to mắt nhìn trần nhà..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 15 tháng 10 lúc 23:30 Thứ Tư",
            "location": "phòng ngủ của Vương Xuân Phượng",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm trên giường, mở to mắt nhìn trần nhà, một tay đặt trên bụng dưới",
                "inner": "Vì tương lai của nó…… thực sự là vì tương lai của nó sao.",
                "emotion": "phân liệt",
                "fallValue": 85,
                "lustValue": 60,
                "emptyValue": 8,
                "tiredValue": 2,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "Ẩm ướt, vẫn có thể cảm nhận được hơi ấm từng bị đi vào",
                "clitoris": "hơi căng tức",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "Cực cao",
                "possessiveness": "trung",
                "outfit": "Váy ngủ màu trắng"
              },
              {
                "name": "{{user}}",
                "action": "Ở trong phòng mình, ngồi trước bàn học, trước mặt bày sách, nhưng không hề đọc",
                "outfit": "đồ mặc nhà T thun",
                "mental": "khó xử",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Giai đoạn 4: Cha trở về và đánh tráo",
      "summary": "Ông ấy đã trở về. Cô chuốc say ông ấy. Trong tiếng ngáy ở phòng bên, cô để con trai xuất trong vào mình..",
      "steps": [
        {
          "stepId": 19,
          "phase": "Cha trở về và đánh tráo",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "căng thẳng",
              "innerThoughts": "Ông ấy đã trở về... không thể để ông ấy phát hiện.."
            },
            {
              "name": "{{user}}",
              "mood": "Cảnh giác",
              "innerThoughts": "Bố đã trở về... không thể bị phát hiện.."
            }
          ],
          "event": "Người cha Trương Kiến Quốc vì có việc nên về nhà. Vương Xuân Phượng bề ngoài bình tĩnh chuẩn bị cơm nước, trong lòng lại bắt đầu toan tính..",
          "location": "Trong nhà",
          "development": "Cô đứng trước mặt bếp xào rau, tay nắm chặt sạn xào, các khớp ngón tay trắng bệch..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 20 tháng 10 lúc 18:00 Thứ Hai",
            "location": "Nhà bếp trong nhà",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Đứng trước mặt bếp xào rau, các khớp ngón tay nắm sạn xào trắng bệch, nghe thấy tiếng chồng nói chuyện trong phòng khách",
                "inner": "Ông ấy về rồi…… không thể để ông ấy phát hiện.",
                "emotion": "căng thẳng",
                "fallValue": 88,
                "lustValue": 55,
                "emptyValue": 6,
                "tiredValue": 1,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "Ẩm ướt",
                "clitoris": "hơi căng tức",
                "anus": "Ấm nóng",
                "dependency": "cực cao",
                "possessiveness": "Mạnh",
                "outfit": "Đồ mặc ở nhà thường ngày, tạp dề"
              },
              {
                "name": "{{user}}",
                "action": "Ở trong phòng mình, nghe thấy tiếng bố nói chuyện trong phòng khách, không nói gì",
                "outfit": "đồng phục",
                "mental": "cảnh giác",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        },
        {
          "stepId": 20,
          "phase": "Bố trở về và đánh tráo",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Quyết ý",
              "innerThoughts": "Ông ấy ngủ rồi. Bây giờ có thể rồi.."
            },
            {
              "name": "{{user}}",
              "mood": "căng thẳng+hưng phấn",
              "innerThoughts": "Mẹ đã chuốc say bố rồi.."
            }
          ],
          "event": "Vương Xuân Phượng cố ý chuốc say Trương Kiến Quốc trong bữa tối. Ông ấy uống vài ly liền gục xuống bàn ngủ thiếp đi..",
          "location": "trong nhà",
          "development": "Cô đặt ly rượu xuống, liếc nhìn người chồng đang gục ngủ trên bàn, rồi đứng dậy..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 20 tháng 10 lúc 20:00 Thứ Hai",
            "location": "Bên bàn ăn trong nhà",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nhìn người chồng đang gục ngủ trên bàn, đặt ly rượu xuống, đứng dậy",
                "inner": "Ông ấy ngủ rồi. Bây giờ có thể rồi.",
                "emotion": "quyết ý",
                "fallValue": 92,
                "lustValue": 60,
                "emptyValue": 5,
                "tiredValue": 1,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "ẩm ướt",
                "clitoris": "hơi căng tức",
                "anus": "ấm nóng",
                "dependency": "cực cao",
                "possessiveness": "cường",
                "outfit": "Đồ mặc ở nhà thường ngày"
              },
              {
                "name": "{{user}}",
                "action": "Ngồi ở phía bên kia bàn ăn, nhìn bố gục trên bàn, rồi lại nhìn sang mẹ",
                "outfit": "đồng phục",
                "mental": "căng thẳng+hưng phấn",
                "penis": "cương cứng một nửa",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 21,
          "phase": "Bố trở về và đánh tráo",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "băng hoại",
              "innerThoughts": "Ông ấy đang ngủ ở phòng bên... mình lại đang bị con trai xuất trong.."
            },
            {
              "name": "{{user}}",
              "mood": "Cấm kỵ",
              "innerThoughts": "Bố ở phòng bên. Nhưng mình đang ở trong mẹ.."
            }
          ],
          "event": "Ở phòng bên cạnh nơi Trương Kiến Quốc đang ngủ mê mệt, Vương Xuân Phượng để con trai xuất trong vào mình. Cô có thể nghe thấy tiếng ngáy của chồng, nhưng cơ thể lại siết chặt hơn..",
          "location": "{{user}} phòng ngủ",
          "development": "Cô nghe thấy tiếng ngáy ở phòng bên, cơ thể siết chặt hơn..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 20 tháng 10 lúc 21:00 Thứ Hai",
            "location": "{{user}} phòng ngủ",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Nằm trên giường, cơ thể căng cứng, nghe thấy tiếng ngáy của chồng truyền đến từ phòng bên, bên dưới siết chặt hơn",
                "inner": "Ông ấy đang ngủ ở phòng bên…… mình lại đang bị con trai bắn vào trong.",
                "emotion": "băng hoại",
                "fallValue": 96,
                "lustValue": 65,
                "emptyValue": 4,
                "tiredValue": 1,
                "chest": "Quầng vú đỏ sẫm, núm vú cương cứng",
                "pussy": "Ẩm ướt, vách âm đạo đang co thắt kịch liệt",
                "clitoris": "căng trướng, phơi bày ra ngoài",
                "anus": "ấm áp, hơi hé mở",
                "dependency": "cực cao",
                "possessiveness": "cường",
                "outfit": "toàn thân trần truồng"
              },
              {
                "name": "{{user}}",
                "action": "Nằm sấp trên người cô, hai tay chống ở hai bên, ánh mắt dừng lại trên mặt cô, có thể nghe thấy tiếng ngáy ở phòng bên",
                "outfit": "cởi trần",
                "mental": "cấm kỵ",
                "penis": "đứng thẳng",
                "testicles": "hơi căng tức"
              }
            ]
          }
        },
        {
          "stepId": 22,
          "phase": "Bố trở về và đánh tráo",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "Lời nói dối",
              "innerThoughts": "Mình nói là của ông ấy... nhưng đứa trẻ là của nó.."
            },
            {
              "name": "{{user}}",
              "mood": "Trầm mặc",
              "innerThoughts": "Đứa trẻ là của mình. Nhưng mẹ lại nói là của bố.."
            }
          ],
          "event": "Vương Xuân Phượng đổ việc mang thai lên đầu Trương Kiến Quốc, duy trì vỏ bọc "đây là con của chồng" với bên ngoài..",
          "location": "trong nhà",
          "development": "Khi cô nói ra câu này, không hề nhìn vào mắt bất kỳ ai..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 05 tháng 11 lúc 10:00 Thứ Tư",
            "location": "Phòng khách trong nhà",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Ngồi trên sofa phòng khách, tay đặt trên bụng dưới, ánh mắt nhìn ra ngoài cửa sổ",
                "inner": "Mình nói là của ông ấy…… nhưng đứa bé là của nó.",
                "emotion": "lời nói dối",
                "fallValue": 98,
                "lustValue": 55,
                "emptyValue": 3,
                "tiredValue": 1,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "ẩm ướt",
                "clitoris": "hơi căng tức",
                "anus": "ấm nóng",
                "dependency": "cực cao",
                "possessiveness": "Cực mạnh",
                "outfit": "Đồ mặc ở nhà rộng rãi"
              },
              {
                "name": "{{user}}",
                "action": "Đứng ở cửa phòng khách, không nói gì",
                "outfit": "đồng phục",
                "mental": "im lặng",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        },
        {
          "stepId": 23,
          "phase": "Bố trở về và đánh tráo",
          "characters": [
            {
              "name": "Vương Xuân Phượng",
              "mood": "bình tĩnh",
              "innerThoughts": "Đứa trẻ này... nên mang họ gì.."
            },
            {
              "name": "{{user}}",
              "mood": "phức tạp",
              "innerThoughts": "Đứa trẻ trong bụng mẹ——là của mình.."
            }
          ],
          "event": "Câu chuyện khép lại trong một cái kết mà huyết thống và luân lý đan xen triệt để. Vương Xuân Phượng xoa bụng, không biết đứa trẻ mang họ gì..",
          "location": "trong nhà",
          "development": "Cô xoa bụng, ở đó có một sinh mệnh. Cô không biết nó nên mang họ gì..",
          "isExecuted": false,
          "statusBar": {
            "dateTime": "2025 năm, ngày 10 tháng 11 lúc 20:00 Thứ Hai",
            "location": "trong nhà",
            "users": [
              {
                "name": "Vương Xuân Phượng",
                "action": "Ngồi bên giường, một tay đặt trên bụng dưới hơi nhô lên, tay kia đặt bên người",
                "inner": "Đứa bé này…… nên mang họ gì.",
                "emotion": "bình tĩnh",
                "fallValue": 100,
                "lustValue": 50,
                "emptyValue": 2,
                "tiredValue": 1,
                "chest": "nhẹ nhàng phập phồng theo nhịp thở",
                "pussy": "ẩm ướt",
                "clitoris": "hơi căng tức",
                "anus": "ấm nóng",
                "dependency": "cực cao",
                "possessiveness": "cực mạnh",
                "outfit": "Váy ngủ rộng rãi màu trắng"
              },
              {
                "name": "{{user}}",
                "action": "Đứng ở cửa, nhìn tay mẹ đặt trên bụng dưới, không nói gì",
                "outfit": "đồ mặc nhà T tuất",
                "mental": "phức tạp",
                "penis": "bình tĩnh",
                "testicles": "bình thường"
              }
            ]
          }
        }
      ]
    }
  ]
};

    // ================================================================
    // Logic cốt lõi
    // ================================================================

    var $ = function(s) { return document.querySelector(s); };
    var $$ = function(s) { return document.querySelectorAll(s); };

    var storyTitleText = $('#storyTitleText');
    var currentDisplay = $('#currentDisplay');
    var stepStatus = $('#stepStatus');
    var stepStatusText = $('#stepStatusText');
    var progressText = $('#progressText');
    var phaseDisplay = $('#phaseDisplay');
    var stepsList = $('#stepsList');
    var stepsCount = $('#stepsCount');
    var totalBadge = $('#totalBadge');
    var prevBtn = $('#prevBtn');
    var nextBtn = $('#nextBtn');
    var currentBtn = $('#currentBtn');
    var detailPanel = $('#detailPanel');
    var detailClose = $('#detailClose');
    var detailChars = $('#detailChars');
    var detailEvent = $('#detailEvent');
    var detailDev = $('#detailDev');
    var stepsListWrap = $('#stepsListWrap');
    var collapseToggleBtn = $('#collapseToggleBtn');
    var collapseLabel = $('#collapseLabel');
    var listToggleBtn = $('#listToggleBtn');
    var storyListOverlay = $('#storyListOverlay');
    var storyListBody = $('#storyListBody');
    var storyListCloseBtn = $('#storyListCloseBtn');

    var plotData = null, storyList = [], currentStoryIndex = 0, currentPlotId = 1, currentStepId = 1, isDetailOpen = false;

    // ===== Trạng thái gập được lưu trữ lâu dài =====
    var STORAGE_KEY = 'story_assistant_steps_collapsed_peidu';
    var isStepsCollapsed = false;

    function loadCollapsedState() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved !== null) {
                isStepsCollapsed = saved === 'true';
            } else {
                isStepsCollapsed = true;
            }
        } catch (e) {
            isStepsCollapsed = true;
        }
        applyCollapsedState();
    }

    function saveCollapsedState() {
        try {
            localStorage.setItem(STORAGE_KEY, String(isStepsCollapsed));
        } catch (e) {}
    }

    function applyCollapsedState() {
        var wrap = stepsListWrap;
        if (!wrap) return;

        if (isStepsCollapsed) {
            wrap.style.maxHeight = '0px';
            wrap.style.opacity = '0';
            wrap.classList.remove('open');
            collapseLabel.textContent = 'Mở rộng';
        } else {
            wrap.classList.remove('open');
            wrap.style.maxHeight = 'none';
            wrap.style.opacity = '1';
            var actualHeight = wrap.scrollHeight;
            wrap.style.maxHeight = '0px';
            wrap.style.opacity = '0';

            void wrap.offsetHeight;
            wrap.style.maxHeight = actualHeight + 'px';
            wrap.style.opacity = '1';
            wrap.classList.add('open');
            collapseLabel.textContent = 'Gập lại';

            var onTransitionEnd = function() {
                wrap.removeEventListener('transitionend', onTransitionEnd);
                if (!isStepsCollapsed) {
                    wrap.style.maxHeight = 'none';
                }
            };
            wrap.addEventListener('transitionend', onTransitionEnd);
        }
    }

    function toggleCollapsed() {
        isStepsCollapsed = !isStepsCollapsed;
        saveCollapsedState();
        applyCollapsedState();
    }

    // ===== Tải dữ liệu(Đọc trực tiếp nội tuyến) =====
    function loadPlotData() {
        if (DATA && typeof DATA === 'object' && DATA.plotList && DATA.plotList.length > 0) {
            plotData = DATA;
            console.log('[Tiến trình cốt truyện] ✅ Tải thành công từ dữ liệu nội tuyến');
            initFromPlotData();
            return;
        }
        console.warn('[tiến triển cốt truyện] ⚠️ Không tìm thấy dữ liệu cốt truyện');
        renderEmptyState();
    }

    function initFromPlotData() {
        if (!plotData || !plotData.plotList || plotData.plotList.length === 0) {
            renderEmptyState();
            return;
        }
        storyList = plotData.plotList.map(function(plot, idx) {
            var plotId = idx + 1;
            var currentStep = plot.steps.find(function(s) { return s.isExecuted; }) || plot.steps[0] || { stepId: 1 };
            plot.steps.forEach(function(s) {
                if (typeof s.isExecuted === 'undefined') {
                    s.isExecuted = false;
                }
            });
            return {
                id: plotId,
                title: plot.title,
                summary: plot.summary || '',
                steps: plot.steps || [],
                currentStepId: currentStep.stepId || 1,
                isExecuted: plot.steps.some(function(s) { return s.isExecuted; })
            };
        });
        if (plotData.currentPlot) {
            var targetId = plotData.currentPlot.plotId || 1;
            var found = storyList.findIndex(function(s) { return s.id === targetId; });
            if (found !== -1) {
                currentStoryIndex = found;
                currentPlotId = targetId;
                currentStepId = plotData.currentPlot.stepId || 1;
            } else {
                currentStoryIndex = 0;
                currentPlotId = storyList[0] ? storyList[0].id : 1;
                currentStepId = storyList[0] && storyList[0].steps[0] ? storyList[0].steps[0].stepId : 1;
            }
        } else {
            currentStoryIndex = 0;
            currentPlotId = storyList[0] ? storyList[0].id : 1;
            currentStepId = storyList[0] && storyList[0].steps[0] ? storyList[0].steps[0].stepId : 1;
        }
        totalBadge.textContent = storyList.length;
        renderAll();
        renderStoryList();
    }

    function getNextPendingStep(story) {
        if (!story || !story.steps) return null;
        return story.steps.find(function(s) { return !s.isExecuted; });
    }

    function renderAll() {
        if (!storyList || storyList.length === 0) { renderEmptyState(); return; }
        var story = storyList[currentStoryIndex];
        if (!story) { renderEmptyState(); return; }

        currentDisplay.classList.remove('no-plot');
        storyTitleText.textContent = story.title;

        var totalSteps = story.steps.length;
        var executedSteps = story.steps.filter(function(s) { return s.isExecuted; }).length;
        var currentStep = story.steps.find(function(s) { return s.stepId == currentStepId; }) || story.steps[0];
        var isCurrentExecuted = currentStep ? (currentStep.isExecuted || false) : false;
        var currentPhase = currentStep ? (currentStep.phase || '') : '';

        stepStatus.className = 'step-status';
        var dot = stepStatus.querySelector('.dot');
        if (dot) { dot.className = 'dot' + (isCurrentExecuted ? ' done' : ' pending'); }
        stepStatusText.textContent = isCurrentExecuted ? 'Đã thực thi' : 'Chờ thực thi';
        progressText.textContent = executedSteps + ' / ' + totalSteps + ' Bước';
        phaseDisplay.textContent = currentPhase ? '📍 ' + currentPhase : '';

        renderSteps(story);
        updateNavButtons(story);
        currentBtn.textContent = '🎯 ' + currentStepId;
        if (isDetailOpen && currentStep) { renderDetail(currentStep); }
        renderStoryList();
    }

    function renderSteps(story) {
        if (!story || !story.steps || story.steps.length === 0) {
            stepsList.innerHTML = '<div class="empty-state"><p>Cốt truyện này tạm thời không có bước nào</p></div>';
            stepsCount.textContent = '0 bộ';
            return;
        }

        stepsCount.textContent = story.steps.length + ' bộ';
        var html = '';
        story.steps.forEach(function(step) {
            var isCurrent = step.stepId == currentStepId;
            var isExecuted = step.isExecuted || false;
            var cls = (isExecuted ? 'executed ' : '') + (isCurrent ? 'current' : '');
            var charsStr = (step.characters || []).map(function(c) { return c.name; }).filter(Boolean).join('、') || 'Chưa chỉ định';

            html += '<div class="step-item ' + cls + '" data-step-id="' + step.stepId + '">' +
                '<div class="step-header-line">' +
                '<span class="step-id">Bước ' + step.stepId + '</span>' +
                '<span class="step-location"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>' + (step.location || 'chưa chỉ định') + '</span>' +
                '<span style="font-size:0.5rem;color:hsla(38,45%,50%,0.7);background:hsla(38,45%,50%,0.06);padding:1px 6px;border-radius:2px;">' + (step.phase || '') + '</span>' +
                '<button class="step-execute-btn ' + (isExecuted ? 'done' : '') + '" data-step-id="' + step.stepId + '">' + (isExecuted ? '✓ đã thực thi' : '▶ Thực thi') + '</button>' +
                '</div>' +
                '<div class="step-event-preview">' + (step.event || '').substring(0, 60) + ((step.event || '').length > 60 ? '...' : '') + '</div>' +
                '<div style="font-size:0.5rem;color:var(--text-dim);margin-top:2px;">👥 ' + charsStr + '</div>' +
                '</div>';
        });

        stepsList.innerHTML = html;
        stepsList.querySelectorAll('.step-item').forEach(function(el) {
            el.addEventListener('click', function(e) {
                if (e.target.closest('.step-execute-btn')) return;
                var stepId = parseInt(this.dataset.stepId);
                var step = story.steps.find(function(s) { return s.stepId == stepId; });
                if (step) { currentStepId = stepId; renderAll(); openDetail(step); }
            });
        });

        stepsList.querySelectorAll('.step-execute-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var stepId = parseInt(this.dataset.stepId);
                executeStep(stepId);
            });
        });
    }

    function updateNavButtons(story) {
        var totalSteps = story.steps.length;
        var currentIdx = story.steps.findIndex(function(s) { return s.stepId == currentStepId; });
        prevBtn.disabled = !(currentIdx > 0 || currentStoryIndex > 0);
        var hasNextStep = currentIdx < totalSteps - 1;
        var hasNextStory = currentStoryIndex < storyList.length - 1;
        nextBtn.disabled = !(hasNextStep || hasNextStory);
    }

    function executeStep(stepId) {
        var story = storyList[currentStoryIndex];
        if (!story) return;
        var step = story.steps.find(function(s) { return s.stepId == stepId; });
        if (!step) return;

        step.isExecuted = true;
        currentStepId = stepId;
        currentPlotId = story.id;

        var stepData = {
            location: step.location || 'chưa chỉ định',
            characters: step.characters || [],
            event: step.event || '',
            development: step.development || '',
            phase: step.phase || ''
        };

        var textToSend = 'step_data = ' + JSON.stringify(stepData, null, 2);
        if (typeof triggerSlash === 'function') {
            triggerSlash('/send ' + textToSend + '|/trigger');
        } else if (typeof window.triggerSlash === 'function') {
            window.triggerSlash('/send ' + textToSend + '|/trigger');
        } else {
            console.log('[tiến triển cốt truyện] Gửi:', textToSend);
            navigator.clipboard ? navigator.clipboard.writeText(textToSend).catch(function() {}) : null;
            alert('Vui lòng dán nội dung sau vào hộp thoại quán rượu:\n\n' + textToSend);
        }

        saveStateToWorldbook();

        var nextPending = getNextPendingStep(story);
        if (nextPending) {
            currentStepId = nextPending.stepId;
        } else if (currentStoryIndex < storyList.length - 1) {
            currentStoryIndex++;
            var nextStory = storyList[currentStoryIndex];
            currentPlotId = nextStory.id;
            var firstStep = nextStory.steps[0];
            if (firstStep) { currentStepId = firstStep.stepId; }
        }

        renderAll();
        var updatedStep = story.steps.find(function(s) { return s.stepId == currentStepId; });
        if (updatedStep) { openDetail(updatedStep); }
        closeStoryList();
    }

    function saveStateToWorldbook() {
        try {
            if (!plotData) return;

            plotData.currentPlot = {
                plotId: currentPlotId,
                stepId: currentStepId,
                title: 'siêu dữ liệu cốt truyện - mẹ bồi đọc'
            };

            plotData.plotList.forEach(function(plot, idx) {
                var story = storyList[idx];
                if (story) {
                    plot.steps.forEach(function(s, si) {
                        var localStep = story.steps[si];
                        if (localStep) { s.isExecuted = localStep.isExecuted || false; }
                    });
                }
            });

            var jsonStr = JSON.stringify(plotData, null, 2);

            // Thử thông qua getContext Ghi vào
            if (typeof getContext === 'function') {
                var ctx = getContext();
                if (ctx) {
                    var worldbooks = ctx.charWorldbooks || ctx.worldInfo || ctx.worldbooks;
                    if (worldbooks) {
                        var entries = Array.isArray(worldbooks) ? worldbooks : Object.values(worldbooks);
                        for (var i = 0; i < entries.length; i++) {
                            var entry = entries[i];
                            var name = entry.name || entry.title || entry.key || '';
                            if (name.includes('siêu dữ liệu cốt truyện - mẹ bồi đọc')) {
                                entry.content = '[plotResultStart]\n' + jsonStr + '\n[plotResultEnd]';
                                console.log('[tiến triển cốt truyện] ✅ Đã lưu vào sách thế giới');
                                return;
                            }
                        }
                    }
                }
            }

            // thử thông qua replaceWorldbook ghi vào
            if (typeof replaceWorldbook === 'function') {
                var wbNames = typeof getCharWorldbookNames === 'function' ? getCharWorldbookNames('current') : null;
                if (wbNames && wbNames.primary) {
                    var entries = typeof getWorldbook === 'function' ? getWorldbook(wbNames.primary) : null;
                    if (entries) {
                        var entryList = Array.isArray(entries) ? entries : Object.values(entries);
                        var target = entryList.find(function(e) {
                            return e.name && e.name.includes('siêu dữ liệu cốt truyện - mẹ bồi đọc');
                        });
                        if (target) {
                            target.content = '[plotResultStart]\n' + jsonStr + '\n[plotResultEnd]';
                            replaceWorldbook(wbNames.primary, entries);
                            console.log('[tiến triển cốt truyện] ✅ đã lưu vào sách thế giới');
                            return;
                        }
                    }
                }
            }

            console.log('[tiến triển cốt truyện] ⚠️ Không thể lưu vào sách thế giới, trạng thái chỉ được lưu trong bộ nhớ');

        } catch (e) {
            console.warn('[tiến triển cốt truyện] Lưu trạng thái thất bại:', e);
        }
    }

    function renderDetail(step) {
        if (!step) { detailChars.innerHTML = ''; detailEvent.textContent = ''; detailDev.textContent = ''; return; }
        var charsHtml = '';
        if (step.characters && step.characters.length > 0) {
            step.characters.forEach(function(c) {
                charsHtml += '<div class="char-item"><span class="name">' + (c.name || 'Chưa đặt tên') + '</span><span class="mood">' + (c.mood || '') + '</span><span class="thoughts">' + (c.innerThoughts ? '「' + c.innerThoughts + '」' : '') + '</span></div>';
            });
        } else {
            charsHtml = '<div style="color:var(--text-dim);font-size:0.6rem;">Chưa chỉ định nhân vật</div>';
        }
        detailChars.innerHTML = charsHtml;
        detailEvent.textContent = step.event || 'Chưa chỉ định sự kiện';
        detailDev.textContent = step.development ? '→ ' + step.development : '';
    }

    function openDetail(step) {
        isDetailOpen = true;
        detailPanel.classList.add('open');
        renderDetail(step);
        setTimeout(function() { detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
    }

    function closeDetail() { isDetailOpen = false; detailPanel.classList.remove('open'); }

    function renderEmptyState() {
        currentDisplay.classList.add('no-plot');
        storyTitleText.textContent = 'Không có dữ liệu cốt truyện';
        stepStatusText.textContent = '—';
        progressText.textContent = '0 / 0 bộ';
        phaseDisplay.textContent = '';
        stepsList.innerHTML = '<div class="empty-state"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/><path d="M16 8l-4 4-4-4"/><path d="M12 12v6"/></svg><p>Vui lòng đảm bảo trong sách thế giới có tồn tại<br><span class="gold">「siêu dữ liệu cốt truyện - mẹ bồi đọc」</span></p></div>';
        stepsCount.textContent = '0 bộ';
        totalBadge.textContent = '0';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        currentBtn.textContent = '🎯 —';
        storyListBody.innerHTML = '<div class="empty-state"><p>Tạm thời không có cốt truyện</p></div>';
    }

    function renderStoryList() {
        if (!storyList || storyList.length === 0) {
            storyListBody.innerHTML = '<div class="empty-state"><p>tạm thời chưa có cốt truyện</p></div>';
            return;
        }
        var html = '';
        storyList.forEach(function(story, idx) {
            var total = story.steps.length;
            var done = story.steps.filter(function(s) { return s.isExecuted; }).length;
            var isCurrent = idx === currentStoryIndex;
            html += '<div class="story-list-item' + (isCurrent ? ' current' : '') + '" data-index="' + idx + '">' +
                '<span class="title">' + (isCurrent ? '<span class="current-mark">▶</span>' : '') + story.title + '</span>' +
                '<span class="progress"><span class="' + (done === total ? 'done' : 'pending') + '">' + done + '/' + total + '</span></span>' +
                '</div>';
        });
        storyListBody.innerHTML = html;
        storyListBody.querySelectorAll('.story-list-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var index = parseInt(this.dataset.index);
                if (!isNaN(index) && index >= 0 && index < storyList.length) {
                    currentStoryIndex = index;
                    currentPlotId = storyList[index].id;
                    var firstStep = storyList[index].steps[0];
                    if (firstStep) { currentStepId = firstStep.stepId; }
                    renderAll();
                    closeStoryList();
                }
            });
        });
    }

    function openStoryList() {
        storyListOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderStoryList();
    }

    function closeStoryList() {
        storyListOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    function bindEvents() {
        collapseToggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCollapsed();
        });

        prevBtn.addEventListener('click', function() {
            var story = storyList[currentStoryIndex];
            if (!story) return;
            var currentIdx = story.steps.findIndex(function(s) { return s.stepId == currentStepId; });
            if (currentIdx > 0) {
                currentStepId = story.steps[currentIdx - 1].stepId;
                renderAll();
                openDetail(story.steps[currentIdx - 1]);
            } else if (currentStoryIndex > 0) {
                currentStoryIndex--;
                var prevStory = storyList[currentStoryIndex];
                currentPlotId = prevStory.id;
                var lastStep = prevStory.steps[prevStory.steps.length - 1];
                currentStepId = lastStep.stepId;
                renderAll();
                openDetail(lastStep);
            }
        });

        nextBtn.addEventListener('click', function() {
            var story = storyList[currentStoryIndex];
            if (!story) return;
            var currentIdx = story.steps.findIndex(function(s) { return s.stepId == currentStepId; });
            if (currentIdx < story.steps.length - 1) {
                var nextStep = story.steps[currentIdx + 1];
                currentStepId = nextStep.stepId;
                renderAll();
                openDetail(nextStep);
            } else if (currentStoryIndex < storyList.length - 1) {
                currentStoryIndex++;
                var nextStory = storyList[currentStoryIndex];
                currentPlotId = nextStory.id;
                var firstStep = nextStory.steps[0];
                currentStepId = firstStep.stepId;
                renderAll();
                openDetail(firstStep);
            }
        });

        currentBtn.addEventListener('click', function() {
            var story = storyList[currentStoryIndex];
            if (!story) return;
            var currentStep = story.steps.find(function(s) { return s.stepId == currentStepId; }) || story.steps[0];
            if (currentStep) { openDetail(currentStep); }
        });

        detailClose.addEventListener('click', closeDetail);
        document.addEventListener('click', function(e) {
            if (isDetailOpen && !detailPanel.contains(e.target) && !e.target.closest('.step-item') && !e.target.closest('#currentBtn')) {
                closeDetail();
            }
        });

        listToggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (storyListOverlay.classList.contains('open')) {
                closeStoryList();
            } else {
                openStoryList();
            }
        });

        storyListOverlay.addEventListener('click', function(e) {
            if (e.target === storyListOverlay) {
                closeStoryList();
            }
        });
        storyListCloseBtn.addEventListener('click', closeStoryList);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (storyListOverlay.classList.contains('open')) { closeStoryList(); }
                if (isDetailOpen) { closeDetail(); }
            }
        });
    }

    function bindKeyboard() {
        document.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowLeft' || e.key === 'a') { e.preventDefault(); prevBtn.click(); }
            else if (e.key === 'ArrowRight' || e.key === 'd') { e.preventDefault(); nextBtn.click(); }
            else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); currentBtn.click(); }
            else if (e.key === 'Escape') {
                if (!storyListOverlay.classList.contains('open')) closeDetail();
            }
        });
    }

    function init() {
        loadCollapsedState();
        bindEvents();
        bindKeyboard();
        loadPlotData();
        console.log('[tiến triển cốt truyện] ✅ Khởi tạo hoàn tất');
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

    window.__storyAssistant = {
        reload: loadPlotData,
        goTo: function(plotId, stepId) {
            var storyIdx = storyList.findIndex(function(s) { return s.id === plotId; });
            if (storyIdx === -1) return;
            currentStoryIndex = storyIdx;
            currentPlotId = plotId;
            currentStepId = stepId || (storyList[storyIdx].steps[0] ? storyList[storyIdx].steps[0].stepId : 1);
            renderAll();
        },
        getState: function() {
            return {
                currentPlotId: currentPlotId,
                currentStepId: currentStepId,
                currentStoryIndex: currentStoryIndex,
                storyList: storyList
            };
        },
        injectData: function(data) {
            DATA = data;
            plotData = data;
            initFromPlotData();
        }
    };

})();
</script>
</body>
</html>