function timeType(){
  const time = process.argv[1].split("");
  var type = time[1];
  var num = time[0];
  type === "min" ? (num = num*60) : num;
  timer(num);
}

function timer(seconds){
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
