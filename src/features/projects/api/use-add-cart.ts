import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import axios from "axios";
import { endpointCart } from "@/data/enpoints";
import webStorageClient from "@/utils/webStorageClient";
export type ResponseType = InferResponseType<typeof client.api.TemplateCanvas.$post, 200>;

type RequestType = {
    quantity: number
    customCanvasId: string,
    size: string,
}

export const useAddCard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationKey: ["cart"],
        mutationFn: async (apiQuery: RequestType) => {
            const accessToken = webStorageClient.getToken();

            const authorization = `Bearer ${accessToken}`;

            const response = await axios({
                method: "POST",
                url: endpointCart.ADD_CART,
                data: apiQuery,
                headers: {
                    authorization
                }
            });

            if (!response) {
                throw new Error("Failed to fetch templates");
            }

            const { data } = response;
            return data;
        },
    });

    return mutation;
};
