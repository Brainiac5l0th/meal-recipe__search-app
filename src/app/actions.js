
import axiosInstance from '../utils/axios';

export async function searchMeals({commit}, keyword){
    const result = await axiosInstance.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", result.data?.meals);
}