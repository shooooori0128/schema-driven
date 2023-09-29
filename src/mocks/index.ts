import { SharedOptions } from 'msw';

const initializeMsw = async () => {
  const config: SharedOptions = {
    onUnhandledRequest: 'bypass', // NOTE: MSWに定義されていないAPIが存在する場合にコンソールに警告が表示されるのを無効化する
  };

  if (typeof window === 'undefined') {
    const { server } = await import('~/mocks/server');
    server.listen(config);
  } else {
    const { worker } = await import('~/mocks/browser');
    await worker.start(config);
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await initializeMsw();
})();

export {};
