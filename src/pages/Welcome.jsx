import React, { useState } from "react";

const Welcome = () => {
    const [render, setRender] = useState(true);
    const removeWelcome = () => setTimeout(() => {setRender(false)},500)

    return render && (
        <div className="min-h-screen flex overflow-hidden relative">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[36rem] h-[36rem] opacity-50 rounded-full animate-[rainbow_0.75s_linear_infinite]"></div>
            <div className={`grid grid-rows-3 grid-cols-2 w-[12rem] m-auto z-50`}>
                <div className={`h-[96px] p-2 animate-[thirdLt_1.5s_3s_ease_forwards]`}>
                    <div className="w-full h-full border-2 rounded-full border-black opacity-0 animate-[zoomIn_1s_ease_forwards]"></div>
                </div>
                <div className={`h-[96px] p-2 animate-[fourthLt_1.5s_3s_ease_forwards]`}>
                    <div className="w-full h-full border-2 border-black border-r-0 origin-bottom-left opacity-0 animate-[rotateFixed_1s_0.75s_ease_forwards]"></div>
                </div>
                <div className={`h-[96px] p-2 animate-[secondLt_1.5s_3s_ease_forwards]`}>
                    <div className="w-full h-full border-2 rounded-full border-black opacity-0 animate-[fadeInLeft_1s_1s_ease_forwards]"></div>
                </div>
                <div className={`h-[96px] p-2 animate-[finalLt_1.5s_3s_ease_forwards]`}>
                    <div className="relative w-full h-full opacity-0 animate-[rotateWidth_1s_2s_ease_forwards]">
                        <div className="absolute bottom-0 w-[113px] h-0.5 bg-pink-500 origin-bottom-left -rotate-45"></div>
                    </div>
                </div>
                <div className="h-[96px] p-2 animate-[fifthLt_1.5s_3s_ease_forwards]">
                    <div className="relative w-full h-full opacity-0 animate-[fadeUp_1s_1.5s_ease_forwards]">
                        <div className="absolute h-0.5 w-full bottom-0 bg-black"></div>
                        <div className="absolute h-0.5 w-[89px] bottom-0 left-0 bg-black origin-bottom-left -rotate-[62.5deg]"></div>
                        <div className="absolute h-0.5 w-[89px] bottom-0 right-0 bg-black origin-bottom-right rotate-[62.5deg]"></div>
                    </div>
                </div>
                <div className={`h-[96px] p-2 animate-[firstLt_1.5s_3s_ease_forwards]`}>
                    <div className="w-full h-full border-2 border-t-0 border-r-0 border-black opacity-0 animate-[rotate_1s_1.5s_ease_forwards]"></div>
                </div>
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white w-[36rem] h-[36rem] rounded-full animate-[circle_1s_3.25s_ease-out_forwards]" onAnimationEnd={() => removeWelcome()}></div>
        </div>
    )
};

export default Welcome;
