import { AuthenticatedUser } from "@/app/api/models/User.model";
import React, { PropsWithChildren, useState } from "react";

interface IAppContext {
  user?: AuthenticatedUser;
  setUser: (user: AuthenticatedUser) => void;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthenticatedUser>();

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
