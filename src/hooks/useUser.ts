import { useState, useEffect, useCallback } from 'react';
import { IUserInfo, getUserInfo } from '../api';
import useFetch from './useFetch';

export default () => {
  const { error, data, loading } = useFetch(getUserInfo());

  return { error, data, loading };
}
