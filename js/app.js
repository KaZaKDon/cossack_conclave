const screens = document.querySelectorAll('[data-screen]');

function showScreen(name) {
    screens.forEach(screen => {
        screen.classList.toggle(
            'active',
            screen.dataset.screen === name
        );
    });
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-go]');
    if (!btn) return;

    e.preventDefault(); // ← можно добавить для надёжности

    const target = btn.dataset.go;

    if (target === 'new-chat') {
        showScreen('chat');
        return;
    }

    showScreen(target);
});