import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-2xl flex flex-col items-center mt-10 mb-8">
        <Image src="/logo.svg" width={140} height={32} alt="EcoNest logo" priority />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-emerald-900 text-center leading-tight">
          Create a Greener, Healthier Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-emerald-700 text-center max-w-xl">
          EcoNest curates eco-friendly home essentials crafted from sustainable materials. Join our waitlist for exclusive early access and inspiration on building your sustainable oasis.
        </p>
      </header>
      <section className="w-full max-w-md flex flex-col items-center bg-white/80 rounded-lg shadow-lg px-8 py-6 backdrop-blur-md">
        <JoinWaitlistForm />
      </section>
      <footer className="mt-12 text-emerald-700 text-sm opacity-70">© 2024 EcoNest – Sustainable Home Goods</footer>
    </main>
  );
}

function JoinWaitlistForm() {
  return (
    <form
      className="w-full flex flex-col gap-4"
      action="https://formspree.io/f/mvojkbpe" method="POST"
    >
      <label htmlFor="email" className="font-semibold text-sm text-emerald-900">Email for early access</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="your@email.com"
        className="border border-emerald-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none text-lg bg-emerald-50"
      />
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold rounded-lg py-3 mt-2 transition"
      >
        Join the Waitlist
      </button>
      <p className="text-xs text-emerald-500 mt-1 opacity-90">No spam. Just eco inspiration & early-bird perks.</p>
    </form>
  );
}
