"use client"

import { useState } from "react";
import { Label } from "../../components/label"
import { Input } from "../../components/input";

function TemperatureConverter() {
    const[celsius, setCelsius] = useState<number>(0);
    const[fahrenheight, setFahrenheight] = useState<number>(0);

    const celsiusToFarhrenheit = (value) : number => {
        return (value * 9) / 5 + 32;
      };
    
      const fahrenheitToCelsius = (value) : number => {
        return ((value - 32) * 5) / 9;
      };

      const handleCelsiusToFahrenheight = (value) => {
        setCelsius(value)

        if(!value){
            setFahrenheight(value)
        } else {
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
              const res =  celsiusToFarhrenheit(numValue)
              setFahrenheight(res.toFixed(2))
            } 
        }

      }

      const handleFahrenheitToCelsius = (value) => {
        setFahrenheit(value);
        if (value === "") {
          setCelsius("");
        } else {
          const numValue = parseFloat(value);
          if (!isNaN(numValue)) {
            const res = fahrenheitToCelsius(numValue);
            setCelsius(res.toFixed(2));
          }
        }
      };

      const formatValue = (value) => {
        if (value === "") return "";
        const numValue = parseFloat(value);
        if (isNaN(numValue)) return value;
    
        if (Number.isInteger(numValue)) {
          return numValue.toString();
        }
    
        return numValue.toFixed(2);
      };

      return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
          <h1>Temperature Converter</h1>
          <div className="flex mt-10 flex-col justify-center items-center gap-5">
            <Label>Celsius</Label>
            <Input
              id="celsius"
              type="number"
              value={formatValue(celsius)}
              onChange={(event) => handleCelsiusToFahrenheight(event.target.value)}
              placeholder="0"
            />
    
            <Label>Fahrenheit</Label>
            <Input
              id="fahrenheit"
              type="number"
              value={formatValue(fahrenheight)}
              onChange={(event) => handleFahrenheitToCelsius(event.target.value)}
              placeholder="32"
            />
          </div>
        </div>
      );
}

export default TemperatureConverter;