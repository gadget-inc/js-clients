/// <reference types="react" />
export type AvatarProps = Omit<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>;
export type AvatarImageProps = Omit<{
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
} & React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>;
export type AvatarFallbackProps = Omit<{
    delayMs?: number;
} & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>;
type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";
export {};
