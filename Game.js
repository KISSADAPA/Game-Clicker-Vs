score_1 = 0;
score_2 = 0;
countdown = 10;
document.body.onkeyup = function(k) {
    key = k.code;
    if (key == 'KeyS') {
        press1();
    }
    else if (key == 'ArrowDown') {
        press2();
    }
}
setTimeout(function(){
    the_press1.setAttribute('onclick','');
    the_press2.setAttribute('onclick','');
    document.body.setAttribute('onkeyup','');
},10000);
setInterval(function(){
    if (countdown > 0){
        countdown--;
        the_countdown.innerText = countdown;
    }
},1000);
function updateScore() {
    the_score1.innerText = score_1;
    the_score2.innerText = score_2;
}
function press1() {
    score_1++;
    updateScore();
}
function press2() {
    score_2++;
    updateScore();
}