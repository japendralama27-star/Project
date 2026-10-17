function generateComputerChoice()
{
    let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
            return 'bat';
        } else if (randomNumber > 1 && randomNumber <= 2) {
            return 'ball';
        } else {
            return 'stump';
        }
}
function getResult(userMove,computerMove)
{
    if(userMove==='bat')
    {
          if (computerMove === 'ball') {
            return  'user won';
        } else if (computerMove === 'stump') {
            return 'computer won';
        } else if (computerMove === 'bat') {
            return  'draw';
        }
    }else if(userMove ==='ball')
    {
         if (computerMove=== 'ball') {
            return  'draw';
        } else if (computerMove === 'stump') {
            return 'user won';
        } else if (computerMove === 'bat') {
            return 'computer won';
        }
    }else{
         if (computerChoice === 'ball') {
            return  'computer won';
        } else if (computerChoice === 'stump') {
            return 'draw';
        } else if (computerChoice === 'bat') {
            return  'user won';
        }
    }
}
function showResult(userMove,computerMove,result)
{
    alert(`You have chosen ${userMove}.\nComputer choice is ${computerMove} \n and ${result}`)
}