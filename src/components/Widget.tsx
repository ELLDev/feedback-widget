import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-10 right-10">
      <Popover.Panel>Hello world</Popover.Panel>

      <Popover.Button className="flex items-center bg-brand-500 rounded-full h-12 px-3 group">
        <ChatTeardropDots className="w-6 h-6 text-white" />

        <span className="group-hover:max-w-xs transition-all duration-500 ease-linear text-white max-w-0 overflow-hidden">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
