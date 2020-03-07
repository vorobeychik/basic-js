const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  const regexp = /[a-zA-Z]/g;
  if(sampleActivity === undefined ||  typeof sampleActivity !== 'string' || regexp.test(sampleActivity) === true ){return false};
  if( Number(sampleActivity) <= 0 || Number(sampleActivity) > 15){return false}
   let k = 0.693/HALF_LIFE_PERIOD;
   let t = Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)))/k);
   console.log();
   return t
};
