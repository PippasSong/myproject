let str = 'myproject add(추가) git test 파일';
let str1 = '변동사항 추가!';
let str2 = '추가 말고 그냥 코드 변경'
let number01 = 20210902;

// 디자인 패턴 (Design Pattern)
// 템플릿 메소드 패턴 (Template Method Pattern)

function start() {
    printFunction(str);
    cut();
    printFunction(str1);
    cut();
    printFunction(str2);
    cut();

    
}

function cut() {
    console.log('===============================')
}

function printFunction(strParameter) {
    console.log(strParameter);
}

start();