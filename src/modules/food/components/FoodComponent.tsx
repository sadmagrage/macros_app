import { useMemo, useState } from "react";
import { FoodContainer, FoodItemParentContainer, FoodResultTab, FoodResultTabContent, FoodResultTabHeader, FoodResultTabHeaderOption, FoodResultTabHeaderOptionTitle, FoodTab, FoodTabBottom, FoodTabsContainer, FoodTabTitle, FoodTabUpper, FoodTabUpperSearch } from "../../../pages/Food/styles";
import FoodItemComponent from "./FoodItemComponent";
import FoodResultTabChildrenComponent from "./foodResultTabContent/FoodResultTabChildrenComponent";
import type { FoodContainerProps } from "../../../pages/Food/types";
import { buildFoodPayload } from "../utils/buildFoodPayload";

export default function FoodComponent({
     food,
     grams,
     totals,
     onGramChange,
     searchQuery,
     onSearchQueryChange
}: FoodContainerProps) {

     const payload = useMemo(() => {
          return buildFoodPayload(totals, grams);
     }, [totals, grams]);
     const [ currentTab, setCurrentTab ] = useState<string>("resumo");

     const chosenOption = payload.find(p => p.option === currentTab);

     const gramMap = useMemo(() => {
          return new Map(grams.map(g => [g.foodId, g.gram]));
     }, [grams]);

     return (
          <FoodContainer>
               <FoodTabsContainer>
                    <FoodTab>
                         <FoodTabUpper>
                              <FoodTabTitle>Alimentos</FoodTabTitle>
                              <FoodTabUpperSearch type="text" placeholder="Search food ..." value={ searchQuery } onChange={ e => onSearchQueryChange(e.target.value) } />
                         </FoodTabUpper>
                              <FoodItemParentContainer>
                                   <FoodTabBottom>
                                        {
                                             food?.map(foodItem => { 

                                                  return <FoodItemComponent key={foodItem.id} food={ foodItem } gramValue={gramMap.get(foodItem.id) ?? ""} handleGramChange={ onGramChange } />
                                             } )
                                        }
                                   </FoodTabBottom>
                              </FoodItemParentContainer>
                    </FoodTab>
                    <FoodResultTab>
                         <FoodResultTabHeader>
                              {
                                   payload.map(foodResultContentPayloadListItem => 
                                        <FoodResultTabHeaderOption $isActive={ foodResultContentPayloadListItem.option == currentTab } onClick={ () => setCurrentTab(foodResultContentPayloadListItem.option) } >
                                             <FoodResultTabHeaderOptionTitle >{ foodResultContentPayloadListItem.option.replace(foodResultContentPayloadListItem.option[0], foodResultContentPayloadListItem.option[0].toUpperCase()) }</FoodResultTabHeaderOptionTitle>
                                        </FoodResultTabHeaderOption>
                                   )
                              }
                         </FoodResultTabHeader>
                         <FoodResultTabContent>
                              {
                                   chosenOption && (
                                      <FoodResultTabChildrenComponent {...chosenOption} />
                                   )
                              }
                         </FoodResultTabContent>
                    </FoodResultTab>
               </FoodTabsContainer>
          </FoodContainer>
     );
};