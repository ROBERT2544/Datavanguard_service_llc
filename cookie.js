<script>
  document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");

    // Check if cookies were already accepted
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  });
</script>
