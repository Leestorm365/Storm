// ============================================================
// Trình tải: Người chơi có thể tự chuyển đổi trong nước/quốc tế
// Tải: PD1.js (Tiến triển cốt truyện), PD2.js (Chuyển đổi ảnh minh họa), PD3.js (Cập nhật nóng ảnh minh họa)
// ============================================================

// Đọc lựa chọn của người dùng từ bộ nhớ cache của trình duyệt, mặc định là trong nước
let USE_CN = localStorage.getItem('ZXZ_USE_CN');
if (USE_CN === null) {
    USE_CN = 'true';
}
USE_CN = USE_CN === 'true';

// Quyết định URL cơ sở dựa trên lựa chọn
const BASE_URL = USE_CN 
    ? 'https://testingcf.jsdelivr.net/gh/sanshui19516/Plot-Advancement-Illustration-@main/%E9%99%AA%E8%AF%BB%E5%A6%88%E5%A6%88/' 
    : 'https://cdn.jsdelivr.net/gh/sanshui19516/Plot-Advancement-Illustration-@main/%E9%99%AA%E8%AF%BB%E5%A6%88%E5%A6%88/';

// Tải động các tập lệnh chức năng
import(BASE_URL + 'PD1.js');   // Tiến triển cốt truyện
import(BASE_URL + 'PD6.js');   // Chuyển đổi ảnh minh họa
import(BASE_URL + 'PD4.js');   // Cập nhật nóng ảnh minh họa

console.log('[Trình tải] Hiện đang sử dụng phiên bản ' + (USE_CN ? 'trong nước' : 'quốc tế'));

// ============================================================
// Kiểm tra xem có vừa chuyển đổi node không (dùng để hiển thị thông báo sau khi làm mới)
// ============================================================
const justSwitched = localStorage.getItem('ZXZ_JUST_SWITCHED');
if (justSwitched) {
    const label = justSwitched === 'cn' ? '🇨🇳 Node trong nước' : '🌍 Node quốc tế';
    toastr.success('✅ Đã chuyển sang ' + label + ', trang đã được làm mới', '', { timeOut: 3000 });
    localStorage.removeItem('ZXZ_JUST_SWITCHED');
}

// ============================================================
// Nút chuyển đổi (Nhấp để chuyển đổi node)
// ============================================================

const storyName = 'Mẹ bồi đọc';
const switchBtnName = '🌐 Chuyển đổi node (Mẹ bồi đọc)';

setTimeout(() => {
    try {
        let buttons = getScriptButtons();
        if (!buttons.some(b => b.name === switchBtnName)) {
            buttons = buttons.filter(b => b.name !== switchBtnName);
            buttons.push({ name: switchBtnName, visible: true });
            replaceScriptButtons(buttons);
            console.log('[Trình tải] Đăng ký nút chuyển đổi thành công: ' + switchBtnName);
        }
    } catch (e) {
        console.error('[Trình tải] Đăng ký nút chuyển đổi thất bại:', e);
    }
}, 1500);

eventOn(getButtonEvent(switchBtnName), () => {
    const current = localStorage.getItem('ZXZ_USE_CN') !== 'false';
    const next = !current;
    const label = next ? 'cn' : 'global';
    
    localStorage.setItem('ZXZ_USE_CN', next ? 'true' : 'false');
    localStorage.setItem('ZXZ_JUST_SWITCHED', label);
    
    toastr.info('Đã chuyển sang ' + (next ? '🇨🇳 Node trong nước' : '🌍 Node quốc tế') + ', đang làm mới...', '', { timeOut: 1500 });
    
    setTimeout(() => {
        if (window.top) {
            window.top.location.reload();
        } else {
            window.location.reload();
        }
    }, 1500);
});

// ============================================================
// Nút ẩn (Nhấp đúp để ẩn tất cả các nút)
// ============================================================

const hideBtnName = '🔒 Ẩn';

setTimeout(() => {
    try {
        let buttons = getScriptButtons();
        if (!buttons.some(b => b.name === hideBtnName)) {
            buttons = buttons.filter(b => b.name !== hideBtnName);
            buttons.push({ name: hideBtnName, visible: true });
            replaceScriptButtons(buttons);
            console.log('[Trình tải] Đăng ký nút ẩn thành công');
        }
    } catch (e) {
        console.error('[Trình tải] Đăng ký nút ẩn thất bại:', e);
    }
}, 2000);

let hideClickCount = 0;
let hideTimer = null;

eventOn(getButtonEvent(hideBtnName), () => {
    hideClickCount++;
    
    if (hideClickCount === 1) {
        hideTimer = setTimeout(() => {
            hideClickCount = 0;
            clearTimeout(hideTimer);
            hideTimer = null;
        }, 500);
    } else if (hideClickCount >= 2) {
        clearTimeout(hideTimer);
        hideTimer = null;
        hideClickCount = 0;
        
        try {
            const btns = getScriptButtons();
            const hiddenButtons = btns.map(b => {
                return { ...b, visible: false };
            });
            replaceScriptButtons(hiddenButtons);
            toastr.info('🔒 Tất cả các nút đã bị ẩn', 'Nhấp đúp vào nút "Ẩn" để kích hoạt', { timeOut: 2000 });
            console.log('[Trình tải] Tất cả các nút đã bị ẩn');
        } catch (e) {
            console.error('[Trình tải] Ẩn nút thất bại:', e);
        }
    }
});