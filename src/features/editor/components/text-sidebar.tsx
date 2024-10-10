import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TextSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const TextSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: TextSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "text" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader title="Chữ viết" description="Thêm chữ vào áo" />
      <ScrollArea>
        <div className="p-4 space-y-4 border-b">
          {/* <Button className="w-full" onClick={() => editor?.addText("Textbox")}>
            Thêm chữ
          </Button> */}
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Chữ lớn", {
                fontSize: 80,
                fontWeight: 700,
              })
            }
          >
            <span className="text-3xl font-bold">Thêm chữ lớn</span>
          </Button>
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Chữ vừa", {
                fontSize: 44,
                fontWeight: 600,
              })
            }
          >
            <span className="text-xl font-semibold">Thêm chữ vừa</span>
          </Button>
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Chữ nhỏ", {
                fontSize: 32,
              })
            }
          >
            Thêm chữ nhỏ
          </Button>
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
