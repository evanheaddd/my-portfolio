import Link from 'next/link';

export default function Skys() {
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
        <div className="w-full max-w-2xl px-16 py-12">
          
          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="w-full h-96 bg-gray-300 rounded flex items-center justify-center">
                <p className="text-gray-600">Image {num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}