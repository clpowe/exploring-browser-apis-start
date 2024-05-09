const share_button = document.getElementById("share");

if ("share" in navigator) {
  share_button.disabled = false;
} else {
  share_button.textContent = "You browser does not support the Web Share API";
}

share_button.addEventListener("click", async () => {
  const text = document.getElementById("text").value;
  const shareData = {
    title: "Shared from Level Up",
    text,
    url: "https://www.leveluptutorials.com",
  };
  await navigator.share(shareData);
});
