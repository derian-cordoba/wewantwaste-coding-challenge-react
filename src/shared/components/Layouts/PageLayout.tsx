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
    <div className="w-4/5 mx-auto">
      <Header />
      <main className="my-8 xl:my-11">{children}</main>
    </div>
  );
}
