import { setupServer } from 'msw/node';

import mockHandlers from '~/mocks/mockHandlers';

export const server = setupServer(...mockHandlers);
