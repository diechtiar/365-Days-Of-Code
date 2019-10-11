var clickMeButton = document.createElement('button');
clickMeButton.id = 'btn';
clickMeButton.innerHTML = '0';
document.body.appendChild(clickMeButton);

clickMeButton.addEventListener("click", function() {
  /* This changes the button's label */
  clickMeButton.innerHTML = Number(clickMeButton.innerHTML) + 1;
});