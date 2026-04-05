import type { Gram } from "../hooks/useGrams";
import type FoodResponse from "../lib/dtos/responses/food.response";
import type { Totals } from "../../../pages/Food/types";

export function calcTotals(
  grams: Gram[],
  food: FoodResponse[] | undefined
): Totals {

  if (!food) return { carb: 0, prot: 0, fat: 0, kcal: 0 };

  const foodMap = new Map(food.map(f => [f.id, f]));

  return grams.reduce((acc, item) => {
    const currentFood = foodMap.get(item.foodId);

    if (!currentFood) return acc;

    const gramValue = item.gram === "" ? 0 : parseInt(item.gram);

    acc.carb += currentFood.carb * gramValue;
    acc.prot += currentFood.prot * gramValue;
    acc.fat += currentFood.fat * gramValue;

    return acc;
  }, { carb: 0, prot: 0, fat: 0, kcal: 0 });
}