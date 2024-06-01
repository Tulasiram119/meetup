import StreamVedioProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Meetup",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};
function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVedioProvider>{children}</StreamVedioProvider>
    </main>
  );
}

export default RootLayout;
