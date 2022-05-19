import { setupServer } from 'msw/node';

export const server = setupServer();

export const base = (url: string) => `${process.env.REACT_APP_BASE_API_URL}${url}`;
