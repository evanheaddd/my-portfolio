import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
<nav className="bg-white border-b border-gray-200 px-48 py-24 flex justify-center items-start relative">
  <div className="flex flex-col text-center">
    <h1 className="text-5xl font-normal tracking-tight">H E A D W O R K S</h1>
  </div>
  <div className="absolute right-48 top-24 flex gap-6 text-xs font-normal tracking-wide">
    <Link href="/">
      <span className="cursor-pointer hover:text-gray-400">ABOUT</span>
    </Link>
    <Link href="/work">
      <span className="cursor-pointer hover:text-gray-400">WORK</span>
    </Link>
  </div>
</nav>
      
      <section className="px-12 py-12 max-w-3xl mx-auto">
        <div className="mb-12">
          <img src="/about-photo.jpg" alt="Evan" className="w-full h-150 object-cover mb-8" />
          <h2 className="text-2xl font-black mb-4 text-center">About</h2>
          <p className="text-gray-700 leading-relaxed text-sm text-center">
            I'm an architect who makes things. I create through paint and wood, exploring ideas as they take shape. Making is how I learn, how I see, how I live.
          </p>
        </div>
      </section>
    </main>
  );
}