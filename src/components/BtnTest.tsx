import React from "react";

function convertCurrency ( amount: number, currency: string): string {
  // ... 
  return ''
}

export default function BtnTest ({
  backgroundColor,
  fontSize,
  pillShape,
}: {
  backgroundColor: string;
  fontSize: number;
  pillShape: boolean;
}) {
  return (
    <button className="bg-blue-500 text-white rounded px-4 py-2">
      Click Me
    </button>
  )
}