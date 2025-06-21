// script.js — Anime Starfield Effect + Editable Diary Auto-Save

const starsContainer = document.getElementById('stars');

// Create animated star field
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}

// Auto-save diary entries in localStorage
const diary = document.getElementById('diary');

// Load saved diary entry
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('diaryEntry');
  if (saved) diary.innerHTML = saved;
});

// Save diary entry as user types
if (diary) {
  diary.addEventListener('input', () => {
    localStorage.setItem('diaryEntry', diary.innerHTML);
  });
}

