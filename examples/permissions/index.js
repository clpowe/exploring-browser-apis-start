const get_permissions = document.getElementById("query-permissions");
const perm_status = document.getElementById("status");

get_permissions.addEventListener("click", async () => {
  if ("")
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
});
