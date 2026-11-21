const comparisonControls = document.querySelector(".comparison-controls");
const comparisonButtons = comparisonControls.querySelectorAll("button");

function showComparison(selectedButton) {
  for (const button of comparisonButtons) {
    const selected = button === selectedButton;
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-pressed", String(selected));
    panel.hidden = !selected;
  }
}

for (const button of comparisonButtons) {
  button.addEventListener("click", () => showComparison(button));
}

showComparison(comparisonButtons[0]);
comparisonControls.hidden = false;
