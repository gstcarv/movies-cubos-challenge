import { Models, init, RematchDispatch, RematchRootState } from '@rematch/core';
import { moviesModel } from './models/movies';

export type RootModel = Models<RootModel> & {
    movies: typeof moviesModel;
};

export const store = init({
    models: {
        movies: moviesModel,
    },
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
