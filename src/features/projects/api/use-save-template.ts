import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import axios from "axios";
import { endpointProduct } from "@/data/enpoints";
import webStorageClient from "@/utils/webStorageClient";
export type ResponseType = InferResponseType<typeof client.api.TemplateCanvas.$post, 200>;

type RequestType = {
    name: string,
    content: string,
    images: string[],
    lensVRUrl: string,
    canvasCode: string,
    isPublic: boolean,
    price: number,
    color: string,
    sizes: string,
    authorId: string,
    templateId: string
}

export const useSaveTemplate = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationKey: ["template"],
        mutationFn: async (apiQuery: RequestType) => {
            const accessToken = webStorageClient.getToken();

            const authorization = `Bearer ${accessToken}`;

            const response = await axios({
                method: "POST",
                url: endpointProduct.ADD_NEW_SUBPRODUCT,
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
