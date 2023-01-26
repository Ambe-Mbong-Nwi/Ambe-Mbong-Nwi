const correctAnswers = ['B', 'A', 'B', 'B'];  //array storing all correct answers
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();     //default is to refresh page which we don't want
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];  //get answers user entered

    //check if answer equals the equivalent position in the correct array, increase score
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
   });
   
    //setting scroll up func to scroll authomatically up when user submits answers
    window.scrollTo(0,0);
    //or scrollTo...

    //show results on page
    result.querySelector('span').textContent = `${score}%`; //go into .result class, find span and overide current text with the variable stored in the score
    result.classList.remove('d-none');   //removx the display none class

    //animating score using setInterval func which increments till it reaches a certain value
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);  //ie every 10ms, set textcontent of result equal to output till we reach score.
});

//WINDOW OBJECT -- mother javascript object that stores everything done on the frontend.

//example   console.log('moi') = window.console.log('moi'). They both display moi on the terminal  

/*setTimeout(() => {
    alert("voila!!!");
}, 2000);   //ie a window func that waits for 2000miliseconds then sends in alert message
*/

