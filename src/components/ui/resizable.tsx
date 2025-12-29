"use client";

import { GripVerticalIcon } from "lucide-react";
import { cn } from "./utils";

// Simple placeholder - react-resizable-panels has type issues in build
function ResizablePanelGroup({
  className,
  ...props
}: any) {
  return (
    <div
      className={cn(
        "flex h-full w-full",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanel({
  ...props
}: any) {
  return <div {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: {
  withHandle?: boolean;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "bg-border relative flex w-px items-center justify-center",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
