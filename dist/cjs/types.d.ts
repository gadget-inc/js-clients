export type OpenAiGlobals<ToolInput = UnknownObject, ToolOutput = UnknownObject, ToolResponseMetadata = UnknownObject, WidgetState = UnknownObject> = {
    theme: Theme;
    userAgent: UserAgent;
    locale: string;
    maxHeight: number;
    displayMode: DisplayMode;
    safeArea: SafeArea;
    toolInput: ToolInput;
    toolOutput: ToolOutput | null;
    toolResponseMetadata: ToolResponseMetadata | null;
    widgetState: WidgetState | null;
    setWidgetState: (state: WidgetState) => Promise<void>;
};
export type UnknownObject = Record<string, unknown>;
export type Theme = "light" | "dark";
export type SafeAreaInsets = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type SafeArea = {
    insets: SafeAreaInsets;
};
export type DeviceType = "mobile" | "tablet" | "desktop" | "unknown";
export type UserAgent = {
    device: {
        type: DeviceType;
    };
    capabilities: {
        hover: boolean;
        touch: boolean;
    };
};
/** Display mode */
export type DisplayMode = "pip" | "inline" | "fullscreen";
export type RequestDisplayMode = (args: {
    mode: DisplayMode;
}) => Promise<{
    /**
     * The granted display mode. The host may reject the request.
     * For mobile, PiP is always coerced to fullscreen.
     */
    mode: DisplayMode;
}>;
export type CallToolResponse = {
    result: string;
    structuredContent: unknown;
};
/** Calling APIs */
export type CallTool = (name: string, args: Record<string, unknown>) => Promise<CallToolResponse>;
