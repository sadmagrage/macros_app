import { useEffect, useState } from "react";
import { findAll } from "../services/food.service";
import type FoodResponse from "../lib/dtos/responses/food.response";

export function useFood() {

     const [ food, setFood ] = useState<FoodResponse[]>();
     const [ listedFood, setListedFood ] = useState<FoodResponse[]>();
     const [ searchQuery, setSearchQuery ] = useState("");

     useEffect(() => {
          findAll().then(data => {
               setFood(data);
               setListedFood(data);
          });
     }, []);

     useEffect(() => {
          setListedFood(searchQuery == "" ? food : food?.filter(item => item.name.toUpperCase().match(searchQuery.toUpperCase())) ?? [])
     }, [searchQuery]);

     const handleSearchQueryChange = (newSearchQuery: string) => setSearchQuery(newSearchQuery);

     return { listedFood, handleSearchQueryChange, searchQuery, food };
};