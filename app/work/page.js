import Link from 'next/link';

export default function Work() {
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
        <div className="w-full max-w-6xl px-16 py-12">
          <div className="grid grid-cols-3 gap-8">
            <Link href="/photography">
              <div className="relative h-96 bg-blue-500 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/photography-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Photos</h3>
              </div>
            </Link>
            
            <Link href="/paintings">
              <div className="relative h-96 bg-green-500 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/paintings-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Art</h3>
              </div>
            </Link>
            
            <Link href="/woodworking">
              <div className="relative h-96 bg-red-500 rounded overflow-hidden cursor-pointer hover:opacity-80 transition flex items-center justify-center" style={{ backgroundImage: 'url(/woodworking-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Wood</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}