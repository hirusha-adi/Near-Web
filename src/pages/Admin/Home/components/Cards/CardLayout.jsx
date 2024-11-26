import React from "react";

const CardsLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {children}
        </div>
    );
};

export { CardsLayout };
