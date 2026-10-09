
import { ArrowUp, Heart } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-400/15 bg-[#0B0914]/80 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Portfolio branding */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition hover:text-violet-200"
        >
          Shivangi<span className="text-violet-400">.</span>
        </a>

        {/* Copyright */}
        <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-gray-400">
          © {currentYear} Shivangi Gupta. Made with
          <Heart
            size={14}
            className="mx-1 fill-violet-400 text-violet-400"
            aria-label="love"
          />
          and React.
        </p>

        {/* Social links and back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-xl border border-violet-400/15 bg-[#171324] p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-xl border border-violet-400/15 bg-[#171324] p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="rounded-xl border border-violet-400/15 bg-[#171324] p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-violet-400/10 pt-5 text-center text-xs text-gray-500">
        Frontend Development · WordPress · Technical SEO
      </div>
    </footer>
  )
}