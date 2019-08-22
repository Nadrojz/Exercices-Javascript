var userInput = prompt("Message que tu souhaites envoyer à ton adolescent :")

if (userInput[userInput.length - 1] === "?")
  console.log("Ouais ouais ...");
else if (userInput === userInput.toUpperCase() && userInput.trim() != "" )
  console.log("Pwah, calme toi ...");
else if (userInput.toLowerCase().includes("fortnite"))
  console.log("on s'fait une partie soum-soum ?");
else if (userInput.trim() === "")
  console.log("t'es en PLS ?");
else
  console.log("balek");
