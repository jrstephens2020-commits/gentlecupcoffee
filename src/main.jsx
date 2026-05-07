import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const products = [
  {
    id: 'gentle-morning',
    name: 'Gentle Morning Decaf',
    price: 18,
    tag: 'Best Seller',
    desc: 'Low-acid Swiss Water decaf with chocolate, almond, and caramel notes.',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'night-cup',
    name: 'Night Cup Roast',
    price: 21,
    tag: 'Sleep Friendly',
    desc: 'Smooth dark decaf crafted for evening coffee rituals without the jitters.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'starter-box',
    name: 'Low-Acid Starter Box',
    price: 42,
    tag: 'Starter Pick',
    desc: 'Three curated stomach-friendly decaf coffees for finding your perfect cup.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop'
  }
]

function Logo({ small = false }) {
  return (
    <img
      src="/gentle-cup-logo.png"
      alt="Gentle Cup Coffee"
      className={small ? 'h-16 w-auto object-contain' : 'w-full max-w-[520px] object-contain'}
    />
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [adminOpen, setAdminOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  const addToCart = (id) => {
    setCart((items) => [...items, id])
  }

  return (
    <div className="min-h-screen bg-[#f8f3ee] text-[#3b2a21]">
      <header className="sticky top-0 z-20 bg-[#f8f3ee]/90 backdrop-blur-md border-b border-[#eadfd6]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo small />
          <nav className="hidden md:flex gap-8 text-[#6a5245] font-medium">
            <a href="#shop">Shop</a>
            <a href="#quiz">Quiz</a>
            <a href="#reviews">Reviews</a>
          </nav>
          <div className="flex gap-3">
            <button onClick={() => setAdminOpen(true)} className="bg-white border border-[#eadfd6] text-[#6f4e37] px-5 py-3 rounded-2xl shadow-sm font-semibold">Admin</button>
            <button className="bg-[#6f4e37] text-white px-5 py-3 rounded-2xl shadow-md font-semibold">Cart · {cart.length}</button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-block bg-white/70 px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-6">
            Gentle on your stomach • Easy on your sleep
          </div>
          <div className="mb-8"><Logo /></div>
          <h1 className="sr-only">Gentle Cup Coffee</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#5b4033]">Coffee without the compromise.</h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#6a5245] max-w-xl mb-8">
            For people who thought they had to give up coffee. Shop curated low-acid, decaf, and stomach-friendly coffees made for comfort, flavor, and better nights.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#shop" className="bg-[#6f4e37] hover:bg-[#5c3f2c] text-white px-7 py-4 rounded-2xl shadow-lg text-lg font-semibold">Shop Low-Acid Decaf</a>
            <button onClick={() => setQuizOpen(true)} className="bg-white/80 hover:bg-white px-7 py-4 rounded-2xl shadow-md text-lg font-semibold border border-[#e6d6ca]">Take the Coffee Quiz</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop'
          ].map((src, i) => (
            <img key={src} src={src} className={`rounded-3xl h-72 w-full object-cover shadow-2xl ${i === 1 ? 'mt-10' : ''} ${i === 2 ? '-mt-10' : ''}`} />
          ))}
        </div>
      </section>

      <section className="bg-[#efe2d6] py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/70 rounded-3xl p-6"><b>Gentle on your stomach</b><p className="text-sm text-[#6a5245]">Low-acid coffees</p></div>
          <div className="bg-white/70 rounded-3xl p-6"><b>Easy on your sleep</b><p className="text-sm text-[#6a5245]">Decaf-first</p></div>
          <div className="bg-white/70 rounded-3xl p-6"><b>Curated with care</b><p className="text-sm text-[#6a5245]">Quality you trust</p></div>
          <div className="bg-white/70 rounded-3xl p-6"><b>Flavor first</b><p className="text-sm text-[#6a5245]">Because taste matters</p></div>
        </div>
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.3em] text-sm text-[#9b7358] font-semibold mb-3">Shop the collection</p>
        <h3 className="text-4xl md:text-5xl font-serif mb-10">Low-acid decaf favorites</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/85 rounded-[32px] overflow-hidden shadow-lg border border-[#eadfd6]">
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                <span className="absolute top-4 left-4 bg-[#fffaf4] text-[#6f4e37] rounded-full px-4 py-2 text-sm font-semibold shadow-sm">{product.tag}</span>
              </div>
              <div className="p-7">
                <div className="flex justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-semibold text-[#4d3528]">{product.name}</h4>
                  <span className="text-xl font-bold text-[#6f4e37]">${product.price}</span>
                </div>
                <p className="text-[#6a5245] leading-relaxed mb-6">{product.desc}</p>
                <button onClick={() => addToCart(product.id)} className="w-full bg-[#6f4e37] hover:bg-[#5c3f2c] text-white py-4 rounded-2xl font-semibold shadow-md">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="quiz" className="px-6 py-20 bg-[#efe2d6]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Find the cup that works for your body.</h3>
          <p className="text-lg text-[#6a5245] leading-relaxed mb-8">The quiz is ready to connect to your product recommendations.</p>
          <button onClick={() => setQuizOpen(true)} className="bg-[#6f4e37] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">Start Quiz</button>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl md:text-5xl font-serif text-center mb-10">For coffee lovers coming back to coffee.</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'I missed my evening coffee ritual. This made it possible again.',
            'Smooth, cozy, and no caffeine spiral. I finally found my cup.',
            'The starter box is such a smart idea.'
          ].map((review, i) => (
            <div key={review} className="bg-white/80 rounded-3xl p-7 shadow-md border border-[#eadfd6]">
              <div className="text-[#9b7358] mb-4">★★★★★</div>
              <p className="text-[#6a5245] leading-relaxed mb-4">“{review}”</p>
              <div className="font-semibold text-[#4d3528]">Gentle Customer {i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {quizOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-5">
          <div className="bg-[#fffaf4] rounded-[32px] shadow-2xl border border-[#eadfd6] max-w-xl w-full p-8 relative">
            <button onClick={() => setQuizOpen(false)} className="absolute right-5 top-5 h-10 w-10 rounded-full bg-[#efe2d6] text-[#6f4e37] font-bold">×</button>
            <h3 className="text-3xl font-serif text-[#4d3528] mb-4">Coffee Match Quiz</h3>
            <p className="text-[#6a5245] mb-6">Coming next: personalized product matching.</p>
            <button onClick={() => setQuizOpen(false)} className="bg-[#6f4e37] text-white px-6 py-3 rounded-2xl font-semibold">Close</button>
          </div>
        </div>
      )}

      {adminOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-5">
          <div className="bg-[#fffaf4] rounded-[32px] shadow-2xl border border-[#eadfd6] max-w-xl w-full p-8 relative">
            <button onClick={() => setAdminOpen(false)} className="absolute right-5 top-5 h-10 w-10 rounded-full bg-[#efe2d6] text-[#6f4e37] font-bold">×</button>
            <h3 className="text-3xl font-serif text-[#4d3528] mb-4">Admin Dashboard</h3>
            <p className="text-[#6a5245] mb-6">Admin password for next phase: <b>gentleadmin</b></p>
            <button onClick={() => setAdminOpen(false)} className="bg-[#6f4e37] text-white px-6 py-3 rounded-2xl font-semibold">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
