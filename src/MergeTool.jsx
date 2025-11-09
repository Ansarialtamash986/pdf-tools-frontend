import React from "react";
import { Upload } from "lucide-react";

const MergeTool = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800">Merge PDF</h1>
      <p className="text-center text-lg text-gray-600 mt-2">Combine multiple PDF files into one.</p>

      <div className="mt-10 flex flex-col items-center">
        <div className="w-full max-w-2xl border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center cursor-pointer hover:border-primary">
          <Upload size={48} className="mx-auto text-gray-400" />
          <p className="mt-4 text-gray-600">Drag & drop your files here or</p>
          <button className="mt-4 bg-primary text-white font-semibold py-2 px-6 rounded-lg">Choose Files</button>
        </div>

        <button className="mt-8 bg-primary text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-red-700 transition duration-300">
          Merge Now
        </button>
      </div>
    </div>
  );
};

export default MergeTool;
