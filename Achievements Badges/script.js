const badges = [
    { id: 1, name: 'Tree Hugger', icon: 'leaf', description: 'Plant 10 trees', unlocked: false },
    { id: 2, name: 'Water Saver', icon: 'droplet', description: 'Save 1000 liters of water', unlocked: false },
    { id: 3, name: 'Recycling Champion', icon: 'sun', description: 'exceptional efforts in reducing waste through recycling initiatives', unlocked: false },
    { id: 4, name: 'Planet Savior', icon: 'wind', description: "preserving the planet's natural resources", unlocked: false },
];

const badgesContainer = document.getElementById('badgesContainer');

function createBadgeCard(badge) {
    const card = document.createElement('div');
    card.className = 'badge-card';
    card.innerHTML = `
        <div class="badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                ${getIconPath(badge.icon)}
            </svg>
        </div>
        <div class="badge-content">
            <h3 class="badge-name">${badge.name}</h3>
            <p class="badge-description">${badge.description}</p>
            <span class="badge-status ${badge.unlocked ? 'badge-unlocked' : 'badge-locked'}">
                ${badge.unlocked ? 'Unlocked!' : 'Locked'}
            </span>
        </div>
    `;
    return card;
}

function getIconPath(icon) {
    switch (icon) {
        case 'leaf':
            return '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>';
        case 'droplet':
            return '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>';
        case 'sun':
            return '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        case 'wind':
            return '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>';
        default:
            return '';
    }
}

function renderBadges() {
    badgesContainer.innerHTML = '';
    badges.forEach(badge => {
        const card = createBadgeCard(badge);
        badgesContainer.appendChild(card);
    });
}

function unlockRandomBadge() {
    const lockedBadges = badges.filter(badge => !badge.unlocked);
    if (lockedBadges.length === 0) return;

    const randomIndex = Math.floor(Math.random() * lockedBadges.length);
    const badgeToUnlock = lockedBadges[randomIndex];
    badgeToUnlock.unlocked = true;

    renderBadges();

    const unlockedCard = badgesContainer.children[badges.indexOf(badgeToUnlock)];
    unlockedCard.classList.add('animate-unlock');
    setTimeout(() => unlockedCard.classList.remove('animate-unlock'), 500);
}

renderBadges();

// Simulate unlocking a random badge every 5 seconds
setInterval(unlockRandomBadge, 5000);
