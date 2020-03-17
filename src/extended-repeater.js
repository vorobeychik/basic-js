module.exports = function repeater( str, options ) {
    if(options.separator === undefined){options.separator = '+';};
    if(options.repeatTimes === undefined){options.repeatTimes = 1;};
    if(options.additionRepeatTimes === undefined){options.additionRepeatTimes = 1;};
    if(options.addition === undefined){ options.addition = ''};
    if(options.additionSeparator === undefined){options.additionSeparator = ''};
    let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,-(options.additionSeparator.length));
    if(options.additionSeparator.length === 0){
        addition =(options.addition).repeat(options.additionRepeatTimes)
    }
    let one_repeat = str + addition + options.separator;
    str = one_repeat.repeat(options.repeatTimes).slice(0,-(options.separator.length));
    return str
};