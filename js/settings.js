const profileView = document.querySelector('[data-profile="view"]');
const profileEdit = document.querySelector('[data-profile="edit"]');

document.addEventListener('click', (e) => {
    const action = e.target.closest('[data-profile-action]');
    if (!action) return;

    const type = action.dataset.profileAction;

    if (type === 'edit') {
        profileView.classList.add('hidden');
        profileEdit.classList.remove('hidden');
    }

    if (type === 'cancel') {
        profileEdit.classList.add('hidden');
        profileView.classList.remove('hidden');
    }

    if (type === 'save') {
        const name = document.getElementById('editName').value;

        document.getElementById('profileName').textContent = name;

        saveProfile(); // можно оставить заглушкой

        profileEdit.classList.add('hidden');
        profileView.classList.remove('hidden');
    }
});

// ==================== PROFILE STORAGE ====================

const PROFILE_KEY = 'kk_profile';

function loadProfile() {
    const saved = localStorage.getItem(PROFILE_KEY);
    if (!saved) return;

    try {
        const data = JSON.parse(saved);

        if (data.name) {
            document.getElementById('profileName').textContent = data.name;
            document.getElementById('editName').value = data.name;
        }

        if (data.about) {
            document.getElementById('editAbout').value = data.about;
        }
    } catch (e) {
        console.warn('Profile load error', e);
    }
}

function saveProfile() {
    const data = {
        name: document.getElementById('editName').value.trim(),
        about: document.getElementById('editAbout').value.trim()
    };

    localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
}


// ==================== AVATAR ====================

const avatarImg = document.getElementById('profileAvatar');
const avatarInput = document.getElementById('avatarInput');

// открыть выбор файла
document.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'change-avatar') {
        avatarInput.click();
    }
});

// обработка файла
avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Выберите изображение');
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        const base64 = reader.result;

        avatarImg.src = base64;
        saveAvatar(base64);
    };

    reader.readAsDataURL(file);
});
const AVATAR_KEY = 'kk_avatar';

function saveAvatar(base64) {
    localStorage.setItem(AVATAR_KEY, base64);
}

function loadAvatar() {
    const saved = localStorage.getItem(AVATAR_KEY);
    if (saved) {
        avatarImg.src = saved;
    }
}
loadProfile();
loadAvatar();