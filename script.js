function goToOrder() {
  var input = document.getElementById("areaInput");
  var options = document.getElementById("areas").options;
  var fee = null;

  for (var i = 0; i < options.length; i++) {
    if (options[i].value === input.value) {
      fee = options[i].getAttribute("data-fee");
      break;
    }
  }

  if (fee === null) {
    alert("يرجى اختيار منطقة صحيحة");
    return;
  }

  localStorage.setItem("area", input.value);
  localStorage.setItem("fee", fee);

  window.location.href = "order.html";
}
window.addEventListener("load", () => {
  setTimeout(() => {
    const boot = document.getElementById("boot-screen");
    const main = document.getElementById("main-content");

    boot.style.transition = "opacity 0.8s";
    boot.style.opacity = "0";

    setTimeout(() => {
      boot.remove();
      main.style.display = "block";
    }, 800);
  }, 2500);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered.', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}
