import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface paniertate {
  count: number;
  panier: any[];
}
const initialState: paniertate = {
  count: 0,
  panier: []
};

export const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addCarte: (state, action) => {
      const carte = {
        id: action.payload
      };
      state.count += 1;
      state.panier.push(carte);
    },
    removeCarte: (state, action) => {
      state.panier = state.panier.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    }
  }
});

export const { addCarte, removeCarte } = panierSlice.actions;

export default panierSlice.reducer;
