import { assertType, describe, expect, test } from 'vitest';

import { ILoginResponse, IUser } from '@interfaces/index';
import { loginRequestMock, loginResponseMock, userMock } from '@mocks/index';
import { getUser, login, reconnect, register } from '@queries/index';

describe('Queries => User', () => {
  test('GET \t User', async () => {
    const user = await getUser(1);
    expect(user).toStrictEqual(userMock);
    assertType<IUser>(user);
  });

  test('POST \t Register', async () => {
    const registerResponse = await register(loginRequestMock);
    expect(registerResponse).toStrictEqual({
      message: 'User created successfully'
    });
    assertType<{ message: string }>(registerResponse);
  });

  test('POST \t Login', async () => {
    const loginResponse = await login(loginRequestMock);
    expect(loginResponse).toStrictEqual(loginResponseMock);
    assertType<ILoginResponse>(loginResponse);
  });

  test('POST \t Reconnect', async () => {
    const reconnectResponse = await reconnect(loginResponseMock.refresh);
    expect(reconnectResponse).toStrictEqual(loginResponseMock);
    assertType<ILoginResponse>(reconnectResponse);
  });
});
