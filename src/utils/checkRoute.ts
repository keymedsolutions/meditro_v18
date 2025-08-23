import { appRoutes } from "@/routes/path";

export function isRouteEnabled(pathname: string): boolean {
  if (pathname === "/maintenance") return true; // Always allow maintenance page

  // const maintenance = process.env.NEXT_MAINTENANCE === "true";
  const maintenance =  true;


  // Try to find exact match first
  let route = appRoutes.find((r) => r.path === pathname);

  // Handle dynamic [slug] routes
  if (!route) {
    // Check if the route pattern with [slug] matches
    route = appRoutes.find((r) => {
      if (r.path.includes("[slug]")) {
        const basePath = r.path.replace("/[slug]", "");
        return pathname.startsWith(basePath + "/");
      }
      return false;
    });
  }

  if (!route) return true; // if not listed, allow
  if (!maintenance) return true; // if maintenance OFF, allow all

  return route.enabled;
}
