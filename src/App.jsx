import { useState } from 'react'
import { Twitter } from 'lucide-react'
import './App.css'

// Import assets
import BRLogo from './assets/BRlogo.png'
import ComingSoonText from './assets/COMINGSOON_.png'
import CryptoBanterLogo from './assets/CryptoBanterWhite.png'
import Background from './assets/Background.png'
import HostPicsV2 from './assets/Hostpicsv2.png'
import DextoolsIcon from './assets/dextools-icon.png'
import DexscreenerIcon from './assets/dexscreener-icon.png'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
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
        setTimeout(() => {
          setIsSubmitted(false)
          setEmail('')
        }, 3000)
      } else {
        setError(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Subscription error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Logo and Coming Soon */}
        <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
          {/* Top spacer to push logo down to eye level */}
          <div className="flex-grow" style={{ minHeight: '15vh' }}></div>
          
          {/* Logo */}
          <div className="mb-4 lg:mb-6">
            <img 
              src={BRLogo} 
              alt="Banter Royale Logo" 
              className="w-80 sm:w-96 lg:w-[500px] xl:w-[550px] h-auto animate-fade-in"
            />
          </div>
          
          {/* Coming Soon Text */}
          <div className="mb-6 lg:mb-8">
            <img 
              src={ComingSoonText} 
              alt="Coming Soon" 
              className="w-full max-w-xl lg:max-w-2xl animate-fade-in-up"
            />
          </div>
          
          {/* Subscribe Section */}
          <div className="mb-6 lg:mb-8 animate-fade-in-up animation-delay-200">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
              Subscribe for more!
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md">
              <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/40 border border-white/20 text-white placeholder:text-white/50 h-11 sm:h-12 px-5 sm:px-6 rounded-full backdrop-blur-sm focus:border-red-500 focus:outline-none transition-all text-sm sm:text-base"
                style={{ fontFamily: 'Lato, sans-serif' }}
                required
                disabled={isLoading}
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 h-11 sm:h-12 rounded-full font-semibold transition-all transform hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Lato, sans-serif' }}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            
            {error && (
              <p className="text-red-400 text-sm mt-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                {error}
              </p>
            )}
          </div>
          
          {/* Twitter Link */}
          <div className="mb-6 lg:mb-8 animate-fade-in-up animation-delay-300">
            <a 
              href="https://x.com/banter_royale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-red-500 transition-colors group"
            >
              <div className="bg-white/10 p-2.5 sm:p-3 rounded-full backdrop-blur-sm group-hover:bg-red-500/20 transition-all">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-base sm:text-lg font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>Follow us on X</span>
            </a>
          </div>
          
          {/* Bottom spacer */}
          <div className="flex-grow"></div>
          
          {/* Powered By Crypto Banter */}
          <div className="flex items-center gap-3 animate-fade-in-up animation-delay-400">
            <span className="text-white/80 text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>Powered by</span>
            <a 
              href="https://www.youtube.com/@CryptoBanterGroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={CryptoBanterLogo} 
                alt="Crypto Banter" 
                className="h-7 sm:h-8 w-auto"
              />
            </a>
          </div>
        </div>
        
        {/* Right Section - Host Pictures (Smaller, hidden on mobile) */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-8 xl:p-12">
          <div className="relative w-full max-w-lg xl:max-w-xl animate-fade-in-right">
            <img 
              src={HostPicsV2} 
              alt="Hosts" 
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Mobile Host Pictures - Show on mobile only */}
        <div className="lg:hidden w-full flex items-center justify-center p-6 sm:p-8">
          <div className="relative w-full max-w-sm animate-fade-in">
            <img 
              src={HostPicsV2} 
              alt="Hosts" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Token Links - Center Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-6 sm:gap-8 px-6 animate-fade-in-up animation-delay-500">
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
            className="h-12 sm:h-14 lg:h-16 w-auto rounded-lg hover:opacity-90 transition-all"
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
            className="h-12 sm:h-14 lg:h-16 w-auto rounded-lg hover:opacity-90 transition-all"
          />
        </a>
      </div>
    </div>
  )
}

export default App

