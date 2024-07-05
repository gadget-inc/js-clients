interface Window {
  /**
   * A global constant exported by the gadget backend to pass data to the frontend
   * Only available in gadget-backend powered deployments of this provider
   * @internal
   */
  gadgetConfig?: {
    shopifyInstallState?: {
      redirectToOauth: boolean;
      isAuthenticated: boolean;
      missingScopes: string[];
    };
  };
}
