import express, { json } from "express";
import fetch from "node-fetch";
import dotenv from 'dotenv';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
const APIkey = process.env.REACT_APP_STEAM_API_KEY;

app.use(express.json());
app.use(
  cors({
    origin: "https://cs-archive-backend.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/api/player", async (req, res) => {
  const steamId = req.query.steamid;
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${APIkey}&steamids=${steamId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/steambans", async (req, res) => {
  const steamId = req.query.steamid;
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v0001/?key=${APIkey}&steamids=${steamId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/player_level", async (req, res) => {
  const steamId = req.query.steamid;
  const url = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${APIkey}&steamid=${steamId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/player_games", async (req, res) => {
  const steamId = req.query.steamid;
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${APIkey}&steamid=${steamId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let filteredData = { response: { game_count: 0, games: [] } };

    if (data.response && Array.isArray(data.response.games)) {
      data.response.games.forEach((game) => {
        if (game.appid === 10 || game.appid === 730) {
          filteredData.response.games.push(game);
          filteredData.response.game_count++;
        } else if (game.appid === 240) {
          filteredData.response.lastGame = game;
        }
      });
      
      if (filteredData.response.lastGame) {
        filteredData.response.games.push(filteredData.response.lastGame);
        filteredData.response.game_count++;
        delete filteredData.response.lastGame;
      }
    }

    console.log(filteredData);

    res.json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
