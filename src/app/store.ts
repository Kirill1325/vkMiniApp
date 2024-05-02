import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { NewsApi } from '../entities/NewsItem'

const rootReducer = combineReducers({
    [NewsApi.reducerPath]: NewsApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NewsApi.middleware),
        preloadedState
    })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

