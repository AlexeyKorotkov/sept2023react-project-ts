import {createContext, FC, PropsWithChildren} from "react";

const Context=createContext<{

}>(null)

interface IProps extends PropsWithChildren{

}
// eslint-disable-next-line no-empty-pattern

const ContextProvider: FC<IProps> = ({children}) => {
    return (

            <Context.Provider value={}>
                {children}
            </Context.Provider>


    );
};

export {
    Context,
    ContextProvider
};