// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//////////// Function should now receive 2 arrays temps //////////

const calcTempAmplitudeNew = function (t1, t2) {
    
    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 0,], [9, 1, 5]);
console.log(amplitudeNew);

//////////////////////////// DEBUGGING ///////////////////////////////
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'cels',
       
       // C) FIX
        value: Number(prompt('Degrees celsius')) // prompt always gives you a string. 
    }

    // B) FIND
    console.table(measurement); // Use console.log() to find errors. 

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
   
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin());


////////////////////////// Coding Challenge 1 //////////////////////

// Calculating Amplitude
const calcTemp = function(temp1, temp2) {
    const temps = temp1.concat(temp2);
    //console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min)
    return max - min;
    
}
 const amplitude = calcTemp([17, 21, 23], [12, 5, -5, 0, 4]);
 console.log(amplitude);

///////////////////

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) { 
    let message = ""; 
    for (let i = 0; i < arr.length; i++){    
        message += "..." + arr[i] + '°C in ' + Number(i+1) + ' days ... ' 
     }
     console.log(message);
}
printForecast(temperatures1);
printForecast(temperatures2);
*/

