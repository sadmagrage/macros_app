export default class FoodResponse {

     id: string;
     name: string;
     carb: number;
     prot: number;
     fat: number;

     constructor(id: string, name: string, carb: number, prot: number, fat: number) {
          this.id = id;
          this.name = name;
          this.carb = carb;
          this.prot = prot;
          this.fat = fat;
     }
}