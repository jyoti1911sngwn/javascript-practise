function mysetInterval(callback, delay) {
    let timerId;  // This will hold the ID of the current timeout

    function repeat() {
        callback();                          // 1. Run the user's function
        timerId = setTimeout(repeat, delay); // 2. Schedule the next run
    }

    timerId = setTimeout(repeat, delay);     // Start the first run

    return function stop() {                 // Return a function to stop it
        clearTimeout(timerId);
    };
}


const func = mysetInterval(() => {
  console.log("running one");
}, 1000);

func;
