import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export interface GameProps {
    title: string;
    activePlayers: number;
    visits: number;
    likes: number;
    imageUrl: string;
    gameId: number;
                            
    key: number;
}

export const Game = (props: GameProps) => {
    return (
        <Link href={`https://roblox.com/games/${props.gameId}`}>
            <div className="game-card rounded-xl">
                <div className="flex justify-center">
                    <Image src={props.imageUrl} alt={props.title} width={200} height={200} className="rounded-3xl image"/>
                </div>
                <h2 className="text-xl font-bold">{props.title}</h2>
                <div className="game-stats">
                    <span className="text-xl inline-flex align-middle">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ width: "1.6rem", height: "1.6rem" }}
                            className="align-middle text-gray-600 pr-2"
                        />{" "}
                        {props.activePlayers}
                    </span>
                </div>
            </div>
        </Link>
    );
};