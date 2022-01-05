import axios, { AxiosResponse } from "axios";
import Stream from "../models/Stream";

export const getAllStreams = async () => {
  const response = await axios.get<any, AxiosResponse<{ data: Stream[] }>>(
    `http://localhost:4000/api/streams`
  );

  return response.data.data;
};
