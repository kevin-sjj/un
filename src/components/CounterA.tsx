"use client"
import { useState } from "react";

export default function CounterA() {
  const [count, setCount] = useState(0);

  return <button className="py-4 bg-red-500 w-full block" onClick={() => {setCount(count+1)}}>Increment {count}</button>
}