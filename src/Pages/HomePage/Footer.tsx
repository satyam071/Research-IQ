import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#222] px-19 py-14 text-[#F2E6CF]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black tracking-wide">
              Research-IQ
            </h2>

            <p className="mt-3 text-[10px] uppercase tracking-[1px] text-gray-500 leading-4">
              © 2026 RESEARCH-IQ LABS. BUILT FOR
              <br />
              THE MODERN RESEARCHER.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="w-10 h-10 border-[3px] border-[#F2E6CF] bg-[#111] flex items-center justify-center shadow-[3px_3px_0px_#F2E6CF] hover:bg-[#2BB4A0] hover:text-black transition-all duration-300">
              <FaGithub size={16} />
            </button>

            <button className="w-10 h-10 border-[3px] border-[#F2E6CF] bg-[#111] flex items-center justify-center shadow-[3px_3px_0px_#F2E6CF] hover:bg-[#F3AB0C] hover:text-black transition-all duration-300">
              <FaEnvelope size={16} />
            </button>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[2px] mb-4">
            Product
          </h3>

          <div className="space-y-2 text-[11px] uppercase text-gray-400">
            <p className="hover:text-[#F3AB0C] cursor-pointer">Features</p>
            <p className="hover:text-[#F3AB0C] cursor-pointer">Pricing</p>
            <p className="hover:text-[#F3AB0C] cursor-pointer">API Docs</p>
            <p className="hover:text-[#F3AB0C] cursor-pointer">Enterprise</p>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[2px] mb-4">
            Resources
          </h3>

          <div className="space-y-2 text-[11px] uppercase text-gray-400">
            <p className="hover:text-[#2BB4A0] cursor-pointer">
              Knowledge Base
            </p>
            <p className="hover:text-[#2BB4A0] cursor-pointer">
              Research Blog
            </p>
            <p className="hover:text-[#2BB4A0] cursor-pointer">
              Community
            </p>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[2px] mb-4">
            Legal
          </h3>

          <div className="space-y-2 text-[11px] uppercase text-gray-400">
            <p className="hover:text-[#97002E] cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-[#97002E] cursor-pointer">
              Terms of Use
            </p>
            <p className="hover:text-[#97002E] cursor-pointer">
              Security Ethics
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}