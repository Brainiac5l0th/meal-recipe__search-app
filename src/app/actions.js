
import axiosInstance from '../utils/axios';

//meals by the name
export async function searchMeals({commit}, keyword){
    const result = await axiosInstance.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", result.data?.meals);
}

//meals by the letter
export async function searchMealsByLetter({commit}, letter){
    const result = await axiosInstance.get(`search.php?f=${letter}`);
    commit("setMealsByLetter", result.data?.meals);
}

//meals by the ingrediant
export async function searchMealsByIngrediant({commit}, ingrediant){
    const result = await axiosInstance.get(`search.php?i=${ingrediant}`);
    commit("setMealsByIngrediant", result.data?.meals);
}