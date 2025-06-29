import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

interface ProjectProps {
    title: string;
    description: string;
    stars: number;
}


export const Project = (props: ProjectProps) => {
    return (
        <>
            <Link href={`https://github.com/lumentae/${props.title}`}>
                <div className="game-card rounded-xl">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p className="text-color">{props.description}</p>
                    <div className="game-stats">
                        <span className="text-xl inline-flex align-middle">
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ width: "1.6rem", height: "1.6rem" }}
                                className="align-middle text-gray-600 pr-2"
                            />{" "}
                            {props.stars}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};