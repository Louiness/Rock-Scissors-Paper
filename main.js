const throwMap = new Map([
  [0, 'rock'],
  [1, 'scissors'],
  [2, 'paper'],
]);

function toThrow() {
  return throwMap.get(getRandomNumber());
}

// get 0 ~ 2 integer number
function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function decideResult(thrownthing) {
  const computerThing = toThrow();
  console.log(`conputer threw ${computerThing}`);
  switch (thrownthing) {
    case 0:
      console.log('you threw rock');
      if (computerThing === 'rock') {
        console.log('draw');
      } else if (computerThing === 'scissors') {
        console.log('you win');
      } else {
        console.log('you lose');
      }
      break;
    case 1:
      console.log('you threw scissors');
      if (computerThing === 'rock') {
        console.log('you lose');
      } else if (computerThing === 'scissors') {
        console.log('draw');
      } else {
        console.log('you win');
      }
      break;
    case 2:
      console.log('you threw paper');
      if (computerThing === 'rock') {
        console.log('you win');
      } else if (computerThing === 'scissors') {
        console.log('you lose');
      } else {
        console.log('draw');
      }
  }
}

decideResult(1);
