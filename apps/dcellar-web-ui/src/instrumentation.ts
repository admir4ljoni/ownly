import { runtimeEnv } from '@/base/env';
import { PropertiesConfig } from 'apollo-node-client';

export async function register() {
  // Without an Apollo server, config falls back to the NEXT_PUBLIC_APOLLO_* env vars.
  const configServerUrl = process.env.APOLLO_CONFIG_URL;
  if (process.env.NEXT_RUNTIME === 'nodejs' && configServerUrl) {
    const { ConfigService } = await import('apollo-node-client');
    const service = new ConfigService({ appId: 'dcellar-ui', configServerUrl });

    const config = (await service.getConfig(
      ['development', 'qa'].includes(runtimeEnv) ? 'devnet' : runtimeEnv,
    )) as PropertiesConfig;
    (global as any).__GLOBAL_CONFIG = Object.fromEntries(config.getAllConfig());
    config.addChangeListener(() => {
      (global as any).__GLOBAL_CONFIG = Object.fromEntries(config.getAllConfig());
    });
  }
}
