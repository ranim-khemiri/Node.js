const generator = require("generate-password");

const password = generator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
});

console.log("Mot de passe généré :", password);
