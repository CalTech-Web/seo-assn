interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
  turnstile: {
    render: (
      element: HTMLElement,
      options: {
        sitekey: string;
        callback: (token: string) => void;
        theme?: string;
      }
    ) => string;
  };
}
