import { useState } from 'react';

const useShowBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  return { showBanner, setShowBanner };
};
export default useShowBanner;
