import React from "react";
import { Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-8 mt-16 border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="flex justify-center items-center gap-2">
        <Sparkles size={16} className="text-indigo-400 animate-pulse" />
        <span>
          Built with care by <span className="text-indigo-300 font-medium">Belam</span> • © 2025
        </span>
      </div>
    </footer>
  );
}

export default Footer;
