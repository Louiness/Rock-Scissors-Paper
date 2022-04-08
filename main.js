const choices = ['rock', 'scissors', 'paper'];

let userChoise = 'paper';
let computerChoise = choices[Math.floor(Math.random() * choices.length)];

const getResult = (userChoise, computerChoise) => {
  let result = 0;
  switch (userChoise + computerChoise) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      result++;
      break;
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      break;
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
      result--;
      break;
  }
  return result;
};

let result = getResult(userChoise, computerChoise);
if (result > 0) console.log('you win');
else if (result == 0) console.log('draw');
else console.log('you lose');
