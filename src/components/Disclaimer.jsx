import React from 'react'
import { TriangleAlert } from 'lucide-react'

function Disclaimer() {
  return (
    <section className="bg-yellow-50/10 border-l-4 border-yellow-400 p-5 my-6 mx-auto max-w-7xl rounded-md">
      <div className="flex items-center gap-2 text-yellow-300">
        <TriangleAlert className="w-5 h-5" />
        <p>
          These tools are not meant to be sold. Please use them responsibly ✌️
        </p>
      </div>
    </section>
  )
}

export default Disclaimer
