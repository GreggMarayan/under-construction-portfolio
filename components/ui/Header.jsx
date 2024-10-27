export function Header() {

    return (
        <>
            <header className="flex justify-between justify-sticky items-center sticky top-0 bg-white shadow-md z-10">
                <div>
                    <h1 className="text-xl font-bold p-10">Felhony!!!</h1>
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-4 pr-10">
                            <li><a href="#home" className="text-gray-700">Music</a></li>
                            <li><a href="#about" className="text-gray-700">Tours</a></li>
                            <li><a href="#contact" className="text-gray-700">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );

}