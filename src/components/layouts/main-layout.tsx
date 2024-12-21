import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import { BaseLayout } from "./base-layout";

interface MainLayoutProps {
  title: string;
  description?: string;
}

export function MainLayout({
  children,
  title,
  description = "",
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <BaseLayout title={title} description={description}>
      <main>{children}</main>
    </BaseLayout>
  );
}
