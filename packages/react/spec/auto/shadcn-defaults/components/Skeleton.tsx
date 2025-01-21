import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils.js";

const skeletonVariants = cva("animate-pulse rounded-md bg-primary/10", {
  variants: {
    size: {
      sm: "h-4 w-16",
      md: "h-6 w-32",
      lg: "h-8 w-64",
    },
    shape: {
      rectangle: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "rectangle",
  },
});

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, size, shape, ...props }, ref) => {
  return <div className={cn(skeletonVariants({ size, shape, className }))} ref={ref} {...props} />;
});

Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants };
