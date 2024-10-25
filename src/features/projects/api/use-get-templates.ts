import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { InferRequestType, InferResponseType } from "hono";
import axios from 'axios';
import { endpointProduct } from "@/data/enpoints";
export type ResponseType = InferResponseType<typeof client.api.TemplateCanvas.$get, 200>;
type RequestType = {
  filter: string,
  skip: number,
  pageIndex: number,
  pageSize: number,
  sortField: string,
  asc: true
};

export const useGetAllTemplates = (apiQuery: RequestType) => {
  const query = useQuery({
    queryKey: ["templates", {
      filter: apiQuery.filter,
      skip: apiQuery.skip,
      pageIndex: apiQuery.pageIndex,
      pageSize: apiQuery.pageSize,
      sortField: apiQuery.sortField,
      asc: apiQuery.asc
    }],
    queryFn: async () => {
      const response = await axios({
        method: "POST",
        url: endpointProduct.GET_ALL_SUBPRODUCT,
        data: apiQuery,
      });

      if (!response) {
        throw new Error("Failed to fetch templates");
      }

      const { data } = response;
      return data;
    },
  });

  return query;
};
export const useGetTemplates = (apiQuery: { id: string }) => {
  const query = useQuery({
    queryKey: ["templates", {
      id: String
    }],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: endpointProduct.GET_SUBPRODUCT.replace("{id}", apiQuery.id),
      });

      if (!response) {
        throw new Error("Failed to fetch templates");
      }

      const { data } = response;
      return data?.result;
    },
  });

  return query;
};
