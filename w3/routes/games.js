const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const { getAllGames, checkIsTitleInArray, updateGameArray, updateGamesFile, findGameById, deleteGame } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames, sendAllGames); 
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdatedGames);
gamesRouter.post("/games", getAllGames,checkIsTitleInArray, updateGameArray, updateGamesFile, sendUpdatedGames);

module.exports = gamesRouter;