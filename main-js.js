
const allergyArea = document.querySelector('.allergy-area');
const toggleSwitch = document.getElementById('toggle');
const wheatAllergy = document.getElementById('wheat');
const wheatSubCards = document.querySelectorAll('.wheat');

var isDragging = false;
var startPosition = 0;
var startScrollLeft = 0;

// Add event listeners for mouse events
allergyArea.addEventListener('mousedown', handleMouseDown);
allergyArea.addEventListener('mousemove', handleMouseMove);
allergyArea.addEventListener('mouseup', handleMouseUp);
allergyArea.addEventListener('mouseleave', handleMouseUp);

// 마우스 눌렀을 때 함수, 위치 받아오고 커서 그랩으로 바꾸기
function handleMouseDown(event) {
  isDragging = true;
  startPosition = event.clientX;
  startScrollLeft = allergyArea.scrollLeft;
  allergyArea.style.cursor = 'grabbing';
}

// 마우스 움직일 떄 함수, 현재 위치에서 초기 위치를 빼서 스크롤 값 받아와서 보여주기.
function handleMouseMove(event) {
  if (isDragging) {
    var distance = event.clientX - startPosition;
    allergyArea.scrollLeft = startScrollLeft - distance;
  }
}

// 클릭시 그랩 모양
function handleMouseUp(event) {
  isDragging = false;
  allergyArea.style.cursor = 'grab';
}

// 변동이 생기면 알러지 영역에 cut을 붙이고 뗌
toggleSwitch.addEventListener('change', () => {
  allergyArea.classList.toggle('cut');
});


const allergyCards = document.querySelectorAll('.allergy-card');


// 알러지 카드에 이벤트 주기
allergyCards.forEach((card) => {
  // 카드 클릭
  card.addEventListener('click', () => {
    const allergyId = card.getAttribute('id');
    const subCards = document.querySelectorAll('.sub-card');
    subCards.forEach((subCard) => {
      // 만약 카드에 clicked class가 없고,
      if (!card.classList.contains('clicked')) {
        // subCard가 allergy ID와 같은걸 가지고 있으면 subCard를 숨김
        if (subCard.classList.contains(allergyId)) {
          subCard.classList.add('hidden');
        }
        // 그렇지않다면
      } else {
        // otherAllergyIds은 알러지 카드들을 배열함
        const otherAllergyIds = Array.from(allergyCards)
        // 필터링 파트 >> otherCard는 카드와 같지 않아야함. cliked를 포함하고 있는지 확인
          .filter((otherCard) => otherCard !== card && otherCard.classList.contains('clicked'))
          // 클릭한 알레르기 카드의 ID만 포함하는 새 배열을 만듬
          .map((otherCard) => otherCard.getAttribute('id'));

        // 다른 알러지 카드 선택했는데, 그 카드에 다른 알러지 포함되어있으면 서브카드 숨기기, 아니면 보이게하기
        if (otherAllergyIds.length > 0) {
          if (otherAllergyIds.every((otherAllergyId) => subCard.classList.contains(otherAllergyId))) {
            subCard.classList.add('hidden');
          } else {
            subCard.classList.remove('hidden');
          }
        } else {
          subCard.classList.remove('hidden');
        }
      }
    });

    // 카드에 클릭 toggle
    card.classList.toggle('clicked');
  });
});


const subCards = document.querySelectorAll('.sub-card');
let selectedCard = null;
const next = document.querySelector('.next');

// 카드 선택됐을 떄, 색 바꾸고 다음으로 버튼 보이게 하기
subCards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card === selectedCard) {

      card.classList.remove('clicked');
      const subContents = card.querySelector('.contents');
      selectedCard = null;
      next.classList.add('hidden');
    } else {
      if (selectedCard !== null) {
        selectedCard.classList.remove('clicked');
      }

      card.classList.add('clicked');
      selectedCard = card;
      next.classList.remove('hidden');
    }
  });
});

