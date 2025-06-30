import {List} from "@/components/List";
import {Game} from "@/components/Game";
import { useEffect, useState } from "react";

interface GameEntry {
  title: string,
  activePlayers: number,
  visits: number,
  likes: number,
  imageUrl: string,
  gameId: number
}

export default function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
      fetch("https://fynn93.dev/api")
        .then((res) => res.json())
        .then((data) => setGames(data));

  })
  const gameList = games.map(game => 
    <Game title={game.title} activePlayers={game.activePlayers} visits={game.visits} likes={game.likes} imageUrl={game.imageUrl} gameId={game.gameId}
  )
  return (
    <List>
      <Game title={"Scary Cat [HORROR]"} activePlayers={234} visits={43234344} likes={120132} imageUrl={"/Scary Cat.png"} gameId={18663227290}></Game>
      <Game title={"Final Order"} activePlayers={234} visits={43234344} likes={120132} imageUrl={"/Scary Cat.png"} gameId={18663227290}></Game>
      <Game title={"Break the System: Code Uprising"} activePlayers={234} visits={43234344} likes={120132} imageUrl={"/Scary Cat.png"} gameId={18663227290}></Game>
      <Game title={"Sled Squad Adventures"} activePlayers={234} visits={43234344} likes={120132} imageUrl={"/Scary Cat.png"} gameId={18663227290}></Game>
      <Game title={"Table of Terrors"} activePlayers={234} visits={43234344} likes={120132} imageUrl={"/Scary Cat.png"} gameId={18663227290}></Game>
    </List>
  );
}
