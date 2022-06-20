const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const info = document.getElementById("info");
const customInput = document.getElementById("custom");
const tipAmount = document.getElementById("tip_amount");
const totalAmount = document.getElementById("total_amount");
const btnReset = document.getElementById("reset");
let tip = 0;
let bill = 0;
let people = 0;
let custom = 0;
function count() {
  if ((custom != 0 || tip != 0) && bill != 0 && people != 0) {
    if (custom == 0) {
      tipAmount.innerHTML = `$${((bill * (tip / 100)) / people).toFixed(2)}`;
      totalAmount.innerHTML = `$${(
        (bill * (tip / 100)) / people +
        bill
      ).toFixed(2)}`;
    } else {
      tipAmount.innerHTML = `$ ${((bill * (custom / 100)) / people).toFixed(
        2
      )}`;
      totalAmount.innerHTML = `$${(
        (bill * (custom / 100)) / people +
        bill
      ).toFixed(2)}`;
    }
  }
}
function reset() {
  tip = 0;
  bill = 0;
  people = 0;
  custom = 0;
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  info.classList.add("hide");
  tipAmount.innerHTML = " $0.00";
  totalAmount.innerHTML = " $0.00";
  for (let i = 0; i < document.querySelectorAll(".btns").length; i++) {
    document.querySelectorAll(".btns")[i].classList.remove("onselect");
  }
}
btnReset.addEventListener("click", reset);
billInput.addEventListener("change", function () {
  bill = Number.parseFloat(billInput.value);
  count();
});
customInput.addEventListener("change", function () {
  custom = Number.parseInt(customInput.value);
  if (custom != 0) {
    for (let i = 0; i < document.querySelectorAll(".btns").length; i++) {
      document.querySelectorAll(".btns")[i].classList.remove("onselect");
    }
  }
  count();
});
peopleInput.addEventListener("change", function () {
  people = Number.parseInt(peopleInput.value);

  if (peopleInput.value == 0) {
    peopleInput.classList.add("warn");
    info.classList.remove("hide");
  } else {
    count();
    peopleInput.classList.remove("warn");
    info.classList.add("hide");
  }
});
for (let i = 0; i < document.querySelectorAll(".btns").length; i++) {
  document.querySelectorAll(".btns")[i].addEventListener("click", function () {
    tip = Number.parseInt(this.innerHTML);
    custom = 0;
    customInput.value = "";
    let temp = i;
    count();
    document.querySelectorAll(".btns")[i].classList.add("onselect");
    for (let i = 0; i < document.querySelectorAll(".btns").length; i++) {
      if (i != temp) {
        document.querySelectorAll(".btns")[i].classList.remove("onselect");
      }
    }
  });
}
