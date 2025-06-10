import type { PropsWithChildren } from "react";
import {
  type PageTitleProps,
  usePageTitle,
} from "@/modules/app/hooks/usePageTitle";
import { Header } from "@/shared/components/Header";

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

  return (
    <div className="max-w-6xl mx-auto px-6">
      <Header />
      <main className="my-8 xl:my-11">{children}</main>
    </div>
  );
}
