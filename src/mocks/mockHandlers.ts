import { rest } from 'msw';

import CommonError500Json from '~~/spec/common/examples/CommonError500.json';
import AdminUser from '~~/spec/resources/users/examples/AdminUser.json';
import MemberUser from '~~/spec/resources/users/examples/MemberUser.json';

import { CommonErrorDTO, UserDTO } from '~/types/openapi/schemas';
import { getShowUsersMock } from '~/types/openapi/users/users.msw';

const mockHandlers = [
  rest.get('http://localhost:3000/users/:id', (req, res, ctx) => {
    const prefer = req.headers.get('Prefer');

    if (prefer === '500') {
      return res(ctx.status(500), ctx.json(CommonError500Json.value as CommonErrorDTO));
    }

    if (prefer === 'Admin') {
      return res(ctx.status(500), ctx.json(AdminUser.value as UserDTO));
    }

    return res(ctx.status(200), ctx.json(MemberUser.value as UserDTO));
  }),

  rest.get('http://localhost:3000/users', (req, res, ctx) => {
    const prefer = req.headers.get('Prefer');

    if (prefer === '500') {
      return res(ctx.status(500), ctx.json(CommonError500Json.value as CommonErrorDTO));
    }

    return res(ctx.status(200), ctx.json(getShowUsersMock()));
  })
];

export default mockHandlers;
