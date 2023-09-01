const refs = {
  days:document.querySelector('[data-value="days"]'),
  hours:document.querySelector('[data-value="hours"]'),
  mins:document.querySelector('[data-value="mins"]'),
  secs:document.querySelector('[data-value="secs"]')
}

class CountdownTimer{
  constructor({selector, targetDate}){
    this.selector = selector,
    this.targetDate = targetDate
  }
  start(){
    setInterval(
      ()=>{
        const time = this.targetDate-Date.now()

        if (time>0) {
          refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
        
          refs.hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

          refs.mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

          refs.secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }
        else{
          
        }

      }, 1000
    )
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2023'),
});

timer.start()

console.log(timer)





