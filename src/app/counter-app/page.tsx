"use client"
import Button from "@/components/button";
import { useState } from "react";

const CounterApp = () => {
    const [history, setHistory] = useState<number[]>([0]);
    const [position, setPosition] = useState<number>(0);
    
    const handleDecrement = () => {
        const prevCounterElement: number = history[position]
        setPosition(prev => prev-1)
        setHistory(prev => [...prev, prevCounterElement+1])
    }

    const handleIncrement = () => {
        const prevCounterElement: number = history[position]
        setPosition(prev => prev+1);
        setHistory(prev => [...prev, prevCounterElement+1])        
    }

    const handleUndo = () => {
        // const prevCounterElement: number = history[position]
        setPosition(prev => prev-1);
        // setHistory(prev => [...prev, prevCounterElement+1])        
    }
    
    const handleRedo = () => {
        // const prevCounterElement: number = history[position]
        setPosition(prev => prev+1);
        // setHistory(prev => [...prev, prevCounterElement+1])        
    }

    const decrementDisable: boolean = position <= 0
    // const incrementDisable: boolean = positi 0
    const undoDisable: boolean = position <= 0
    const redoDisable: boolean = position >= history?.length -1 

  return (
      <div className="flex-col items-center justify-between mx-[20%] my-[10%] px-30 py-15 bg-amber-600 text-black-100
     rounded-3xl">
          <h1 className="text-center mb-10 text-4xl">CounterApp With Undo/Redo Feature</h1>
          <p className="text-center font-extrabold">{history[position]}</p>
          <div className="flex items-center justify-between my-2">
              <Button disable={decrementDisable} onclick={handleDecrement} label="decrement -" /> 
              <Button  onclick={handleIncrement} label="increment +" />
          </div>
          <div className="flex items-center justify-between">
              <Button disable={undoDisable} onclick={handleUndo} label="Undo" /> 
              <Button disable={redoDisable} onclick={handleRedo} label="Redo" />
          </div>
      </div>
  )
}

export default CounterApp