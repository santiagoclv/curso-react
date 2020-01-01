import prodStore from "./store.prod";
import devStore from "./store.dev";

const store = process.env.NODE_ENV === 'production' ? prodStore : devStore;

export default store;