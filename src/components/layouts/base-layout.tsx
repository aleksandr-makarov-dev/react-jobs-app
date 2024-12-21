import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

interface BaseLayoutProps {
  title: string;
  description?: string;
}

export function BaseLayout({
  children,
  title,
  description = "",
}: PropsWithChildren<BaseLayoutProps>) {
  return (
    <>
      <Helmet title={`${title} | Jobs`} defaultTitle="Default">
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
