import React, {PropsWithChildren} from "react";


export const List: React.FC<PropsWithChildren> = ({children}) => {
    return (
        /// TODO: Implement real data
        <>
            <div className="list">
                {children}
            </div>
        </>
    );
};