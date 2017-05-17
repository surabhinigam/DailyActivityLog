export const idToDay = { 
    Su: 'Sunday', 
    Mo: 'Monday', 
    Tu: 'Tuesday', 
    We: 'Wednesday', 
    Th: 'Thursday', 
    Fr: 'Friday', 
    Sa: 'Saturday'
    };

export const idToMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}