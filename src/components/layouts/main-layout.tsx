import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet title={title} defaultTitle="Default">
        <meta name="description" content={description} />
      </Helmet>
      <main>{children}</main>
    </>
  );
}
