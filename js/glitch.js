function generateRandomCharacters() {
  const characters = "107.181.177.137";
  let randomString = "";
  for (let i = 0; i < 15; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}
function updatePlaceholders() {
  document.getElementById("location-placeholder").textContent =
    generateRandomCharacters();
}
setInterval(updatePlaceholders, 130);
