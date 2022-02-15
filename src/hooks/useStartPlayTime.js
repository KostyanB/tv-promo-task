import { useState } from 'react';

const useStartPlayTime = () => {
  const [startPlayTime, setStartPlayTime] = useState(0);

  return { startPlayTime, setStartPlayTime };
};
export default useStartPlayTime;
