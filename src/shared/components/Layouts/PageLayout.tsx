import type { PropsWithChildren } from "react";

export type PageLayoutProps = object;

export function PageLayout({
  children,
}: PropsWithChildren<PageLayoutProps>): React.ReactElement {
  return <main>{children}</main>;
}
