let skorUser = parseInt(localStorage.getItem('skorUser')) || 0;

let skorComp = parseInt(localStorage.getItem('skorComp')) || 0;



document.getElementById("result").innerText = `Skor: ${skorUser}-${skorComp}`;

function play(userChoice) {

  const choices = ['Batu', 'Kertas', 'Gunting'];

  const compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === compChoice) {

    result = "Seri!";

  } else if (

    (userChoice === 'Batu' && compChoice === 'Gunting') ||

    (userChoice === 'Kertas' && compChoice === 'Batu') ||

    (userChoice === 'Gunting' && compChoice === 'Kertas')

  ) {

    result = "Kamu Menang!";

    skorUser++;

    localStorage.setItem('skorUser', skorUser);

  } else {

    result = "Kamu Kalah!";

    skorComp++;

    localStorage.setItem('skorComp', skorComp);

  }

  document.getElementById("result").innerText = 

    `Kamu: ${userChoice} | Komputer: ${compChoice} -> ${result} (Skor: ${skorUser}-${skorComp})`;

}

function resetScore() {

  skorUser = 0;

  skorComp = 0;

  localStorage.clear(); 

  document.getElementById("result").innerText = "Skor: 0-0";

}
