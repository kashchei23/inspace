import React from 'react';

export const NasaDataContext = React.createContext({});

export const NasaDataProvider = NasaDataContext.Provider;

export const NasaDataConsumer = NasaDataContext.Consumer;

export default NasaDataContext;
