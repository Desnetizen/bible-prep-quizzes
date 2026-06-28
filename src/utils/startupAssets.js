import { Image } from 'expo-image';

const STARTUP_IMAGE_SOURCES = [
  require('../../assets/splash-bg.png'),
  require('../../assets/logo.png'),
  require('../../assets/indexPageImage.png'),
];

function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((resolve) => {
      setTimeout(() => resolve(undefined), timeoutMs);
    }),
  ]);
}

export async function preloadStartupImages() {
  const uniqueSources = Array.from(new Set(STARTUP_IMAGE_SOURCES));

  await withTimeout(
    Promise.all(
      uniqueSources.map((source) =>
        Image.loadAsync(source).catch(() => null)
      )
    ),
    12000
  );
}
