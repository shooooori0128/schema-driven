import { setupWorker } from 'msw';

import mockHandlers from '~/mocks/mockHandlers';

export const worker = setupWorker(...mockHandlers);
