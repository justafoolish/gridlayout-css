import { useState } from 'react';

const useWelcomeScreen = (shouldRender) => {
    const [renderWelcome, setRenderWelcome] = useState(shouldRender);

    const handleCloseWelcome = (removeWelcome) => removeWelcome && setRenderWelcome(false);

    return { renderWelcome, handleCloseWelcome }
};

export default useWelcomeScreen;
