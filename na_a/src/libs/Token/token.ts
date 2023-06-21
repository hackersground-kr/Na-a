interface Storage {
  getToken(key: string): string | null;
  setToken(key: string, value: string): void;
  removeToken(key: string): void;
  clearToken(): void;
}

class Token implements Storage {
  public getToken(key: string): string | null {
    if (key !== undefined) {
      return localStorage.getItem(key);
    }
    return null;
  }

  public setToken(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeToken(key: string): void {
    localStorage.removeItem(key);
  }

  public clearToken(): void {
    localStorage.clear();
  }
}

export default new Token();