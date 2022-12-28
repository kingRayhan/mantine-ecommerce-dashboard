import AppWrapper from "@/components/AppWrapper";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

// axios.defaults.baseURL = "http://104.251.211.125:8055";

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: "cyan",
          colorScheme: "light",
        }}
      >
        <NotificationsProvider position="top-right">
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
