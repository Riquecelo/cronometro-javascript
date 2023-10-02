const minuto = document.querySelector('#min');
const segundo = document.querySelector('#seg');
const milisegundo = document.querySelector('#mili');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resumeBtn = document.querySelector('#resume');
const resetBtn = document.querySelector('#reset');


let interval;
let minutoEl = 0;
let segundoEl = 0;
let milisegundoEl = 0;
let estaPause = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(()=>{
        if(!estaPause){
            milisegundoEl += 10;
            if(milisegundoEl === 1000){
                segundoEl += 1;
                milisegundoEl = 0;
            }
            if(segundoEl == 60){
                minutoEl += 1;
                segundoEl = 0;
            }
        }
        minuto.textContent = formatarTimer(minutoEl);
        segundo.textContent = formatarTimer(segundoEl);
        milisegundo.textContent = milisegundoEl;
    },10)
    pauseBtn.style.display = 'block';
    startBtn.style.display = 'none';
}

function pauseTimer(){
    estaPause = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function resumeTimer(){
    estaPause = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer(){
    clearInterval(interval);
    estaPause = false;
    minutoEl = 0;
    segundoEl = 0;
    milisegundoEl = 0;
    minuto.textContent = "00";
    segundo.textContent = "00";
    milisegundo.textContent = "000";
    
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";
    startBtn.style.display = "block";
} 

function formatarTimer(time){
    return time < 10 ? `0${time}`: time;
}