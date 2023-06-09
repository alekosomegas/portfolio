import React from "react";

const ScrollArrow = React.forwardRef(function ScrollArrow(props, ref) {
    return (
        <div ref={ref}>
            {/* {props.show &&
                <h5 className={`
                absolute text-center w-full
                ${props.up ? "top-[11%]" : "top-[91%]"}
                `}></h5>
            
            } */}
            {props.show &&
                <div className={`
                absolute left-[50%] before:absolute before:left-[50%]
                
                ${props.up ? "rotate-[225deg]" : "rotate-45"}
                
                before:top-2/4 
                
                before:-mx-[5px] 

                @apply w-5 h-5 -ml-2.5 mr-0 -mt-2.5 mb-0 
                border-l-[none] border-r-2 border-r-[solid] border-t-[none] border-b-2 border-b-[solid] 
                
                ${props.up ? "top-[10%]" : "top-[95%]"}  
                
                before:content-[''] before:w-3 before:h-3 before:-ml-1 before:mr-0 before:-mt-1 before:mb-0 
                before:border-l-[none] before:border-r-[solid] before:border-t-[none] before:border-b-[solid] before:border-r before:border-b 
                
                before:${props.up ? "top-[10%]" : "top-[95%]"}  
                
                before:animate-reduce
                `}>
                
                </div>
            }

        </div>
    )
})

export default ScrollArrow;
