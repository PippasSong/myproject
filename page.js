let str = 'myproject 관리 git test 파일';
let number01 = 20210902;

function start() {
    printFunction();
    cut();
    console.log(number01);
}

function cut() {
    console.log('===============================')
}

function printFunction() {
    console.log(str);
}

// pair 프로그래밍 실습 예제
function printASCIIArt(){
  return(`__________████████_____██████
  _________█░░░░░░░░██_██░░░░░░█
  ________█░░░░░░░░░░░█░░░░░░░░░█
  _______█░░░░░░░███░░░█░░░░░░░░░█
  _______█░░░░███░░░███░█░░░████░█
  ______█░░░██░░░░░░░░███░██░░░░██
  _____█░░░░░░░░░░░░░░░░░█░░░░░░░░███
  ____█░░░░░░░░░░░░░██████░░░░░████░░█
  ____█░░░░░░░░░█████░░░████░░██░░██░░█
  ___██░░░░░░░███░░░░░░░░░░█░░░░░░░░███
  __█░░░░░░░░░░░░░░█████████░░█████████
  _█░░░░░░░░░░█████_████___████_█████___█
  _█░░░░░░░░░░█______█_███__█_____███_█___█
  █░░░░░░░░░░░░█___████_████____██_██████
  ░░░░░░░░░░░░░█████████░░░████████░░░█
  ░░░░░░░░░░░░░░░░█░░░░░█░░░░░░░░░░░░█
  ░░░░░░░░░░░░░░░░░░░░██░░░░█░░░░░░██
  ░░░░░░░░░░░░░░░░░░██░░░░░░░███████
  ░░░░░░░░░░░░░░░░██░░░░░░░░░░█░░░░░█
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
  ░░░░░░░░░░░█████████░░░░░░░░░░░░░░██
  ░░░░░░░░░░█▒▒▒▒▒▒▒▒███████████████▒▒█
  ░░░░░░░░░█▒▒███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
  ░░░░░░░░░█▒▒▒▒▒▒▒▒▒█████████████████
  ░░░░░░░░░░████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
  ░░░░░░░░░░░░░░░░░░██████████████████
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░██
  ▓██░░░░░░░░░░░░░░░░░░░░░░░░██
  ▓▓▓███░░░░░░░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓███░░░░░░░░░░░░░░░██
  ▓▓▓▓▓▓▓▓▓███████████████▓▓█
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█`);

}

start();
