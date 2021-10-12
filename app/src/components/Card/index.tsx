import React from "react"



export const Card = ({ children, backgroundColor, hasShadow }: any) => {
    return (
        <div style={{backgroundColor: backgroundColor}} className={`ml-4 mr-4  rounded-xl w-auto border-2 border-white h-52 p-8 bg-[#800020] ${hasShadow? "shadow-xl": ""}`}>
            {children}
        </div>
    )
}