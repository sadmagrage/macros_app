import { useMemo } from "react";
import FoodComponent from "../../modules/food/components/FoodComponent";
import { useFood } from "../../modules/food/hooks/useFood";
import { useGrams } from "../../modules/food/hooks/useGrams";
import { calcTotals } from "../../modules/food/utils/calcTotals";

export default function Food() {

     const { listedFood, handleSearchQueryChange, searchQuery, food  } = useFood();
     const { grams, handleGramsChange } = useGrams();

     const totals = useMemo(() => {
          const base = calcTotals(grams, food);

          return {
             ...base,
               kcal: (base.carb + base.prot) * 4 + base.fat * 9
          };
     }, [grams, food]);

     return <FoodComponent
          food={ listedFood }
          grams={ grams }
          totals={ totals }
          onGramChange={ handleGramsChange }
          onSearchQueryChange={ handleSearchQueryChange }
          searchQuery={ searchQuery }
     />
};