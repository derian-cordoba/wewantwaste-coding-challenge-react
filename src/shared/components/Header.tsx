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
    icon: <MapPinIcon className="h-6 w-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "waste.type",
    icon: <TrashIcon className="h-6 w-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "select.skip",
    icon: <TruckIcon className="h-6 w-6" />,
    hasSeparator: true,
    isActive: true,
  },
  {
    localizedLabelKey: "permit.check",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    hasSeparator: true,
  },
  {
    localizedLabelKey: "choose.date",
    icon: <CalendarIcon className="h-6 w-6" />,
    hasSeparator: true,
  },
  {
    localizedLabelKey: "payment",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
];

export function Header(): React.ReactElement {
  const { t } = useTranslation(Namespace.HEADER);
  const lastRouteIndex = routes.length - 1;

  return (
    <header className="min-w-full flex items-center whitespace-nowrap gap-x-8 py-6">
      {routes.map((route: HeaderElement, index: number) => (
        <section className="w-full flex items-center gap-4">
          <a
            key={index}
            href={route.route || "#"}
            className="flex justify-center items-center gap-x-3 cursor-pointer"
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
              className={`w-full h-px ${
                route.isActive ? "bg-blue-700" : "bg-gray-500"
              }`}
            />
          )}
        </section>
      ))}
    </header>
  );
}
