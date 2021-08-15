import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from 'features/userInfo/loginSlice';

const rootReducer = combineReducers({
	login: loginSlice,
});
export type ReducerType = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
});
export default store;
