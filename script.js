// STARFIELD EFFECT (optional, skip if not using it)
const starsContainer = document.getElementById('stars');
if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
  }
}

// AUTO-SAVE LOGIC
const diary = document.getElementById('diary');

// STEP 1: Load previous diary entry (if exists)
window.addEventListener('DOMContentLoaded', () => {
  const savedEntry = localStorage.getItem('diaryEntry');
  if (savedEntry && diary) {
    diary.innerHTML = savedEntry;
  }
});

// STEP 2: Save diary entry every time user types
if (diary) {
  diary.addEventListener('input', () => {
    localStorage.setItem('diaryEntry', diary.innerHTML);
  });
}
