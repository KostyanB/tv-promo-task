import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
    },
});