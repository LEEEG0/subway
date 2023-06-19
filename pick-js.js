
// 체크박스 체크 보이게 안보이게
const length15cmCheckbox = document.getElementById('length15cm');
const length30cmCheckbox = document.getElementById('length30cm');

length15cmCheckbox.addEventListener('change', function () {
  if (length15cmCheckbox.checked) {
    length30cmCheckbox.checked = false;
    length15cmCheckbox.parentElement.querySelector('label').classList.add('checked');
  } else {
    length15cmCheckbox.parentElement.querySelector('label').classList.remove('checked');
  }
});

length30cmCheckbox.addEventListener('change', function () {
  if (length30cmCheckbox.checked) {
    length15cmCheckbox.checked = false;
    length30cmCheckbox.parentElement.querySelector('label').classList.add('checked');
  } else {
    length30cmCheckbox.parentElement.querySelector('label').classList.remove('checked');
  }
});


const breadItems = document.querySelectorAll('.bread');
// 빵에 선택 class 추가하고 빼기( h뒤에 색 생기는거 )
breadItems.forEach((item) => {
  item.addEventListener('click', () => {
    const isSelected = item.classList.contains('selected');

    breadItems.forEach((bread) => {
      bread.classList.remove('selected');
    });

    if (!isSelected) {
      item.classList.add('selected');
    }
  });
});

// 길이, 빵 선택해야 다음으로 뜨게

const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', toggleNextGreen);
});
breadItems.forEach((bread) => {
  bread.addEventListener('click', toggleNextGreen);
});

function toggleNextGreen() {
  const breadSelected = document.querySelector('.bread.selected');
  const nextGreen = document.querySelector('.next-green');
  
  const isCheckboxChecked = isChecked(checkboxes);
  
  // 만약, 빵과 체크박스 체크되어있으면 다음으로 넘어가는 버튼이 보이게 아니면 안보이게
  if (breadSelected && isCheckboxChecked) {
    nextGreen.classList.add('visible');
  } else {
    nextGreen.classList.remove('visible');
  }
}

// 체크박스 한번에 하나씩만 눌러지게
function isChecked(checkboxes) {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
    }
  }
  return false;
}



