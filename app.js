// ==================== ЭКРАНЫ ====================
const screens = document.querySelectorAll('.screen');

function showScreen(name) {
    screens.forEach(screen => {
        screen.classList.toggle(
            'active',
            screen.dataset.screen === name
        );
    });
}

// ==================== ПЕРЕХОДЫ ПО data-go ====================
document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.go;

        // временные заглушки
        if (target === 'new-chat') {
            showScreen('chat');
            return;
        }

        showScreen(target);
    });
});

// ==================== ВЫБОР ЧАТА ====================
document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
        // подсветка активного
        document.querySelectorAll('.chat-item')
            .forEach(i => i.classList.remove('active'));

        item.classList.add('active');

        // переход в чат
        showScreen('chat');
    });
});

// ==================== ФИЛЬТРЫ (все / чаты / группы) ====================
document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.filter;

        document.querySelectorAll('.filter')
            .forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        document.querySelectorAll('.chat-item').forEach(item => {
            if (type === 'all' || item.dataset.type === type) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ==================== РЕЖИМЫ В ЛЕВОЙ КОЛОНКЕ ====================
document.querySelectorAll('.nav-icon[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-icon')
            .forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        // пока просто визуально
        console.log('mode:', btn.dataset.mode);
    });
});