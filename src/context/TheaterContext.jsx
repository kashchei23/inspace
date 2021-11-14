import { createContext } from 'react';

export const TheaterContext = createContext({});

export const TheaterContextProvider = TheaterContext.Provider;

export const TheaterContextConsumer = TheaterContext.Consumer;

export default TheaterContext;
