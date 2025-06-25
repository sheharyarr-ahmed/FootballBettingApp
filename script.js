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

// feature no 1
const [players1, players2] = game.players;
console.log(players1, players2);
console.log(players1);

// feature no 2 to separate the gk and all the other players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// feature no 3 to place all the players in an one team
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// feature no 4 adding the new players to the team 1 that got substitutued in the match
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// feature no 5 accessing the odds from the game

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// feature no 6 goal scoreres from all the players of the match and to collect them in an single arrat

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski");

printGoals(...game.scored);
// console.log(...game.scored);

// feature no 7 tells which team will win based on the odds

team1 < team2 && console.log("team 1 is more likely to win");
team1 > team2 && console.log("team 2 is more likely to win");
