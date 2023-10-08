document.getElementById("popupButton").addEventListener("click", function () {
  document.getElementById("videoPopup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("videoPopup").style.display = "none";
});
function showMessage() {
  alert(
    "Ваше сообщение успешно отправлено! Ожидайте ответ на ваши контактные данные ;)"
  );
}

var button = document.getElementById("button_orderr");

button.addEventListener("click", showMessage);
/*forcareer+page*/
function openPage(url) {
  window.location.href = url;
}
// Получаем все элементы с классом "arrow"
// Получаем все элементы с классом "arrow"
// Получаем все элементы с классом "strelka_header"
const arrows = document.querySelectorAll(".strelka_header");
