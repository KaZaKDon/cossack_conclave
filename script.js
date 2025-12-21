// ================================
//  НАВИГАЦИЯ + АНИМАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', () => {

    const screens = document.querySelectorAll('.screen');
    let currentScreen = document.querySelector('.screen.active');

    function showScreen(name, direction = 'forward') {
        const nextScreen = document.querySelector(
            `.screen[data-screen="${name}"]`
        );

        if (!nextScreen || nextScreen === currentScreen) return;

        // направление выхода
        if (currentScreen) {
            currentScreen.classList.remove('active');
            currentScreen.classList.add(
                direction === 'back' ? 'exit-right' : 'exit-left'
            );
        }

        // подготовка нового экрана
        nextScreen.classList.remove('exit-left', 'exit-right');
        nextScreen.classList.add('active');

        currentScreen = nextScreen;
    }

    // ================================
    //  ЕДИНЫЙ ОБРАБОТЧИК
    // ================================

    document.addEventListener('click', event => {
        const trigger = event.target.closest('[data-go]');
        if (!trigger) return;

        const target = trigger.dataset.go;

        // логика направления
        const isBack =
            trigger.textContent.includes('←') ||
            trigger.dataset.go === 'dialogs';

        showScreen(target, isBack ? 'back' : 'forward');
    });
    // ================================
    //  ПУСТЫЕ ДИАЛОГИ
    // ================================

    function updateDialogsState() {
        const dialogList = document.querySelector('.dialog-list');
        const emptyState = document.getElementById('emptyDialogs');

        if (!dialogList || !emptyState) return;

        const hasDialogs = dialogList.children.length > 0;

        dialogList.style.display = hasDialogs ? 'block' : 'none';
        emptyState.style.display = hasDialogs ? 'none' : 'block';
    }

    // вызвать при загрузке
    updateDialogsState();

});