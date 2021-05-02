const fs= require('fs')
// 1 - what floor does end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1(){
    fs.readFile('./santa.txt', (err,data)=>{
        const direction = data.toString();
        const directionArray= direction.split('')
        const answer= directionArray.reduce((acc, currentValue)=>{
            if(currentValue === '('){
               return acc += 1;
            } else if(currentValue === ')'){
                return acc -= 1;
            }
        },0)
        console.log(answer)
    })
}

// question1()



// 2 - When does santa first enter the basement
function question2(){
    fs.readFile('./santa.txt', (err,data)=>{
        const direction = data.toString();
        const directionArray= direction.split('')
        let accumulator = 0;
        let counter = 0;
        const answer= directionArray.some((currentItem)=>{
            if(currentItem === '('){
                accumulator += 1;
            } else if(currentItem === ')'){
                accumulator -= 1;
            }
            counter++
            return accumulator < 0
        })
        console.log(counter)
    })
}

question2()