window.onload = function () {
    let temp='';
    let tab_1 = document.querySelector('.tab_1');
    let tab_2 = document.querySelector('.tab_2');
    let content_1 = document.querySelector('.content_1');
    let content_2 = document.querySelector('.content_2');
    let content_3 = document.querySelector('.content_3');
    let buttonOk = document.querySelector('.btn_ok');
    let buttonBuy = document.querySelector('.btn_buy');
    let countIn = document.querySelector('.count-in_js');
    let numberIn = document.querySelector('.number-in_js');
    let dateOut    = document.querySelector('.date-out_js');
    let timeOut    = document.querySelector('.time-out_js');
    let timerOut    = document.querySelector('.timer-out_js');
    let numberOut    = document.querySelector('.number-out_js');
    let countOut    = document.querySelector('.count-out_js');
    let seriesOut    = document.querySelector('.series-out_js');
    let infMoney    = document.querySelector('.inf_money');
    let money    = document.querySelector('.money');
    let plus    = document.querySelector('.plus');
    let minus    = document.querySelector('.minus');
    let kompost    = document.querySelector('.kompost');

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



    for (let i = 0; i < lastList.length; i++){
        lastList[i].querySelector('.date-out_js').innerText = '14.08.2021';
        lastList[i].querySelector('.time-out_js').innerText = '14:32:12';
        lastList[i].querySelector('.number-out_js').innerText = '№'+494;
        lastList[i].querySelector('.count-out_js').innerText = 1 + ' шт';
        lastList[i].querySelector('.series-out_js').innerText = Math.floor(Math.random()*100000000)
    }






    tab_1.addEventListener('click',thirtyTab);
    tab_2.addEventListener('click',secondTab)

    buttonOk.addEventListener('click',function (){
       if(numberIn.value){
           numberOut.innerText = '№'+numberIn.value;
           numberIn.value='';
           money.innerText = Math.floor(Math.random()*200+200) + Math.floor(Math.random()*99)/100 +'грн';
           firstTab();
       }
    });
    buttonBuy.addEventListener('click',function (){
        if(countIn.value){
            seriesOut.innerText = Math.floor(Math.random()*100000000);
            countOut.innerText = countIn.value + " шт";
            numberIn.value= 1;
            timeOut.innerText = setTime(trueDate(hourNow),trueDate(minuteNow),trueDate(secondNow));
            dateOut.innerText = setDay(trueDate(dayNow),trueDate(monthNow),trueDate(yearNow));
            thirtyTab();
        }
    });
    plus.addEventListener('click',function (){
        temp = Number(countIn.value);
       temp++;
       countIn.value = temp;
       infMoney.innerText = infoMoney(temp);
    });

    minus.addEventListener('click',function (){
       if(Number(countIn.value)>1){
           temp = Number(countIn.value);
           temp--;
           countIn.value = temp;
           infMoney.innerText = infoMoney(temp);
       }
    })   ;
    kompost.addEventListener('click',function (){
        timerInterval();
        kompost.remove();
    })


    function firstTab (){
        tab_2.classList.remove('active');
        tab_1.classList.add('active');
        content_2.classList.remove('active');
        content_3.classList.add('active');
    };
    function secondTab (){
        tab_1.classList.remove('active');
        tab_2.classList.add('active');
        content_1.classList.remove('active');
        content_3.classList.remove('active');
        content_2.classList.add('active');
    };
    function thirtyTab (){
        tab_2.classList.remove('active');
        tab_1.classList.add('active');
        content_2.classList.remove('active');
        content_3.classList.remove('active');
        content_1.classList.add('active');
    };
    function setTime(hour,minute, second){
         return ( hour+':'+minute+':'+second);
    }
    function setDay(day,month, year){
        return ( day+'.'+month+'.'+year);
    }
    let dateFinal = Date.parse(date) + 3600000;
    function timerInterval(){
        let dateFinal = Date.parse(new Date()) + 3600000;
        timerOut.innerText = trueDate(59)+' : '+trueDate(59);
        setInterval(function (){
            let now = Date.parse(new Date());
           let time = (dateFinal - now) /1000 -1;
           let min = Math.floor(time/60);
            let sec = time - 60 * min;
            timerOut.innerText = trueDate(min)+' : '+trueDate(sec);
        },1000)
    }

};

function infoMoney (counter){
    return(counter*6);
}

function trueDate(number){
    if(number < 10){
        return('0'+number)
    }
    else{
        return (''+number)
    }
}



