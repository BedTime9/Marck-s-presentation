/**
 * Javascript para o projeto do marck.
 */

// Seleciona TODOS os botões

const extra = document.querySelector("#extra");
const extra1 = document.querySelector("#extra1");
const extra2 = document.querySelector("#extra2");
const extra3 = document.querySelector("#extra3");

// Kraken

function extraText() {
  let result = document.querySelector("#result");
  result.style.margin = "10px";

  if (result.innerHTML.trim() === "") {
    extra.innerHTML = "Ler menos.";
    result.innerHTML = "- A giant creature similar to an octopus or squid <br>";
    result.innerHTML +=
      "- Its existence spread from tales of Scandinavian fishermen in the 15th century <br>";
    result.innerHTML +=
      "- It was feared for destroying ships and creating whirlpools <br>";
    result.innerHTML +=
      "- It caused maritime expeditions to the north to be more cautious <br>";
    result.innerHTML +=
      "- Many ships docked on it, mistaking it for an island due to its gigantic size <br>";

    console.log("Working");
  } else {
    extra.innerHTML = "Ler mais.";
    result.innerHTML = "";
  }
}
extra.addEventListener("click", extraText);

// Umibozu

function extraText1() {
  let result1 = document.querySelector("#result1");
  if (result1.innerHTML.trim() === "") {
    extra1.innerHTML = "Ler menos."
    result1.innerHTML =
      "- A sea spirit from Japanese mythology that was the guardian of the seas <br>";
    result1.innerHTML += "- It had the appearance of a humanoid shadow <br>";
    result1.innerHTML +=
      "- It appeared in calm waters and sank fishing boats <br>";
    result1.innerHTML +=
      "- It symbolized the fear and respect that the Japanese had for the sea <br>";
    result1.innerHTML +=
      "- It was believed that it appeared to those who talked too much about the sea and broke taboos <br>";
    result1.innerHTML +=
      "- In some regions of Japan, it was said that it appeared as a woman who took people to the bottom of the ocean <br>";
    console.log("Working");
  } else {
    extra1.innerHTML = "Ler mais.";
    result1.innerHTML = "";
  }
}
extra1.addEventListener("click", extraText1);

// Leviathan

function extraText2() {
  let result2 = document.querySelector("#result2");
  if (result2.innerHTML.trim() === "") {
    extra2.innerHTML = "Ler menos.";
    result2.innerHTML +=
      "- A colossal sea monster from Judeo-Christian mythology <br>";
    result2.innerHTML +=
      "- Mentioned in the Old Testament, especially in the Book of Job <br>";
    result2.innerHTML +=
      "- Symbolizes primordial chaos and God's power over the forces of nature <br>";
    result2.innerHTML +=
      "- It fights against God in the Jewish apocalypse and is defeated at the end of time <br>";
    console.log("Working");
  } else {
    extra2.innerHTML = "Ler mais.";
    result2.innerHTML = "";
  }
}
extra2.addEventListener("click", extraText2);

// Jormungandr

function extraText3() {
  let result3 = document.querySelector("#result3");
  if (result3.innerHTML.trim() === "") {
    extra3.innerHTML = "Ler mais.";
    result3.innerHTML =
      "- A colossal creature from Norse mythology, so large that it encircles the earth biting its own tail <br>";
    result3.innerHTML +=
      "- It is called the Midgard Serpent, which among the nine worlds of Norse mythology would be Earth <br>";
    result3.innerHTML +=
      "- It is the second son of Loki and the giantess Angrboda <br>";
    result3.innerHTML +=
      "- The main character of the end of times in Norse mythology, Ragnarok <br>";
    result3.innerHTML +=
      "- It was destined to fight against Thor in Ragnarok and be killed <br>";
    result3.innerHTML +=
      "- In some Norse traditions, it was said that its movements generated tsunamis and earthquakes, and this was a sign that the end of times was approaching <br>";
    console.log("Working");
  } else {
    extra.innerHTML = "Ler mais.";
    result3.innerHTML = "";
  }
}
extra3.addEventListener("click", extraText3);
