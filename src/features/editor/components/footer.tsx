"use client"
import { Minimize, ZoomIn, ZoomOut } from "lucide-react";

import { Editor } from "@/features/editor/types";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useGetTemplates } from "@/features/projects/api/use-get-templates";
import React from "react";
import { ResponseType } from "@/features/projects/api/use-get-project";

interface FooterProps {
  editor: Editor | undefined;
  initialData: ResponseType["data"];
  handleSaveDesign: () => void;
  handleBuy: () => void;
}

export const Footer = ({ editor, initialData, handleSaveDesign, handleBuy }: FooterProps) => {




  return (
    <footer className="h-[52px] border-t bg-white w-full flex items-center overflow-x-auto z-[49] p-2 gap-x-1 shrink-0 px-4 flex-row-reverse">
      {/* <Hint label="Reset" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.autoZoom()}
          size="icon"
          variant="ghost"
          className="h-full"
        >
          <Minimize className="size-4" />
        </Button>
      </Hint>
      <Hint label="Zoom in" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.zoomIn()}
          size="icon"
          variant="ghost"
          className="h-full"
        >
          <ZoomIn className="size-4" />
        </Button>
      </Hint>
      <Hint label="Zoom out" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.zoomOut()}
          size="icon"
          variant="ghost"
          className="h-full"
        >
          <ZoomOut className="size-4" />
        </Button>
      </Hint> */}
      <div className="flex gap-4">
        <Button onClick={handleSaveDesign}>Lưu thiết kế</Button>
        <Button onClick={handleBuy}>Mua ngay</Button>
      </div>
    </footer>
  );
};
