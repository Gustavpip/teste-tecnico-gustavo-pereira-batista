import { useState } from 'react';
import api from '../axiosConfig';

const useClientList = () => {
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    let url = `/clientes`;
    setLoading(true);

    try {
      const response = await api.get(url);

      if (response.request.status === 200 || response.data.success === true) {
        return { success: true, data: response };
      } else {
        return { success: false, data: response };
      }
    } catch (err: any) {
      return { success: false, data: err };
    } finally {
      setLoading(false);
    }
  };
  return { getClients, loading };
};

export default useClientList;
