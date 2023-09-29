import { defineConfig } from 'orval';
import { faker } from '@faker-js/faker';

export default defineConfig({
  all: {
    input: {
      target: 'spec/specification.bundled.yaml',
      validation: false,
    },
    output: {
      target: 'src/types/openapi',
      schemas: 'src/types/openapi/schemas',
      mode: 'tags-split',
      clean: true,
      mock: true,
      prettier: true,
      override: {
        mock: {
          arrayMin: 100,
          arrayMax: 100,
          // NOTE: 共通のプロパティ名は↓のようにグローバルにfakerフォーマットを指定できる
          // properties: {
          //   '/^address$/': () => `${faker.location.city()}${faker.location.country()}${faker.location.street()}`,
          //   '/^name$/': () => faker.person.fullName(),
          //   '/^tel$/': () => faker.phone.number(),
          // }
        },
        // NOTE: 生成される型定義ファイル名の接尾辞を設定
        components: {
          schemas: {
            suffix: 'DTO'
          },
          parameters: {
            suffix: 'Params',
          },
        },
        // NOTE: operationId単位でのmswのリゾルバの定義も可能
        // operations: {
        //   'show-user-by-id': {
        //     mock: {
        //       data: () => ({
        //         address: `${faker.location.zipCode} ${faker.location.streetAddress()}`,
        //         name: `${faker.person.lastName()} ${faker.person.firstName()}`,
        //         email: faker.internet.email(),
        //         tel: faker.phone.number(),
        //         role: faker.helpers.arrayElement(['Admin', 'Member'])
        //       })
        //     }
        //   },
        // },
      }
    }
  },
});
