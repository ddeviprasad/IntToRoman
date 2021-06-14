/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if(num > 3999 || num < 1) {
        return false;
    }
    const mapTo = {
        1: 'I',
        5: 'V',
        4: 'IV',
        10: 'X',
        9: 'IX',
        50: 'L',
        40: 'XL',
       100: 'C',
        90: 'XC',
        500: 'D',
        400: 'CD',
        1000: 'M',
        900: 'CM'
    };
    
    let numVal = num;
    if(mapTo[numVal]) {
        return mapTo[numVal];
    }
    let factorMapping = {
        10: {
            code: 'I',
            temp: 'V',
            low: 4
        },
        100: {
            code: 'X',
            temp: 'L',
            low: 40
        },
        1000: {
            code: 'C',
            temp: 'D',
            low: 400
        },
        10000: {
            code: 'M',
            temp: '',
            low: 4000
        }
    };
    let factor = 10;
    let roman = '';
    while(numVal > 0) {
        let res = numVal % factor;
        if(mapTo[res]) {
            roman = mapTo[res] + roman;
        } else {
            let count, temp;
            const item = factorMapping[factor];
            let code = item.code;
            if(res < item.low) {
                temp = '';      
                count = ((res * 10)/factor); 
            } else {
                temp = item.temp;
                count = ((res * 10)/factor) - 5; 
            }
            roman = temp + code.repeat(count) + roman;
        }
        factor = factor * 10;
        numVal = numVal - res;
    }
    
    return roman;
};
