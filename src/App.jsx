import React from 'react'
import Spline from '@splinetool/react-spline'
import Header from './components/Header'
import Footer from './components/Footer'
import SidebarLayout from './components/Sidebar'
import './components/Header.css'
import './components/Footer.css'
import './components/Sidebar.css'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(120deg, #fceff9 0%, #f8edeb 100%)' }}>
      <Header />

      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-medium text-rose-500 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff4d6d] mr-2" />
              React • Components • Beautiful UI
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-[#111827]">
              Build stunning UIs with a vibrant component kit
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#374151] max-w-2xl">
              A modern playground showcasing a sticky header, fixed footer, and a full-height sidebar layout — styled with our signature rose hue.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-[#ff4d6d] text-white px-5 py-3 font-semibold shadow-lg shadow-rose-300/40 hover:opacity-90 transition">Get started</a>
              <a href="#learn-more" className="inline-flex items-center rounded-xl bg-white text-[#111827] px-5 py-3 font-semibold border border-black/10 hover:bg-black/5 transition">Learn more</a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fceff9] via-transparent to-transparent" />
      </section>

      <main className="max-w-7xl mx-auto px-6 mt-10">
        <SidebarLayout>
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold text-[#111827]">Reusable Components</h2>
              <p className="mt-2 text-[#374151]">Compose your interface using isolated, reusable pieces. Each piece comes with its own stylesheet and clean structure.</p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-[#111827]">Responsive by Design</h2>
              <p className="mt-2 text-[#374151]">Layouts adapt from mobile to desktop. The sidebar becomes sticky under the header and the footer stays in view.</p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-[#111827]">Tailored Aesthetic</h2>
              <p className="mt-2 text-[#374151]">Primary color set to #ff4d6d with a soft gradient background for an elegant, modern feel.</p>
            </div>
          </div>
        </SidebarLayout>
      </main>

      <div className="h-24" />
      <Footer />
    </div>
  )
}

export default App
