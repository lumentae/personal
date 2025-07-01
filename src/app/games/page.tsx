"use client";

import {List} from "@/components/List";
import {Game, GameProps} from "@/components/Game";
import { useEffect, useState } from "react";

export default function Games() {
  const [games, setGames] = useState<GameProps[]>([]);
  useEffect(() => {
  fetch("https://fynn93.dev/api/games/")
    .then((res) => res.json())
    .then((data) => setGames(data))
    .catch((err) => {
      console.warn("Fetch failed:", err);
    });
  }, [])

  const gameList = games.map(game => 
    <Game title={game.title} activePlayers={game.activePlayers} visits={game.visits} likes={game.likes} imageUrl={game.imageUrl} gameId={game.gameId} key={game.key}></Game>
  );

  return (
    <List>
      {gameList}
    </List>
  );
}