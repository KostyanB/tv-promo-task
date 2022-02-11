import { useState } from 'react';
import env from '../env.json';

const useSendData = () => {
  const sendUrl = env.backend.sendUrl;
  const [responce, setResponce] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const sendData = async data => {
    setStatus('sending');
    try {
      const response = await fetch(sendUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'multipart/form-data; boundary=something',
        },
      });

      if (!response.ok) throw new Error('Server error');

      setResponce(response);
      setStatus('success');
    } catch (err) {
      setError(err);
      setStatus('rejected');
    }
  };

  return { sendData, responce, status, error };
};
export default useSendData;
