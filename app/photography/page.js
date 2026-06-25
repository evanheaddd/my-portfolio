import Link from 'next/link';

export default function Photography() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-48 py-24 flex justify-center items-start relative">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl font-normal tracking-tight">H E A D W O R K S</h1>
        </div>
        <div className="absolute right-48 top-24 flex gap-6 text-xs font-bold tracking-wide">
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-400">ABOUT</span>
          </Link>
          <Link href="/work">
            <span className="cursor-pointer hover:text-gray-400">WORK</span>
          </Link>
        </div>
      </nav>
      
      <section className="flex justify-center">
        <div className="w-full max-w-4xl px-16 py-12">
          <div className="grid grid-cols-2 gap-8">
            <Link href="/photography/shadows">
              <div className="relative h-64 bg-gray-300 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/shadow-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-normal text-white drop-shadow-lg">shadows</h3>
              </div>
            </Link>
            
            <Link href="/photography/skys">
              <div className="relative h-64 bg-gray-300 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/sky-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-normal text-white drop-shadow-lg">skys</h3>
              </div>
            </Link>
            
            <Link href="/photography/trees">
              <div className="relative h-64 bg-gray-300 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/tree-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-normal text-white drop-shadow-lg">trees</h3>
              </div>
            </Link>
            
            <Link href="/photography/reflections">
              <div className="relative h-64 bg-gray-300 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/reflection-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-normal text-white drop-shadow-lg">reflections</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}