"use client"

import { Input } from "@/components/input";
import { ChangeEvent, useEffect, useRef, useState } from "react"

const OTP_LENGTH = 4

const OTPInput = () => {
    const [otp,] = useState(Array(OTP_LENGTH).fill(""));
    const [allFilled,] = useState<boolean>(false);
    const [currentFocus, setCurrentFocus] = useState<number>(0);
    const [valueArr, setValueArr] = useState<(number|string)[]>([...otp]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
      inputRefs.current[currentFocus]?.focus();
    }, [currentFocus]);

    // const handleInput = (e: ChangeEvent<HTMLInputElement> , indx: number) => {
    //   // debugger
    //   const value = e.target.value
    //   if (!/^\d*$/.test(value)) return; 
    //   const otpArr = [...valueArr]
    //   otpArr[indx] = value
    //   setValueArr(otpArr)

    //   if (value && indx < OTP_LENGTH - 1) {
    //     setCurrentFocus(indx + 1);
    //   }
    // }

    const handleKeyDown = (e: React.KeyboardEvent, indx: number) => {
      // debugger
      e.preventDefault();  // using this stops multiple input entries
      if(indx < otp.length && indx >= 0){
        const keyName = e.key
        if (keyName == "Backspace") {
          const otpArr = [...valueArr];
          if (otpArr[indx]) {
            otpArr[indx] = "";
            setValueArr(otpArr);
          } else if (indx > 0) {
            setCurrentFocus(indx - 1);
          }
        }
        else if(/^[0-9]$/.test(keyName)){
          const otpArr = [...valueArr]
          otpArr[indx] = parseInt(keyName)
          setValueArr(otpArr) 
          if (indx < OTP_LENGTH - 1) {
            setCurrentFocus(indx + 1);
          }
          // e.preventDefault();
      }
    }
  }


  return (
    <div className="flex flex-col align-middle m-auto">
      <div className="flex mt-20 gap-10 m-auto">
      {
          otp?.length > 0 && otp.map((item, index) => (
            <Input
             key={item}
             ref={(el) => inputRefs.current[index] = el}
            type={"text"}
             className="w-[70px] background-transparent gap-10 "
             inputMode="numeric"
             maxLength = {1}
             placeholder={"0"}
             value={valueArr[index]}
            //  onChange={(e) => handleInput(e, index)}
             onKeyDown={(e) => handleKeyDown(e, index)}
             autoFocus={currentFocus === 0}
             />
          ))
        }
      </div>
        <button className="w-[60%] ml-40 h-20 mt-20 bg-cyan-700 cursor-pointer" disabled={!allFilled}>Verify</button>
        </div>
  )
}

export default OTPInput;