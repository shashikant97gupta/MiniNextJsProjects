'use client'
import { Input } from "@/components/input";
import {Pencil} from "lucide-react";
import { useRef, useState } from "react";



const InlineEditableInput = () => {
  interface Item {
    id: number,
    text: string,
  }
    const [items, setItems] = useState<Item[]>([
        {
          id: 1,
          text: "Hello",
        },
        {
          id: 2,
          text: "Sangam",
        },
      ]);

      const [currentEditedId, setCurrentEditedId] = useState<number>(null);
      const [currentEditedValue, setCurrentEditedValue] = useState<string>(null);
      const inputRef = useRef(null);

      const handleBlur = () => {
        if(currentEditedId !== null)  saveChanges()
      }

      const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            saveChanges()
        } else if(event.key === "Escape"){
            setCurrentEditedId(null);
            setCurrentEditedValue(null)
        }
      }

      const handleEdit = (id : number, text: string) => {
        setCurrentEditedId(id);
        setCurrentEditedValue(text)
      }

      const saveChanges = () => {
        if(currentEditedId !== null){
            setItems(
                items.map((itm) => {
                  
                   return itm.id === currentEditedId
                    ? {...itm, text: currentEditedValue}
                    : {...itm}
                })
            );
            setCurrentEditedId(null);
        }
      }


  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h2 className="text-center">InlineEditableInput</h2>
        <div className="mt-10 flex-col">
              {
                  items?.length && items.map((itm) =>
                      currentEditedId === itm?.id ?
                           (<div className="bg-blue-300"
                            key={itm?.text}>
                            
                              <Input
                                  ref={inputRef}
                                  value={currentEditedValue}
                                  onChange={(event) => setCurrentEditedValue(event.target.value)}
                                  onBlur={handleBlur}
                                  onKeyDown={handleKeyDown}
                                  className={"w-full"}
                              />
                          </div>)
                          :  (
                          <div key={itm?.text}
                              onClick={() => handleEdit(itm.id, itm.text)}
                              className="flex p-4 bg-muted-foreground  bg-red-200 justify-between items-center cursor-pointer group"
                          >
                              <span className="text-white">{itm?.text}</span>
                              <Pencil className="h-4 w-4 opacity-0 text-white group-hover:opacity-100 transition-opacity" />
                          </div>)
                  )
              }
        </div>
    </div>
  )
}

export default InlineEditableInput