
const numberModule = (num) => {
 
    if ( num % 2 == 0 ) { 
        return console.log('짝수 입니다.'); 
    } else { 
        return console.log('홀수 입니다.'); 
    }

};

module.exports = numberModule;