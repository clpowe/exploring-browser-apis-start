const copy_input = document.getElementById("copy-input");
const copy_button = document.getElementById("copy");

copy_button.addEventListener("click", async () => {
  let value = copy_input.value;
  await navigator.clipboard.writeText(value);
  alert(`Copied ${value} to clipboard`);
});
