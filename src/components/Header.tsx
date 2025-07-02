import Link from "next/link";

export const Header = () => {
    return (
        <header className="text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-center items-center content-center">
                <nav>
                    <ul className="flex gap-6 text-lg items-center content-center">
                        <li>
                            <Link href="/" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                        </li>
                        <li>
                            <Link href="/games" className="hover:text-gray-300">Games</Link>
                        </li>
                        <li>
                            <Link href="/about/studio" className="hover:text-gray-300">About Studio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};