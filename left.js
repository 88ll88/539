// left.js - 左側選單 (42px 方框黑底，內含 6 顆膠囊，點擊亮綠燈)
(function () {
  // 1. 建立左側邊欄主體
  const sidebar = document.createElement('div');
  sidebar.id = 'left-sidebar-container';

  Object.assign(sidebar.style, {
    position: 'fixed',
    left: '0px',
    top: '0px',
    width: '42px',
    height: '525px',
    backgroundColor: '#000000',
    color: '#ffffff',
    zIndex: '99999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 0',
    boxSizing: 'border-box',
    userSelect: 'none',
    '-webkit-tap-highlight-color': 'transparent'
  });

  // 6 個工具按鈕定義
  const tools = [
    { 
      name: 'tool1', 
      action: () => { window.location.href = 'https://88l88.github.io/888/tools1.html'; } 
    },
    { 
      name: 'tool2', 
      action: () => { window.location.href = 'https://88l88.github.io/888/tools2.html'; } 
    },
    { name: '[按鈕]', action: () => {} },
    { name: '[按鈕]', action: () => {} },
    { name: '[按鈕]', action: () => {} },
    { name: '[按鈕]', action: () => {} }
  ];

  tools.forEach((t) => {
    const btn = document.createElement('div');
    btn.innerText = t.name;
    Object.assign(btn.style, {
      width: '30px',
      height: '65px',
      backgroundColor: '#6c6c6c',
      color: '#ffffff',
      fontSize: '10px',
      fontWeight: 'bold',
      textAlign: 'center',
      writingMode: 'vertical-lr',
      letterSpacing: '1px',
      cursor: 'pointer',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', // 讓內部指示燈可絕對定位
      boxSizing: 'border-box',
      transition: 'background-color 0.15s, color 0.15s',
      '-webkit-tap-highlight-color': 'transparent'
    });

    // 建立綠燈指示燈（預設暗色）
    const light = document.createElement('div');
    Object.assign(light.style, {
      position: 'absolute',
      bottom: '4px',
      width: '6px',
      height: '6px',
      backgroundColor: '#222222',
      borderRadius: '50%',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)',
      transition: 'background-color 0.15s, box-shadow 0.15s'
    });
    btn.appendChild(light);

    btn.dataset.active = 'false';

    btn.onclick = (e) => {
      e.stopPropagation();

      // 先清除其他所有按鈕的綠燈狀態
      document.querySelectorAll('#left-sidebar-container > div').forEach(b => {
        b.style.backgroundColor = '#6c6c6c';
        b.style.color = '#ffffff';
        b.dataset.active = 'false';
        const l = b.querySelector('div');
        if (l) {
          l.style.backgroundColor = '#222222';
          l.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.5)';
        }
      });

      // 設定當前按鈕為綠燈亮起狀態
      btn.style.backgroundColor = '#4e9a06'; // 綠色背景
      btn.style.color = '#ffffff';
      btn.dataset.active = 'true';
      light.style.backgroundColor = '#00ff00'; // 亮綠燈
      light.style.boxShadow = '0 0 6px #00ff00, inset 0 1px 2px rgba(0,0,0,0.2)';

      // 執行網址跳轉
      t.action(); 
    };

    sidebar.appendChild(btn);
  });

  function mount() {
    const target = document.getElementById('leftSidebar') || document.body;
    if (!document.getElementById('left-sidebar-container')) {
      target.appendChild(sidebar);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
