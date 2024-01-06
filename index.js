let  startTime = 0;
let timer;
let isRunning = false;
let lapCount = 1;

const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.querySelector('.laps');

let [hour,minute,second,millisec]=[0,0,0,0]
  
function startTimer(){
  millisec++;
  if (millisec===100){
    millisec=0;
    second++;
    if (second===60){
      second=0;
      minute++;
      if(minute===60){
        minute=0;l
        hour++;
        if(hour=24){
          hour=0;
        }
      }
    }
  }
  let s=second<10 ? "0"+ second : second;
  let h=hour<10 ? "0"+ hour : hour;
  let m=minute<10 ? "0"+ minute : minute;
  let ms=millisec<10 ? "0"+ millisec : millisec;
  display.innerHTML= h+":"+m+":"+s+":"+ms;
}

function pauseTimer(){
  clearInterval(timer);

}
function resetTimer(){
  clearInterval(timer);
  display.innerHTML='00:00:00:00';
}




function lapTime() {
  const lapTime = document.createElement('li');
  lapTime.textContent = `Lap ${lapCount}: ${display.textContent}`;
  lapsList.prepend(lapTime);
  lapCount++;
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timer=setInterval(startTimer,10);
    isRunning = true;
  }
});

pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
    isRunning = false;
  }
});

resetBtn.addEventListener('click', () => {
  resetTimer();
  isRunning = false;
});

lapBtn.addEventListener('click', () => {
  if (isRunning) {
    lapTime();
  }
});
