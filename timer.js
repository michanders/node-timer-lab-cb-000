function timeType(){
  let time = process.argv[2].split("");
  var type = time[1];
  var num = parseInt(time[0]);
  type === "min" ? (num *= 60) : num;
  timer(num);
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
