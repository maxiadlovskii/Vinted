import { useCallback, useReducer, useState, useEffect, useMemo } from "react";
import { AxiosResponse } from "axios";
import queryString, { ParsedQuery } from "query-string";
import { useLocation, useHistory } from "react-router-dom";

import { Query, State } from "../interfaces/states";
import {
  CLEAR_ALL,
  CLEAR_ERROR,
  FAILED,
  REQUEST,
  SUCCESS,
} from "../constants/actions";
import { Request } from "../interfaces/api";

const initialFetchState = {
  isFetching: false,
  isFailed: false,
  isSuccess: false,
  data: [],
  error: null,
};

const fetchReducer = (
  state: State,
  action: { type: string; payload?: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        isSuccess: false,
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        data: payload.data,
      };
    case FAILED:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        error: payload.data,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case CLEAR_ALL:
      return initialFetchState;
    default:
      throw new Error();
  }
};
export function useFetch(
  fetcher: (data: Request) => Promise<AxiosResponse>
): [
  State,
  (data: Request) => any,
  {
    clearError: () => void;
    clearAll: () => void;
    setData: (data: any) => void;
  }
] {
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

  const fetchData = useCallback(
    async (data: Request) => {
      try {
        dispatch({ type: REQUEST });
        const payload = await fetcher(data);
        dispatch({ type: SUCCESS, payload });
      } catch (error) {
        dispatch({ type: FAILED, payload: error });
      }
    },
    [fetcher]
  );
  function clearError() {
    dispatch({ type: CLEAR_ERROR, payload: [] });
  }
  function clearAll() {
    dispatch({ type: CLEAR_ALL, payload: [] });
  }
  const setData = useCallback(
    (newData: any) => {
      dispatch({ type: SUCCESS, payload: { data: newData } });
    },
    [dispatch]
  );
  return [state, fetchData, { clearError, clearAll, setData }];
}

export const useImageLoader = (path: string): [boolean] => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoaded(true);
    };
    image.src = path;
  }, [path]);
  return [isLoaded];
};
