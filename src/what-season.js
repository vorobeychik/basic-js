module.exports = function getSeason( date ) {

  if(typeof  date === "undefined" ){return 'Unable to determine the time of year!'}
  if(!date.getTime()){throw new Error('asd')}
  let newDate = date.getMonth() ;
  if(newDate === 0 || newDate === 1 || newDate === 11){return 'winter'}
  if(newDate === 2 || newDate === 3 || newDate === 4){return 'spring'}
  if(newDate === 5 || newDate === 6 || newDate === 7){return 'summer'}
  if(newDate === 8 || newDate === 9 || newDate === 10){return 'autumn'}
};
