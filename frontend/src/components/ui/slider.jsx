import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-white/10">
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-amber-400 to-orange-500" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-4 border-white bg-amber-400 shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400" />
    </SliderPrimitive.Root>
  )
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };