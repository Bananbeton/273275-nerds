<script>
  var btn = document.querySelector(".open-popup");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".esc");
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=e-mail]");
  var text = popup.querySelector("[name=text]");


  btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show")
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
  });

  form.addEventListener("submit", function(event) {
    if (!name.value || !email.value || !text.value) {
        event.preventDefault();
      }
  });
</script>
