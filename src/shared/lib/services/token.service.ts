import { localStorageService } from './localStorage.service';

const STORAGE_TOKEN_KEY = 'test/accessToken';

class TokenService {
  getToken(): string | null {
    const lsToken = localStorageService.get<string>(STORAGE_TOKEN_KEY);

    if (lsToken) return lsToken;

    return null;
  }

  setToken(token: string) {
    localStorageService.set(STORAGE_TOKEN_KEY, token);
  }

  removeToken() {
    localStorageService.remove(STORAGE_TOKEN_KEY);
  }
}

export const tokenService = new TokenService();