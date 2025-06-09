export declare type HeaderElement = {
  // Raw label for the header element
  label?: string;

  // Localized label key for internationalization
  localizedLabelKey?: string;

  // Icon to be displayed alongside the label
  icon?: React.ReactNode;

  // For this coding-challenge, I will skip the implementation of the route
  // as it is not required to demonstrate the header functionality.
  route?: string;

  // I will use this property to highlight the active header element.
  isActive?: boolean;

  // Optional property to indicate if the header element has a separator
  hasSeparator?: boolean;
};
