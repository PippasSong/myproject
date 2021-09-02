let str = 'myproject add(추가) git test 파일';
let str1 = '변동사항 추가!';
let number01 = 20210902;

function start() {
    printFunction(str);
    cut();
    console.log(number01);
    cut();
    console.log(str1);
}

function cut() {
    console.log('===============================')
}

function printFunction(strParameter) {
    console.log(strParameter);
}



start();