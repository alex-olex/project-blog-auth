import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // just for imitation working with api
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
