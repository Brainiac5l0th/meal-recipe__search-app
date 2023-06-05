
import axiosInstance from '../utils/axios';

//meals by the name
export async function searchMeals({commit}, keyword){
    try {
        const result = await axiosInstance.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", result.data?.meals);
    } catch (error) {
        console.log(error);
    }
    
}

//meals by the letter
export async function searchMealsByLetter({commit}, letter){
    try{
        const result = await axiosInstance.get(`search.php?f=${letter}`);
        commit("setMealsByLetter", result.data?.meals);
    } catch (error) {
        console.log(error);
    }
}

//meals by the ingrediant
export async function searchMealsByIngrediant({commit}, ingrediant){
    try {
        const result = await axiosInstance.get(`filter.php?i=${ingrediant}`);
        commit("setMealsByIngrediant", result.data?.meals);
    } catch (error) {
        console.log(error);
    }
    
}