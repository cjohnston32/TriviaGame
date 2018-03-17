/** Notes!
 * setTimeout() uses
 *    After 30 seconds (30000ms) give ending screen
 *      Record answers in ending screen, also write code for answer/reply page there
 *    Could use following idea for timer
 *    while(timeRem>0) {
 *      setTimeout(function(){reduce timer},'1000')
 *    }
 *    
 * 1 Possible Ending after 30s:
 * Display Number of Correct, Incorrect, and Unanswered Questions
 *      right answers: "right"
 *      wrong answers: "wrong"
 *      unanswered: '' (falsy!)
 * Need to save inputs from answers and check them against right answers
 */

var timeRem = 30;

// Below code controls and updates timer
var timer = setInterval(function() {
    timeRem--;
    document.getElementById('time').innerHTML = timeRem;
}, '1000');

setTimeout(function() {
    var a1 = document.getElementById('form1').q1.value;
    var a2 = document.getElementById('form2').q2.value;
    var a3 = document.getElementById('form3').q3.value;
    var answers = [a1, a2, a3];
    clearInterval(timer);

    $('#mainDiv').hide();
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    for(var i=0; i<answers.length; i++) {
        if(answers[i]==='right') {
            correct++;
        }
        else if(answers[i]==='wrong') {
            incorrect++;
        }
        else {
            unanswered++;
        }
    }
    document.getElementById('correct').innerHTML = correct;
    document.getElementById('incorrect').innerHTML = incorrect;
    document.getElementById('unanswered').innerHTML = unanswered;
    $('#scoreDiv').show();
},'31000');