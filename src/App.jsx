import { useState } from 'react'
import { Twitter } from 'lucide-react'
import './App.css'

// Import images
import BRLogo from './assets/BRlogo.png'
import ComingSoonText from './assets/COMINGSOON_.png'
import CryptoBanterLogo from './assets/CryptoBanterWhite.png'
import BackgroundImage from './assets/Background.png'
import DexscreenerIcon from './assets/dexscreener-icon.png'
import DextoolsIcon from './assets/dextools-icon.png'

// Import host images
import Sheldon from './assets/sheldon.png'
import Ran from './assets/ran.png'
import Dylan from './assets/dylan.png'
import Kyle from './assets/kyle.png'

function App() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      {/* Host Images - Four Corners */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Top Left - Sheldon */}
        <a 
          href="https://x.com/Sheldon_Sniper" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 left-4 lg:left-6 xl:top-6 xl:left-16 2xl:left-28 w-24 lg:w-28 xl:w-40 2xl:w-52 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
          title="@Sheldon_Sniper"
        >
          <img src={Sheldon} alt="Sheldon" className="w-full h-auto" />
        </a>
        
        {/* Top Right - Ran */}
        <a 
          href="https://x.com/cryptomanran" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 right-4 lg:right-6 xl:top-6 xl:right-16 2xl:right-28 w-24 lg:w-28 xl:w-40 2xl:w-52 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
          title="@cryptomanran"
        >
          <img src={Ran} alt="Ran" className="w-full h-auto" />
        </a>
        
        {/* Bottom Left - Dylan */}
        <a 
          href="https://x.com/thelordofentry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-24 left-4 lg:left-6 xl:bottom-28 xl:left-16 2xl:left-28 w-24 lg:w-28 xl:w-40 2xl:w-52 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
          title="@thelordofentry"
        >
          <img src={Dylan} alt="Dylan" className="w-full h-auto" />
        </a>
        
        {/* Bottom Right - Kyle */}
        <a 
          href="https://x.com/kyledoops" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-24 right-4 lg:right-6 xl:bottom-28 xl:right-16 2xl:right-28 w-24 lg:w-28 xl:w-40 2xl:w-52 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
          title="@kyledoops"
        >
          <img src={Kyle} alt="Kyle" className="w-full h-auto" />
        </a>
      </div>
      
      {/* Main Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        {/* Logo and Powered By Container */}
        <div className="flex flex-col items-center mb-2 sm:mb-6 lg:mb-8">
          {/* Logo */}
          <div className="mb-1 lg:mb-2 animate-fade-in">
            <img 
              src={BRLogo} 
              alt="Banter Royale Logo" 
              className="w-48 sm:w-80 lg:w-96 xl:w-[420px] h-auto"
            />
          </div>
          
          {/* Powered By Crypto Banter - Aligned with B in BANTER */}
          <div className="flex items-center gap-2 sm:gap-3 animate-fade-in-up self-start -mt-2 lg:-mt-3" style={{ marginLeft: '10.5%' }}>
            <span className="text-white/80 text-xs uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Powered by</span>
            <a 
              href="https://www.youtube.com/@CryptoBanterGroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={CryptoBanterLogo} 
                alt="Crypto Banter" 
                className="h-6 sm:h-7 w-auto"
              />
            </a>
          </div>
        </div>
        
        {/* Coming Soon Text - Responsive sizing */}
        <div className="my-2 sm:my-6 lg:my-10 animate-fade-in-up">
          <img 
            src={ComingSoonText} 
            alt="Coming Soon" 
            className="w-full max-w-[240px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        
        {/* Subscribe Section */}
        <div className="mb-2 sm:mb-5 lg:mb-6 animate-fade-in-up animation-delay-200">
          <h2 className="text-white text-center text-sm sm:text-lg lg:text-xl mb-2 lg:mb-4 font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
            Subscribe for more!
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black/40 border border-white/20 text-white placeholder:text-white/50 h-10 sm:h-11 px-4 sm:px-5 rounded-full backdrop-blur-sm focus:border-red-500 focus:outline-none transition-all text-sm"
              style={{ fontFamily: 'Lato, sans-serif' }}
              required
              disabled={isLoading}
            />
            <button 
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-7 h-10 sm:h-11 rounded-full font-semibold transition-all transform hover:scale-105 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Lato, sans-serif' }}
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          
          {error && (
            <p className="text-red-400 text-xs sm:text-sm mt-2 text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
              {error}
            </p>
          )}
        </div>
        
        {/* Twitter Link */}
        <div className="mb-16 sm:mb-24 animate-fade-in-up animation-delay-300">
          <a 
            href="https://x.com/banter_royale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors group"
          >
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-red-500/20 transition-all">
              <Twitter className="w-5 h-5" />
            </div>
            <span className="text-sm sm:text-base font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>Follow us on X</span>
          </a>
        </div>
      </div>
      
      {/* Token Links - Moved to bottom of page, centered properly */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-4 sm:gap-8 z-20 animate-fade-in-up animation-delay-400">
        <a 
          href="https://dexscreener.com/solana/abag5yndps9uschv4fxc14uuansrmss8nru7en8uy7yg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          title="Dexscreener"
        >
          <img 
            src={DexscreenerIcon} 
            alt="Dexscreener" 
            className="h-10 sm:h-14 w-auto rounded-lg hover:opacity-90 transition-all"
          />
        </a>
        <a 
          href="https://www.dextools.io/app/en/solana/pair-explorer/ABag5ynDPS9uscHv4fXC14uUanSRmss8nRu7En8Uy7yg?t=1760449317648" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          title="Dextools"
        >
          <img 
            src={DextoolsIcon} 
            alt="Dextools" 
            className="h-10 sm:h-14 w-auto rounded-lg hover:opacity-90 transition-all"
          />
        </a>
      </div>
    </div>
  )
}

export default App

