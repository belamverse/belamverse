// ... existing imports
import { Github } from 'lucide-react'

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">

        <img 
          src="/images/logo.png" 
          alt="BelamVerse Logo" 
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold text-gray-50">BelamVerse</h1>
      </div>
      <nav>
        <a 
          href="https://github.com/belamverse" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1 text-sm text-gray-300 hover:text-indigo-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </nav>
    </header>
  )
}

export default Header