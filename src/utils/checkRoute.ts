import { appRoutes } from "@/routes/path";

export function isRouteEnabled(pathname: string): boolean {
  const maintenance = process.env.NEXT_MAINTENANCE === "true";

  const route = appRoutes.find((r) => r.path === pathname);

  if (!route) return true; // if not listed, allow
  if (!maintenance) return true; // if maintenance OFF, allow all

  return route.enabled; // allow only enabled ones when maintenance ON
}
