import type { HeaderElement } from "@/shared/types/header";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  TrashIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { Namespace } from "@/shared/utils/localization/namespaces";

// Static routes for the header elements
// Usually, we can move this array to a separate file or a constants module
// For this coding challenge, I will keep it simple and inline
const routes: HeaderElement[] = [
  {
    localizedLabelKey: "postcode",
    icon: <MapPinIcon className="h-5 w-5 md:w-6 lg:h-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "waste.type",
    icon: <TrashIcon className="h-5 w-5 md:w-6 lg:h-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "select.skip",
    icon: <TruckIcon className="h-5 w-5 md:w-6 lg:h-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "permit.check",
    icon: <ShieldCheckIcon className="h-5 w-5 md:w-6 lg:h-6" />,
    hasSeparator: true,
  },
  {
    localizedLabelKey: "choose.date",
    icon: <CalendarIcon className="h-5 w-5 md:w-6 lg:h-6" />,
    hasSeparator: true,
  },
  {
    localizedLabelKey: "payment",
    icon: <CreditCardIcon className="h-5 w-5 md:w-6 lg:h-6" />,
  },
];

export function Header(): React.ReactElement {
  const { t } = useTranslation(Namespace.HEADER);
  const lastRouteIndex = routes.length - 1;

  return (
    <header className="mx-auto grid grid-cols-3 justify-center items-center pt-6 gap-4 lg:flex xl:gap-x-5">
      {routes.map((route: HeaderElement, index: number) => (
        <section
          key={index}
          className={`flex items-center border rounded-lg ${
            route.isActive ? "border-blue-700" : "border-gray-500"
          }  p-2 lg:border-none lg:p-0`}
        >
          <a
            href={route.route || "#"}
            className="flex w-full items-center whitespace-nowrap gap-y-1 gap-x-2 cursor-pointer p-0 flex-col lg:flex-row lg:w-auto text-sm lg-text-base lg:not-last:pr-4 xl:not-last:pr-5"
          >
            <span
              className={route.isActive ? "text-blue-700" : "text-gray-500"}
            >
              {route.icon}
            </span>

            {/* Use localized label if available, otherwise fallback to label */}
            <span className={route.isActive ? "text-white" : "text-gray-500"}>
              {(route.localizedLabelKey && t(route.localizedLabelKey)) ||
                route.label}
            </span>
          </a>

          {/* Render separator only if the route has a separator and it's not the last route */}
          {route.hasSeparator && index < lastRouteIndex && (
            <div
              className={`hidden h-px w-10 xl:w-12 lg:block ${
                route.isActive ? "bg-blue-700" : "bg-gray-500"
              }`}
            />
          )}
        </section>
      ))}
    </header>
  );
}
