import type { PropsWithChildren } from "react";
import {
  type PageTitleProps,
  usePageTitle,
} from "@/modules/app/hooks/usePageTitle";

export type PageLayoutProps = PageTitleProps & {
  // Add more props if needed in the future
};

export function PageLayout({
  children,
  title,
  localizationKey,
}: PropsWithChildren<PageLayoutProps>): React.ReactElement {
  // Set the page title using the provided title prop
  usePageTitle({ title, localizationKey });

  return <main>{children}</main>;
}
