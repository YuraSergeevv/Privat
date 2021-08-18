window.onload = function () {
    let tab_1 = document.querySelector('.tab_1');
    let tab_2 = document.querySelector('.tab_2');
    let content_1 = document.querySelector('.content_1');
    let content_2 = document.querySelector('.content_2');
    let buttonOk = document.querySelector('.btn_ok');
    let countIn = document.querySelector('.count-in_js');
    let numberIn = document.querySelector('.number-in_js');
    let dateOut    = document.querySelector('.date-out_js');
    let timeOut    = document.querySelector('.time-out_js');
    let timerOut    = document.querySelector('.timer-out_js');
    let numberOut    = document.querySelector('.number-out_js');
    let countOut    = document.querySelector('.count-out_js');

    let lastList = Array.from(document.querySelectorAll('.last'));

    const date = new Date();
    const dayNow =  date.getDate();
    const monthNow = date.getMonth() + 1;
    const yearNow = date.getFullYear();
    const hourNow = date.getHours();
    const minuteNow = date.getMinutes();
    const secondNow = date.getSeconds();

    let timerMinute = 59;
    let timerSecond = 60;



    // let lastTravel = [
    //     {
    //         series:69420648,
    //         date: setDay(trueDate(Math.floor(Math.random() * (dayNow - 2) + 1)),trueDate(monthNow),trueDate(yearNow)),
    //         time: setTime(trueDate(hourNow),trueDate(minuteNow),trueDate(secondNow)),
    //         number: 494,
    //         count: 1
    //     },
    //     {
    //         series:69421705,
    //         date: setDay(trueDate(dayNow ),trueDate(monthNow),trueDate(yearNow)),
    //         time: setTime(trueDate(hourNow),trueDate(minuteNow),trueDate(secondNow)),
    //         number: 494,
    //         count: 1
    //     },
    // ]





    for (let i = 0; i < lastList.length; i++){
        lastList[i].querySelector('.date-out_js').innerText = '14.08.2021';
        lastList[i].querySelector('.time-out_js').innerText = '14:32:12';
        lastList[i].querySelector('.number-out_js').innerText = '№'+494;
        lastList[i].querySelector('.count-out_js').innerText = 1 + ' шт';
    }





    tab_1.addEventListener('click',firstTab);
    tab_2.addEventListener('click',secondTab)

    buttonOk.addEventListener('click',function (){
       if(numberIn.value && countIn.value){

           countOut.innerText = countIn.value + ' шт';
           numberOut.innerText = '№'+numberIn.value;
           countIn.value='';
           numberIn.value='';
           timeOut.innerText = setTime(trueDate(hourNow),trueDate(minuteNow),trueDate(secondNow));
           dateOut.innerText = setDay(trueDate(dayNow),trueDate(monthNow),trueDate(yearNow));
           timerInterval();
           firstTab();
       }
    })


    function firstTab (){
        tab_2.classList.remove('active');
        tab_1.classList.add('active');
        content_2.classList.remove('active');
        content_1.classList.add('active');
    };
    function secondTab (){
        tab_1.classList.remove('active');
        tab_2.classList.add('active');
        content_1.classList.remove('active');
        content_2.classList.add('active');
    };
    function setTime(hour,minute, second){
         return ( hour+':'+minute+':'+second);
    }
    function setDay(day,month, year){
        return ( day+'.'+month+'.'+year);
    }
    function timerInterval(){
        setInterval(function (){

            timerSecond--;
            timerOut.innerText = (trueDate(timerMinute)+':'+trueDate(timerSecond));
            if(timerSecond == 0){
                timerMinute--;
                timerSecond= 60;
            }
             if(timerMinute == 0){
                 timerMinute = 20;
            }
        },1000)
    }

};

function trueDate(number){
    if(number < 10){
        return('0'+number)
    }
    else{
        return (''+number)
    }
}

