score_1 = 0;
score_2 = 0;
ready = 3;
countdown = 11;
function press3() {
    document.body.onkeyup = function(k) {
        key = k.code;
        if (key == 'KeyS') {
            press1();
        }
        else if (key == 'KeyK') {
            press2();
        }
    }
}
function Ready() {
    button_1.setAttribute('onclick','');
    button_2.setAttribute('onclick','');
    document.body.setAttribute('onkeyup','');
    setInterval(function(){
        if (ready > 0){
            ready--;
            allTime.innerText = ready + 1;
            if (ready == 0){
                Start();
            }
        }
    },1000);
}
function Start() {
    setTimeout(function(){
        button_1.setAttribute('onclick','');
        button_2.setAttribute('onclick','');
        document.body.setAttribute('onkeyup','');
    },11000);
    setInterval(function(){
        if (countdown > 0){
            if (countdown == 11) {
                button_1.setAttribute('onclick','press1()');
                button_2.setAttribute('onclick','press2()');
                document.body.setAttribute('onkeyup','press3()');
            }
            guide_1.innerText = "";
            guide_2.innerText = "";
            countdown--;
            allTime.innerText = "Countdown : " + countdown;
        }
    },1000);
}
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
Ready()