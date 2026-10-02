const fs = require("fs");

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture :", err);
    return;
  }
  console.log(data);
});
