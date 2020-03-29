import { useState, useEffect, useCallback } from 'react';
import $fetch, { FetchRequestInit } from '../utils/fetch';

export default (
  urlOrFetch: string | Promise<any>,
  method?: 'get' | 'post',
  body?: BodyInit,
  params?: FetchRequestInit,
  initFetch: boolean = true,
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const request = useCallback(() => {
    const f = typeof urlOrFetch === 'string' ? $fetch(urlOrFetch, method, body || '', params) : urlOrFetch;
    return f
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    initFetch && urlOrFetch && request();
  }, []);

  return { loading, data, error, request };
}
