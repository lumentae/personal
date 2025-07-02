import Image from "next/image";

export interface LogoProps {
    name: string;
    file?: string;
}

export const Logo = (props: LogoProps) => {
    let filename = props.file;
    if (!props.file)
        filename = props.name;

    return (
        <div className="game-card rounded-xl">
            <div className="flex justify-center">
                <Image src={"/" + filename + ".png"} alt={props.name} width={200} height={200} className="rounded-3xl image"/>
            </div>
            <h2 className="text-xl font-bold">{props.name}</h2>
        </div>
    );
};