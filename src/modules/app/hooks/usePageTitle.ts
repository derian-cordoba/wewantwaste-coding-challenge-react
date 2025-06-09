import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export type PageTitleProps = {
  // Represents the title of the page using raw version
  title?: string;

  // Represents the localization key for the title
  // This key can be used to fetch the localized title from a localization service
  localizationKey?: string;
};

// Default title for the page when no title is provided
export const DEFAULT_TITLE_PAGE = "We want waste - Coding challenge";

export function usePageTitle({ title, localizationKey }: PageTitleProps): void {
  const { t } = useTranslation();

  // If a localization key is provided, fetch the localized title using the translation function
  const titleLocalized = localizationKey && t(localizationKey);

  useEffect(() => {
    // Configure the document title
    // If a localized title is available, use it; otherwise, fall back to the raw title
    // If neither is provided, use the default title
    document.title = titleLocalized || title || DEFAULT_TITLE_PAGE;

    return () => {
      // Reset the document title when the component unmounts
      document.title = DEFAULT_TITLE_PAGE;
    };
  }, [title, titleLocalized]);
}
