document.addEventListener("DOMContentLoaded", () => {
  const notes = document.getElementById("vault-notes");

  // Load saved text
  const saved = localStorage.getItem("vaultNotes");
  if (saved) {
    notes.innerText = saved;
  }

  // Save on input
  notes.addEventListener("input", () => {
    localStorage.setItem("vaultNotes", notes.innerText);
  });
});

