// Starfield Effect
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}

// Auto-Saving Diary
const diary = document.getElementById('diary');

window.addEventListener('DOMContentLoaded', () => {
 const saved = localStorage.getItem('diaryEntry');
if (saved && diary) {
  diary.innerHTML = saved;
}

});

if (diary) {
  diary.addEventListener('input', () => {
    localStorage.setItem('diaryEntry', diary.innerHTML);
  });
}
