import type { Gram } from "../../modules/food/hooks/useGrams";
import type FoodResponse from "../../modules/food/lib/dtos/responses/food.response";

export type Totals = {
     carb: number;
     prot: number;
     fat: number
     kcal: number 
}

export type FoodResultContentPayload = {
     option: string;
     title: string;
     onePerRow: boolean;
     cardValues: Array<CardValue>;
}

export type CardValue = {
     propName: string;
     value: string;
}

export type FoodContainerProps = {
     food: FoodResponse[] | undefined;
     grams: Gram[];
     totals: Totals;
     onGramChange: (foodId: string, gramValue: string) => void;
     searchQuery: string;
     onSearchQueryChange: (searchInput: string) => void;
}

export type FoodItemContainerProps = {
     food: FoodResponse,
     gramValue: string | undefined,
     handleGramChange: (foodId: string, gramValue: string) => void;
}

export interface TwoPerRow {
     isActive: boolean;
}