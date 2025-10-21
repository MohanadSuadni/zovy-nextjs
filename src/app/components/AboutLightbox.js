import React, { useState } from 'react';

export default function AboutLightbox({ onSave }) {
  const [text, setText] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="font-bold mb-2">Unesi tekst</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 border p-2 rounded"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={() => onSave(text)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sačuvaj
          </button>
          <button onClick={() => setText('')} className="bg-gray-300 px-4 py-2 rounded">
            Očisti
          </button>
        </div>
      </div>
    </div>
  );
}
