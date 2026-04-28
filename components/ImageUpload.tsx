"use client";

import { useRef } from "react";

export default function ImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
      <h2 className="text-base font-semibold text-green-900 mb-4">식물 사진</h2>
      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-green-200 rounded-xl h-44 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-green-400 hover:bg-green-50 transition-colors group"
      >
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-green-700">사진을 드래그하거나 클릭하여 업로드</p>
          <p className="text-xs text-green-400 mt-1">JPG, PNG (준비 중)</p>
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" disabled />
    </div>
  );
}
