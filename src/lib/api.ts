import { getEnvConfig } from "@/config/enviroment";

export function BASE_URL(path: string): string {
  const { baseUrl } = getEnvConfig();
  // Remove trailing slash from baseUrl and leading slash from path
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return `${cleanBaseUrl}/${cleanPath}`;
}
