// Practice Using find() to Isolate a Specific Result
// Let's create a function that uses the method find() to single out a
// specific result in game record data for the 
// Kansas City Chiefs football team. We want to find out if, 
// at any point in the team's existence, they've had a win in t
// he Superbowl. Our data looks like this:

const record = [
  {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]


// record.forEach(getTheResults)
// function getTheResults(eachObj) {
//     console.log(eachObj.result)
// }
superbowlWin(record);

function superbowlWin (anArray) {
    const firstWin = anArray.find(eachObj => 
    eachObj.result === "W")

    if(firstWin){
        return firstWin.year;
    }
    else{
        return firstWin;
    }

}

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined
