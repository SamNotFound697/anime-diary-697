window.addEventListener('DOMContentLoaded', () => {
  const diary = document.getElementById('diary');
  const savedEntry = localStorage.getItem('diaryEntry');

  if (savedEntry && diary) {
    diary.textContent = savedEntry;
  }

  if (diary) {
    diary.addEventListener('input', () => {
      localStorage.setItem('diaryEntry', diary.textContent);
    });
  }
});
