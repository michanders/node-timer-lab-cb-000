function timeType(){
  let [time, type] = process.argv[2].split("");
  type === "min" ? timer(num*60) : timer(num);
}

function timer(seconds){
  var seconds = seconds;
  global.setInterval(function() {
    if(seconds === 0) {
      console.log("Time is up!");
      global.clearInterval(this);
    }
    else {
      seconds--;
      console.log("Left: +" `${seconds}`+"s");
    }
  }, 1000)
}

timeType();
