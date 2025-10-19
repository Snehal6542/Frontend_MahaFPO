import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
  <div className="bg-white/20 backdrop-blur-lg text-white px-10 py-8 rounded-2xl shadow-2xl border border-white/30 text-center">
    <h1 className="text-4xl font-extrabold mb-3 drop-shadow-lg">Hi, I'm Snehal 👋</h1>
    <p className="text-lg font-medium opacity-90">
      and this is my <span className="font-semibold text-yellow-300">first frontend project!</span>
    </p>
  </div>
</div>
    );
}
