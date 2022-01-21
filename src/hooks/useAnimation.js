import {useState, useEffect} from 'react';

const useAnimation = (invisible) => {
    const [render, setRender] = useState(invisible);

    useEffect(() =>{
        invisible && setRender(true)
    },[invisible])

    const onAnimationEnd = () => !invisible && !setRender(false)

    return {render, onAnimationEnd}
};

export default useAnimation;
