// ==================== ЧАТ ====================

// выбор чата в списке
document.addEventListener('click', (e) => {
    const item = e.target.closest('.chat-item');
    if (!item) return;

    document.querySelectorAll('.chat-item')
        .forEach(i => i.classList.remove('active'));

    item.classList.add('active');
});