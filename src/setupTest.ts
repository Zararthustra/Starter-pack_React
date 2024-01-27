import '@testing-library/jest-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';

import { handlers } from '@mocks/api';

// Extend "expect" method with @testing-library/jest-dom methods like "toBeInTheDocument()"
expect.extend(matchers);

// Mock server to catch API requests
export const server = setupServer(...handlers);
beforeAll(() => {
  // Mock local storage as a global variable to fit in tests scope
  const localStorageMock: Storage = (function () {
    let store: any = {};

    return {
      getItem(key: string): string {
        return store[key];
      },

      setItem(key: string, value: string) {
        store[key] = value;
      },

      clear() {
        store = {};
      },

      removeItem(key: string) {
        delete store[key];
      },

      getAll() {
        return store;
      },
      length: 0,
      key(): string | null {
        return null;
      }
    };
  })();
  global.localStorage = localStorageMock;

  server.listen({ onUnhandledRequest: 'error' });
});
//  Close server after all tests
afterAll(() => server.close());
// Reset handlers after each test
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
