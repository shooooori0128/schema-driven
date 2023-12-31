/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * API仕様サンプル
 * API仕様サンプルです
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getShowUsersMock = () => ({
  users: Array.from({ length: faker.datatype.number({ min: 100, max: 100 }) }, (_, i) => i + 1).map(
    () => ({
      address: faker.random.word(),
      name: faker.random.word(),
      email: faker.internet.email(),
      tel: faker.random.word(),
      role: faker.helpers.arrayElement(['Admin', 'Member']),
    }),
  ),
});

export const getShowUserByIdMock = () => ({
  address: faker.random.word(),
  name: faker.random.word(),
  email: faker.internet.email(),
  tel: faker.random.word(),
  role: faker.helpers.arrayElement(['Admin', 'Member']),
});

export const getUsersMSW = () => [
  rest.get('*/users', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getShowUsersMock()));
  }),
  rest.get('*/users/:id', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getShowUserByIdMock()));
  }),
];
