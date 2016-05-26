// 전역을 오염시키지 말아야 한다.
// 자바스크립트 모듈
// IIFE 패턴
(function(global){
  // 외부 단절된 별도의 독립된 공간
  // 모듈 공간
  // var kipfa = '한국 인터넷 전문가 협회';
  // console.log('in: ', kipfa);
  var document = global.document;
  var go = document.querySelector('.guide-overlay');
  // console.log(go);
  // 언제? 이벤트 핸들링
  // 사용자가 키보드를 눌렀을 때
  // 키보드는 어떤 것을 눌렀나?
  // shift + g키
  document.addEventListener('keydown', toggleGuide);
  // 핸들러(함수)
  //

  function toggleGuide(event) {
    if(event.shiftKey && event.keyCode === 71) {
      go.classList.toggle('show');
    }
  }

}(this));
// console.log('out: ', kipfa);
