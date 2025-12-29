const form = document.getElementById("komentarForm");
const komentar = document.getElementById("komentar");
const counter = document.getElementById("counter");

komentar.addEventListener("input", () => {
  counter.textContent = komentar.value.length + " / 200 karakter";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const isiKomentar = komentar.value.trim();

  if (nama === "" || email === "" || isiKomentar === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  if (isiKomentar.length < 10) {
    alert("Komentar minimal 10 karakter.");
    return;
  }

  alert("Terima kasih! Komentar Anda berhasil dikirim.");

  form.reset();
  counter.textContent = "0 / 200 karakter";
});
