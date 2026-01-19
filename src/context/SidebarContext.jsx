import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
