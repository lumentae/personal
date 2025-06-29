import {List} from "@/components/List";
import {Game} from "@/components/Game";

export default function Games() {
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
