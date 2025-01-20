interface EnvConfig {
  baseUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

export function getEnvConfig(): EnvConfig {
  const nodeEnv = process.env.NODE_ENV;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  return {
    baseUrl,
    isDevelopment: nodeEnv === "development",
    isProduction: nodeEnv === "production",
  };
}
