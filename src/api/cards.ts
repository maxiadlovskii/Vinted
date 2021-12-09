import { AxiosResponse } from "axios";
import transportService from "../services/transport";
import { Request } from "../interfaces/api";
import { API_URL, DOG_SERVICE_URL, DEFAULT_QUERY } from "../constants/api";

export const getDogs = ({ query }: Request): Promise<AxiosResponse> =>
  transportService(
    `${API_URL}${DOG_SERVICE_URL}?${DEFAULT_QUERY}&page=${query.currentPage}`
  );
