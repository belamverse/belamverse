import React from "react";
import ToolCard from "./ToolCard";
import tools from "../data/tools";

const ToolsSection = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tools</h2>
      {tools.length === 0 ? (
        <p className="text-gray-500">No tools available at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ToolsSection;
