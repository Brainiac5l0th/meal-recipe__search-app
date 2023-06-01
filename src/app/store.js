import { createStore } from "vuex";
import * as actions from "./actions.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";
import state from "./state.js";


//configure the store
const store = createStore({
    state,
    actions,
    mutations,
    getters
})
 
export default store;