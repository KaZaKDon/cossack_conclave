// ===== УПРАВЛЕНИЕ ЭКРАНАМИ =====

const screens = document.querySelectorAll('.screen');

function showScreen(name) {
    screens.forEach(screen => {
        screen.classList.toggle(
            'active',
            screen.dataset.screen === name
        );
    });
}

// ===== КНОПКИ =====

// Экран 1 → Экран 2 (телефон → код)
const phoneButton = document.querySelector(
    '[data-screen="phone"] .button'
);

phoneButton.addEventListener('click', () => {
    showScreen('code');
});

// Экран 2 → Экран 4 (код → диалоги)
const codeButton = document.querySelector(
    '[data-screen="code"] .button'
);

codeButton.addEventListener('click', () => {
    showScreen('dialogs');
});

// Экран 3 (если будешь использовать)
const doneButton = document.querySelector(
    '[data-screen="done"] .button'
);

if (doneButton) {
    doneButton.addEventListener('click', () => {
        showScreen('dialogs');
    });
}

// ===== ДИАЛОГИ → ЧАТ =====

const dialogItems = document.querySelectorAll('.dialog-item');

dialogItems.forEach(item => {
    item.addEventListener('click', () => {
        showScreen('chat');
    });
});

// ===== ЧАТ → ДИАЛОГИ =====

const chatBack = document.querySelector('.chat-back');

if (chatBack) {
    chatBack.addEventListener('click', () => {
        showScreen('dialogs');
    });
}

// ===== ДИАЛОГИ → НАСТРОЙКИ =====

const settingsOpen = document.querySelector('.settings-open');

if (settingsOpen) {
    settingsOpen.addEventListener('click', () => {
        showScreen('settings');
    });
}

// ===== НАСТРОЙКИ → ДИАЛОГИ =====

const settingsBack = document.querySelector(
    '[data-screen="settings"] .chat-back'
);

if (settingsBack) {
    settingsBack.addEventListener('click', () => {
        showScreen('dialogs');
    });
}