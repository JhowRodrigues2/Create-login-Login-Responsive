const iptName = document.getElementById("user");
const iptMail = document.getElementById("mail");
const btnSave = document.getElementById("save");
const iptPass = document.getElementById("pass");
const iptCkPass = document.getElementById("ckpass");
const errorCk = document.querySelector(".chkPass");

btnSave.addEventListener("click", () => {
  const valName = iptName.value;
  const valMail = iptMail.value;

  if (valName.length <= 0) {
    iptName.classList.remove("style");
    iptName.classList.add("borda");
  } else {
    iptName.classList.add("style");
    iptName.classList.remove("borda");
  }
  if (valMail.length <= 0) {
    iptMail.classList.remove("style");
    iptMail.classList.add("borda");
  } else {
    iptMail.classList.add("style");
    iptMail.classList.remove("borda");
  }
  if (valMail.includes("@") == false) {
    iptMail.classList.remove("style");
    iptMail.classList.add("borda");
  } else if (valMail.length < 5) {
    iptMail.classList.remove("style");
    iptMail.classList.add("borda");
  }
});

btnSave.addEventListener("click", () => {
  const valPass = iptPass.value;
  const valCkPass = iptCkPass.value;
  const regex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,25}$/;

  const testPass = regex.test(String(valPass));
  const testCkPass = regex.test(String(valCkPass));

  if (testPass !== true && testCkPass !== true) {
    errorCk.innerHTML =
      " *Senha deve conter pelo menos letra maiúscula, minúscula, carac especial e um número!";
    iptPass.classList.remove("style");
    iptPass.classList.add("borda");
  } else if (valPass != valCkPass) {
    {
      iptCkPass.classList.remove("style");
      iptCkPass.classList.add("borda");
      errorCk.innerHTML = " *Senhas diferentes";
    }
  } else {
    iptPass.classList.add("style");
    iptPass.classList.remove("borda");
    iptCkPass.classList.add("style");
    iptCkPass.classList.remove("borda");
    btnSave.innerHTML = "Registrer";
    errorCk.innerHTML = "";
    btnSave.classList.remove("btStyle");
    btnSave.classList.add("btnSave");
  }
});
