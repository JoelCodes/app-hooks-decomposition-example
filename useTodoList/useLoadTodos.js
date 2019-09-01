import {useState, useEffect} from 'react';

export default function useLoadTodos(dataOps){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataOps.loadTodos()
      .then(() => setLoading(false));
  }, []);

  return {
    loading
  }
}