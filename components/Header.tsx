
export default function Header() {
    return (
        <header className="h-screen w-full flex flex-col items-center justify-center text-center relative z-10 p-4">
            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-4"
                style={{ textShadow: '0px 2px 10px rgba(0,0,0,0.5)' }}
            >
                Sikkim
            </h1>
            <p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                style={{ textShadow: '0px 2px 5px rgba(0,0,0,0.5)' }}
            >
                From mountains to valleys, From sky to water
            </p>
            <p className="mt-4 text-sm text-gray-400 animate-pulse">
                [ Move your mouse to interact with the crystal ]
            </p>
        </header>
    );
}
