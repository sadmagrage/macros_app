import styled from "styled-components";
import type { TwoPerRow } from "./types";

export const FoodContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
`;

export const FoodTabsContainer = styled.div`
    width: 85%;
    border-radius: 15px;
    height: calc(100vh * 0.92);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FoodTab = styled.div`
    width: 74%;
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.surface };
    box-shadow: ${ ({ theme }) => theme.shadow };
    border: 1px solid ${ ({ theme }) => theme.border };
`;

export const FoodResultTab = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 15px;
    padding: 20px;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.surface };
    box-shadow: ${ ({ theme }) => theme.shadow };
    border: 1px solid ${ ({ theme }) => theme.border };
`;

export const FoodTabUpper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 12%;
`;

export const FoodTabTitle = styled.h1`
    font-size: 22px;
    margin-bottom: 14px;

    color: ${ ({ theme }) => theme.textPrimary };
`;

export const FoodTabUpperSearch = styled.input`
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid white;

    border: 1px solid ${ ({ theme }) => theme.border };
    background-color: ${ ({ theme }) => theme.background };
    color: ${({ theme }) => theme.textSecondary };

    &:focus {
        border: 1px solid ${ ({ theme }) => theme.primary };
        outline: none;
    }
`;

export const FoodTabBottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const FoodItemParentContainer = styled.div`
    height: 87%;
`;

export const FoodItemContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border: 1px solid ${ ({ theme }) => theme.border };
    border-radius: 10px;
    margin-bottom: 8px;

    &:hover {
        border: 1px solid ${ ({ theme }) => theme.primary };
        cursor: pointer;
        box-shadow: ${ ({ theme }) => theme.shadow };
    }
`;

export const FoodResultTabHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface btnActiveTest {
     $isActive: boolean;
}

export const FoodResultTabHeaderOption = styled.div<btnActiveTest>`
    border: 1px solid ${ ({ theme, $isActive }) => $isActive ? theme.primary : theme.border };
    border-radius: 7px;
    padding: 8px 25px;
    display: flex;

    &:hover {
        cursor: pointer;
    }

    background-color: ${ ({ theme, $isActive }) => $isActive ? theme.primary : theme.surfaceSecondary };
    color: ${ ({ theme, $isActive }) => $isActive ? theme.surface : theme.textSecondary };
`;

export const FoodResultTabHeaderOptionTitle = styled.div`
    width: 50px;
    font-size: 12px;
    text-align: center;

    user-select: none; 
  
    -webkit-user-select: none;
    -ms-user-select: none;
`;

export const FoodResultTabContent = styled.div`
    height: 95%;
    border: 1px solid ${ ({ theme }) => theme.border };
    border-radius: 15px;
    display: flex;
    justify-content: center;

    background-color: ${ ({ theme }) => theme.background };
`;

export const FoodResultTabContentTitle = styled.h4`
    
`;

export const FoodResultTabContentContainer = styled.div`
    
`;

export const FoodResultTabContentItems = styled.div`
    
`;

 export const FoodItemName = styled.p`
     color: ${({ theme }) => theme.textSecondary };
     align-self: center;
     font-size: 14px;
 `;

export const FoodItemInputContainer = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
`;

export const FoodItemMeasureType = styled.p`
    font-size: 12px;
    align-self: center;

    color: ${ ({ theme }) => theme.textPrimary };
`;

 export const FoodItemInput = styled.input`
    background-color: ${({ theme }) => theme.surface };
    border: 1px solid ${({ theme }) => theme.border };
    color: ${({ theme }) => theme.textSecondary };
    border-radius: 8px;
    width: 80px;
    padding: 5px;
    text-align: end;
    
    &:focus {
       outline: none;
       border-color: ${ ({ theme }) => theme.primary }
    }
 `;

 export const FoodResultTabChildrenContainer = styled.div`
    width: 88%;
    height: 100%;
    display: flex;
    flex-direction: column;
 `;

 export const FoodResultTabChildrenTitle = styled.h5`
    margin: 30px 0px 5px 0px;
    font-size: 16px;



    color: ${ ({ theme }) => theme.textPrimary };
 `;

 export const FoodResultTabChildrenCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
 `;

 export const FoodResultTabChildrenCard = styled.div<TwoPerRow>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   width: ${ props => props.isActive ? "47%": "100%" }; 
   border: 1px solid ${ ({ theme }) => theme.border };
   border-radius: 14px;
   margin: 10px 0px;
   padding: 14px;

   background-color: ${ ({ theme }) => theme.surface };
 `;

export const FoodResultTabChildrenCardProperty = styled.p`
    padding: 5px;
    font-size: 14px;

    color: ${ ({ theme }) => theme.textPrimary };
`;

export const FoodResultTabChildrenCardValue = styled.p`
    padding: 5px;
    font-size: 14px;
    font-weight: bolder;

    color: ${ ({ theme }) => theme.textPrimary };
`;

export const FoodResultTabChildrenCardNotOnePerRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;