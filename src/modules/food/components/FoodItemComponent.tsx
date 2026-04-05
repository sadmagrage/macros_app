import { FoodItemContainer, FoodItemInput, FoodItemInputContainer, FoodItemMeasureType, FoodItemName } from "../../../pages/Food/styles";
import type { FoodItemContainerProps } from "../../../pages/Food/types";

export default function FoodItemComponent({
     food,
     gramValue,
     handleGramChange
}: FoodItemContainerProps) {

     return (
          <FoodItemContainer>
               <FoodItemName>{ food.name }</FoodItemName>
               <FoodItemInputContainer>
                    <FoodItemInput type="text" value={ gramValue } onChange={ e => handleGramChange(food.id, e.target.value) } />
                    <FoodItemMeasureType>g</FoodItemMeasureType>
               </FoodItemInputContainer>
          </FoodItemContainer>
     )
}