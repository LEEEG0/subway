const cheeseBoxes = document.querySelectorAll(".cheese-box");
const animations = document.querySelectorAll(".ani");

// 애니메이션 보이지 않게 적용해놓기
animations.forEach(animation => {
  animation.style.display = "none";
});


cheeseBoxes.forEach((cheeseBox, index) => {
  let isClicked = false;

  
  cheeseBox.addEventListener("click", () => {
    if (!isClicked)  { // 치즈박스 처음선택
      cheeseBoxes.forEach((box, i) => {
        if (i !== index) {
          box.classList.remove("clicked");
          animations[i].classList.remove("show");
          animations[i].style.display = "none"; // 다른 치즈박스의 애니메이션을 숨김
        }
      });

      // 현재 클릭된 치즈박스에 선택된 상태를 추가
      cheeseBox.classList.add("clicked");
      animations.forEach(animation => {
        animation.classList.remove("show");
      });

      // 현재 클릭된 치즈박스에 해당하는 애니메이션을 보여즘
      animations[index].style.display = "block";
      animations[index].classList.add("show");
      isClicked = true;
    } else { // 치즈박스가 이미 클릭된 경우
      cheeseBox.classList.remove("clicked");
      animations[index].classList.remove("show");
      animations[index].style.display = "none"; // 치즈박스가 다시 클릭된 경우 애니메이션을 숨김
    }
  });
});


