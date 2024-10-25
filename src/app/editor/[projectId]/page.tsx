"use client";

import Link from "next/link";
import { Loader, TriangleAlert } from "lucide-react";

import { useGetProject } from "@/features/projects/api/use-get-project";

import { Editor } from "@/features/editor/components/editor";
import { Button } from "@/components/ui/button";
import { useGetTemplates } from "@/features/projects/api/use-get-templates";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import webStorageClient from "@/utils/webStorageClient";

interface EditorProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const EditorProjectIdPage = ({ params }: EditorProjectIdPageProps) => {
  const { data, isLoading, isError } = useGetTemplates({
    id: params.projectId
  });

  const router = useRouter();
  const param = useSearchParams();
  useEffect(() => {
    if (param.has("token")) {
      const token = param.get("token") ?? "";
      const size = param.get("size");
      webStorageClient.setToken(token, {});
      router.push(`/editor/${params.projectId}?size=${size}`)
      router.refresh();
    }
  }, [params.projectId, param, router])

  // if (isLoading || !data) {
  //   return (
  //     <div className="h-full flex flex-col items-center justify-center">
  //       <Loader className="size-6 animate-spin text-muted-foreground" />
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="h-full flex flex-col gap-y-5 items-center justify-center">
  //       <TriangleAlert className="size-6 text-muted-foreground" />
  //       <p className="text-muted-foreground text-sm">
  //         Failed to fetch project
  //       </p>
  //       <Button asChild variant="secondary">
  //         <Link href="/">
  //           Back to Home
  //         </Link>
  //       </Button>
  //     </div>
  //   );
  // }
  return (
    <Editor
      initialData={{
        name: "Untitled project",
        json: data?.content,
        width: 720,
        height: 900,
        id: params.projectId,
        userId: "",
        thumbnailUrl: null,
        isTemplate: false,
        isPro: false,
        createdAt: "",
        updatedAt: "",
      }}
      product={data}
    />
  );
};

export default EditorProjectIdPage;
