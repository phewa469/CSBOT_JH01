document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cs-form");
    const input = document.getElementById("user-input");
    const output = document.getElementById("output");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const message = input.value.trim();
      if (!message) return;
  
      output.innerText = `고객님, 문의하신 "${message}" 내용 잘 확인하였습니다. 빠르게 도와드리겠습니다 😊`;
  
      input.value = "";
    });
  });
  