import Link from 'next/link';

export default function Photography() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-48 py-24 flex justify-between items-center">
        <h1 className="text-5xl font-black tracking-tight">HEADWORKS</h1>
        <div className="flex gap-6 text-xs font-bold tracking-wide">
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-600">ABOUT</span>
          </Link>
          <Link href="/work">
            <span className="cursor-pointer hover:text-gray-600">WORK</span>
          </Link>
        </div>
      </nav>
      
      <section className="p-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Paintings</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <p className="text-gray-600">Image 1</p>
          </div>
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <p className="text-gray-600">Image 2</p>
          </div>
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <p className="text-gray-600">Image 3</p>
          </div>
        </div>
      </section>
    </main>
  );
}