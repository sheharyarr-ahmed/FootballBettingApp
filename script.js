"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Barcelona",
  players: [
    [
      "Neuer", // Goalkeeper
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Gnabry",
      "Lewandowski",
      "Coman",
    ],
    [
      "Ter Stegen", // Goalkeeper
      "Semedo",
      "Pique",
      "Lenglet",
      "Alba",
      "Busquets",
      "De Jong",
      "Vidal",
      "Messi",
      "Suarez",
      "Griezmann",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Muller"],
  date: "Nov 1st, 2025",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// const [gk, ...fieldPlayers] = [players2];
console.log(gk, fieldPlayers);

const allPlayers = [...players1, players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(game.odds);

const printGoals = function (...players) {
  return console.log(`${players.length} goals were scored.`);
};
printGoals("shery");
