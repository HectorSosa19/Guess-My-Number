/*document.querySelector('.message').textContent= "Correct Number🎉!";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value;*/

let secretNumber = Math.trunc(Math.random() * 20 ) +1;
document.querySelector('.number').textContent = secretNumber;
let score =20;
let highscore = 0;
//That is a eventListener to click the button and read the text or the input
document.querySelector('.check').addEventListener(
    'click', function(){
        //declare a const "x" with a random number
        const x = Number(document.querySelector('.guess').value);
        //if the x is negative or the user insert "0" it will be a message "no numbers"
        if (!x){
            document.querySelector('.message').textContent="No numbers❌";
        //If the number is correct, it will be a message 
        }else if(x === secretNumber) {
            document.querySelector('.message').textContent= "Correct Number🎉!";
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width="30rem";
            if (score>highscore){
                highscore+=10
                document.querySelector('.highscore').textContent=highscore;
                }
        }else if (x > secretNumber){
            // if the score is major than 1 it will be 
            //if the number that the user insert is too high then the score will be diminuying 
            if(score > 1){
                document.querySelector('.message').textContent?"Too High❄":"Too Low🔥"
                score--;
                document.querySelector('.score').textContent=score;
            }else{
                //if the user doesn't have moves it will be a message "You lost the game"
                document.querySelector('.message').textContent="You lost the game 🏍"
                document.querySelector('.score').textContent=0;
            }
        }
        // }else if (x < secretNumber){
        //     if(score > 1){
        //         document.querySelector('.message').textContent="Too Low🔥";
        //         score--;
        //         document.querySelector('.score').textContent=score;
        //     }else{
        //         document.querySelector('.message').textContent="You lost the game🏍"
        //         document.querySelector('.score').textContent=0;
        //     }

        // }
    }
    
);

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20 ) +1;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').textContent="";
    document.querySelector('body').style.backgroundColor='#0000FF';
    document.querySelector('.number').style.width="15rem";
})
