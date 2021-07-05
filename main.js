import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/tools/NessBorder/style.css";
import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
