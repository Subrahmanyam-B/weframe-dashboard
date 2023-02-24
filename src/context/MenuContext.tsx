import { createContext } from 'react';

type MenuContextProps = {
   isOpen: boolean;
   setIsOpen: (isOpen: boolean) => void;
};

const MenuContext = createContext<MenuContextProps>({
   isOpen: false,
   setIsOpen: () => {},
});

export default MenuContext;