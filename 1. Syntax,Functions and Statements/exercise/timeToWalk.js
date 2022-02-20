function timeToWalk(steps, lengthInMeter, kmInH) {


    let distanceMeters = steps * lengthInMeter;
    let speedMetersSec = kmInH / 3.6; //(kmInH * 1000/3600);
    let rest = Math.floor( distanceMeters/ 500);
    let time = (distanceMeters / speedMetersSec);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    // if (timeHr < 10) {
    //     console.log(timeHr + "0:" + (timeMin + rest) + ":" + timeSec);
    //   } else {
    //     console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);
    //   }

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
timeToWalk(4000, 0.60, 5)