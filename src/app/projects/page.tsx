import {Project} from "@/components/Project";
import {List} from "@/components/List";

export default function Projects() {
  return (
      <List>
        <Project title={"TOTKMP"} description={"A multiplayer mod for The Legend of Zelda: Tears of the Kingdom"} stars={0}></Project>
        <Project title={"ServerMod"} description={"A fabric mod for a class server"} stars={0}></Project>
        <Project title={"CSScratch"} description={"Transpiles C# into compileable goboscript code"} stars={0}></Project>
        <Project title={"AntiAixConcept"} description={"This program disables various functions of AixConcept's software"} stars={0}></Project>
        <Project title={"ChessGui"} description={"A very simple chess gui using ImGui and Gera.Chess"} stars={0}></Project>
        <Project title={"CornelsenTools"} description={"WIP: Tools for Cornelsen E-Books"} stars={0}></Project>
      </List>
  );
}
