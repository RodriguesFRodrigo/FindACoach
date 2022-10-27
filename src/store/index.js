import { createStore } from "vuex";

import coacheModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        // coaches's a namespace
        coaches: coacheModule,
    }
});

export default store;