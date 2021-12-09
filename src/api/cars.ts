import { AxiosResponse } from "axios";
import transportService from "../services/transport";
import { Request } from "../interfaces/api";

export const getDogs = ({ query }: Request): Promise<AxiosResponse> =>
  transportService(
    `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=DESC&page=${query.currentPage}&limit=20`
  );
