
// x버튼 누르면 카드 사라지게하기
const xButtons = document.querySelectorAll('.x');

xButtons.forEach((xButton) => {
  xButton.addEventListener('click', () => {
    const pickCard = xButton.parentElement;
    pickCard.style.display = 'none';
  });
});

