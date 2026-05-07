
import GentleCupLogo from './components/GentleCupLogo'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ee] text-[#3b2a21]">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="inline-block bg-white/70 px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-6">
          Gentle on your stomach • Easy on your sleep
        </div>

        <div className="mb-10">
          <GentleCupLogo />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#5b4033]">
          Coffee without the compromise.
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-[#6a5245] max-w-xl mb-8">
          For people who thought they had to give up coffee.
        </p>
      </section>
    </main>
  )
}
