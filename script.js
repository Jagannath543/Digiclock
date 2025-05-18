const clockElement = document.getElementById('clock');
const modeToggle = document.getElementById('mode-toggle');
const formatToggle = document.getElementById('format-toggle');

let is24HourFormat = true;
let isDarkMode = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  if (!is24HourFormat) {
    hours = hours % 12 || 12;
  }

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${!is24HourFormat ? ampm : ''}`;
  clockElement.textContent = timeString;
}

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  modeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  formatToggle.textContent = is24HourFormat ? '12H' : '24H';
}

modeToggle.addEventListener('click', toggleMode);
formatToggle.addEventListener('click', toggleFormat);

setInterval(updateClock, 1000);
updateClock();
