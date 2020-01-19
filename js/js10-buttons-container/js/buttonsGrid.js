let clickMeButtons = [];

let buttonsSequence = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let flatSequence = [];

let containerDiv = document.createElement('div');
containerDiv.id = "btns";
containerDiv.className = "main";
document.body.appendChild(containerDiv);

for (let i = 1; i < 10; i++) {

  clickMeButtons[i] = document.createElement('button');
  clickMeButtons[i].id = `btn${i}`;
  clickMeButtons[i].innerHTML = i;
  clickMeButtons[i].className = 'btn';
  document.getElementById('btns').appendChild(clickMeButtons[i]);

}

clickMeButtons[5].addEventListener("click", function() {
  
  
  buttonsSequence[0].unshift(buttonsSequence[1].shift());
  buttonsSequence[2].push(buttonsSequence[1].pop());
  buttonsSequence[1].push(buttonsSequence[0].pop());
  buttonsSequence[1].unshift(buttonsSequence[2].shift());
  
  flatSequence = buttonsSequence.flat();

  for (let i = 1; i < 10; i++) {

    document.getElementById(`btn${i}`).innerHTML = flatSequence[i-1];
  
  }
  
});  
