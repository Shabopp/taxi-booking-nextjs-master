import React, { createContext, useState } from 'react';

interface SelectedCarAmountContextType {
  carAmount: string;
  setCarAmount: (amount: string) => void;
}

export const SelectedCarAmountContext = createContext<SelectedCarAmountContextType>({
  carAmount: '0.00',
  setCarAmount: () => {}, // Provide a default empty function
});

export const SelectedCarAmountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carAmount, setCarAmount] = useState<string>('0.00');

  return (
    <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
      {children}
    </SelectedCarAmountContext.Provider>
  );
};