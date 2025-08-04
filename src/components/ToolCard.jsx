import React from "react";
import { Github, PlayCircle } from "lucide-react";

const ToolCard = ({ tool }) => {
  return (
    <div className="relative border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-sm bg-white/5 group transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/10 cursor-pointer">
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-50">{tool.name}</h3>
          <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
            {tool.status}
          </span>
        </div>

        <p className="text-sm text-gray-300 mb-4 flex-grow">{tool.description}</p>

        <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-600/50 px-2 py-1 rounded-md border border-indigo-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {/* <div className="flex gap-3 mt-auto">
          <a
            href={tool.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded transition-all"
          >
            <PlayCircle size={16} />
            Demo
          </a>

          <a
            href={tool.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ToolCard;
