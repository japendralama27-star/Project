let scoreStr = localStorage.getItem('Score');
let score = JSON.parse(scoreStr) ||
{
        win:0,
        lost:0,
        tie:0,
};

score.displayScore=  function()
    {
        return ` Won:${score.win},Lost:${score.lost},Tie: ${score.tie}`
    }
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
            score.win++;
            return  'user won';
        } else if (computerMove === 'stump') {
           score.lost++;
            return 'computer won';
        } else if (computerMove === 'bat') {
             score.tie++;
            return  'draw';
        }
    }else if(userMove ==='ball')
    {
         if (computerMove=== 'ball') {
            score.tie++;
            return  'draw';
        } else if (computerMove === 'stump') {
            score.win++;
            return 'user won';
        } else if (computerMove === 'bat') {
            score.lost++;
            return 'computer won';
        }
    }else{
         if (computerChoice === 'ball') {
            score.lost++;
            return  'computer won';
        } else if (computerChoice === 'stump') {
            score.tie++;
            return 'draw';
        } else if (computerChoice === 'bat') {
            score.win++;
            return  'user won';
        }
    }
}
function showResult(userMove,computerMove,result)
{
    localStorage.setItem('Score',JSON.stringify(score));
    alert(`You have chosen ${userMove}.\nComputer choice is ${computerMove}\n${result}\n ${score.displayScore()}`); 
}