import { useState } from "react";

export type Gram = {
     foodId: string;
     gram: string;
}

export function useGrams() {
     const [grams, setGrams] = useState<Gram[]>([]);

     const handleGramsChange = (foodId: string , gramValue: string) => {
          const whiteList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
          
          const newGram: Gram = { foodId, gram: "" };

          newGram.gram = gramValue.length > 0 && !whiteList.includes(gramValue.charAt(gramValue.length - 1)) ? 
               grams.some(item => item.gram) ? 
                    grams.filter(item => item.gram)[0].gram : 
                    "" : 
               gramValue;

          setGrams(prev => [ ...prev.filter(item => item.foodId != foodId), newGram ]
          );
     };

     return { grams, handleGramsChange }
}