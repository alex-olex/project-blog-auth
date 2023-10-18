import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // just for imitation working with api
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
