import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tareas',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
