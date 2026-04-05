import type { Totals } from "../../../pages/Food/types";
import type { Gram } from "../hooks/useGrams";

export function buildFoodPayload(totals: Totals, grams: Gram[]) {

  const totalGrams = grams.reduce(
    (sum, g) => sum + (g.gram ? parseInt(g.gram) : 0),
    0
  );

  const selectedFoods = grams.filter(
    g => g.gram && parseInt(g.gram) !== 0
  ).length;

  return [
    {
      option: "resumo",
      title: "Resumo geral",
      onePerRow: true,
      cardValues: [
        { propName: "Alimentos selecionados", value: `${selectedFoods}` },
        { propName: "Calorias totais", value: `${totals.kcal.toFixed(2)} kcal` },
        { propName: "Peso total", value: `${totalGrams} g` }
      ]
    },
    {
      option: "calorias",
      title: "Distribuição calórica",
      onePerRow: true,
      cardValues: [
        { propName: "CH", value: `${(totals.carb * 4).toFixed(2)} kcal` },
        { propName: "PT", value: `${(totals.prot * 4).toFixed(2)} kcal` },
        { propName: "FT", value: `${(totals.fat * 9).toFixed(2)} kcal` }
      ]
    },
    {
      option: "macros",
      title: "Macronutrientes",
      onePerRow: false,
      cardValues: [
        { propName: "PT", value: `${totals.prot.toFixed(0)} g` },
        { propName: "CH", value: `${totals.carb.toFixed(0)} g` },
        { propName: "FT", value: `${totals.fat.toFixed(0)} g` }
      ]
    }
  ];
}