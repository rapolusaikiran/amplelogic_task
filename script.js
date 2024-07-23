const startButton = document.getElementById('start-button');
const offcanvas = document.getElementById('migration-offcanvas');
const progressBar = document.getElementById('progress-bar');
const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const alertContainer = document.getElementById('alert-container');

const checkMarkDiv = document.createElement("div")
const checkMark = document.createElement('i')
const alert = document.createElement('div');
const closeButton = document.createElement('i')

startButton.addEventListener('click', () => {
  offcanvas.classList.add('show');

  let progress = 0;
  const interval = setInterval(() => {
    if(progress < 100){
      progress += 10;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);

      const progressStatus = document.getElementById('progress-status');
      progressStatus.innerHTML = `${progress}%`
    }
    setTimeout(() => {
      if (progress >= 100) {
        clearInterval(interval);
        offcanvas.classList.remove('show');

        checkMarkDiv.className = "checkmark"

        checkMark.className = "fa-solid fa-check"
        checkMarkDiv.appendChild(checkMark)
        alertContainer.appendChild(checkMarkDiv)
        
        alert.innerHTML = '<div class="success-status text-start"><b>Success</b><br>Migration completed successfully.</div>';
        alertContainer.appendChild(alert);

        closeButton.className = "fa-solid fa-xmark"
        alertContainer.appendChild(closeButton)

        alertContainer.style.display = 'flex';

        progress = 0
      }
    }, 5000);
  }, 500);
});

closeButton.addEventListener('click', () => {
  alertContainer.style.display = "none"
})

toggleButton.addEventListener('click', () => {
  offcanvas.classList.toggle('show');
  toggleIcon.classList.toggle('fa-caret-up');
  toggleIcon.classList.toggle('fa-caret-down');
});

document.getElementById('toggleButton').addEventListener('click', () => {
    const popupContent = document.getElementById('popupContent');
    if (popupContent.classList.contains('hidden')) {
        popupContent.classList.remove('hidden');
    } else {
        popupContent.classList.add('hidden');
    }
});