interface CategoriObject {
  [key: string]: string[];
}

export const visionAI = ['Outerwear', 'Coat', 'Shoe', 'Footwear', 'Sunglasses', 'Top', 'Belt', 'Luggage & Bag', 'Jeans', 'Scarf', 'Tie', 'Shirt', 'Pants', 'Hat'];

export const categoriToVisionAI: CategoriObject = {
  Outer: ['Outerwear', 'Coat'],
  Top: ['Top'],
  Pant: ['Pants', 'Jeans'],
  Shirt: ['Shirt'],
  Shoes: ['Shoe'],
  Muffler: ['Scarf'],
};
