// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};


const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };

// function wrapAdjective() {
//     return function () {
//             const word = 'special';
//             return `You are ${word}`;
//             return function 
    

//     }
// }

function wrapAdjective(visualFlair = "*", adjective = "special") {
    return function(adjective = 'special') {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }

  wrapAdjective("%")("a dedicated programmer");