import { FoodResultTabChildrenCard, FoodResultTabChildrenCardContainer, FoodResultTabChildrenCardNotOnePerRow, FoodResultTabChildrenCardProperty, FoodResultTabChildrenCardValue, FoodResultTabChildrenContainer, FoodResultTabChildrenTitle } from "../../../../pages/Food/styles";
import type { FoodResultContentPayload } from "../../../../pages/Food/types";

export default function FoodResultTabChildrenComponent({
  title,
  onePerRow,
  cardValues
}: FoodResultContentPayload) {

  const rows = [];

  if (!onePerRow) {
    for (let i = 0; i < cardValues.length; i += 2) {
      rows.push(cardValues.slice(i, i + 2));
    }
  }

  return (
    <FoodResultTabChildrenContainer>
      <FoodResultTabChildrenTitle>{title}</FoodResultTabChildrenTitle>

      <FoodResultTabChildrenCardContainer>
        {onePerRow
          ? cardValues.map(item => (
              <FoodResultTabChildrenCard isActive={false} key={ item.propName } >
                <FoodResultTabChildrenCardProperty>{item.propName}</FoodResultTabChildrenCardProperty>
                <FoodResultTabChildrenCardValue>{item.value}</FoodResultTabChildrenCardValue>
              </FoodResultTabChildrenCard>
            ))
          : rows.map(row => (
              <FoodResultTabChildrenCardNotOnePerRow>
                {row.map(item => (
                  <FoodResultTabChildrenCard isActive={true}>
                    <FoodResultTabChildrenCardProperty>{item.propName}</FoodResultTabChildrenCardProperty>
                    <FoodResultTabChildrenCardValue>{item.value}</FoodResultTabChildrenCardValue>
                  </FoodResultTabChildrenCard>
                ))}
              </FoodResultTabChildrenCardNotOnePerRow>
            ))}
      </FoodResultTabChildrenCardContainer>
    </FoodResultTabChildrenContainer>
  );
}