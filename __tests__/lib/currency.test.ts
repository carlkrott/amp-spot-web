import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  currencies,
  countries,
  exchangeRates,
  convertPrice,
  formatPrice,
  getCountryByCurrencyCode,
  getCurrencyByCountryCode,
  saveCurrencyPreference,
  loadCurrencyPreference,
  detectUserCurrency,
} from '@/lib/currency';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

describe('currencies', () => {
  it('should contain USD currency', () => {
    expect(currencies.USD).toBeDefined();
    expect(currencies.USD.symbol).toBe('$');
    expect(currencies.USD.name).toBe('US Dollar');
  });

  it('should contain EUR currency', () => {
    expect(currencies.EUR).toBeDefined();
    expect(currencies.EUR.symbol).toBe('€');
    expect(currencies.EUR.name).toBe('Euro');
  });

  it('should contain GBP currency', () => {
    expect(currencies.GBP).toBeDefined();
    expect(currencies.GBP.symbol).toBe('£');
    expect(currencies.GBP.name).toBe('British Pound');
  });

  it('should have valid currency data structure', () => {
    Object.values(currencies).forEach((currency) => {
      expect(currency).toHaveProperty('code');
      expect(currency).toHaveProperty('symbol');
      expect(currency).toHaveProperty('name');
      expect(currency).toHaveProperty('countries');
      expect(currency.countries.length).toBeGreaterThan(0);
    });
  });
});

describe('countries', () => {
  it('should contain US country', () => {
    const us = countries.find((c) => c.code === 'US');
    expect(us).toBeDefined();
    expect(us?.name).toBe('United States');
    expect(us?.currency).toBe('USD');
    expect(us?.flag).toBe('🇺🇸');
  });

  it('should contain GB country', () => {
    const gb = countries.find((c) => c.code === 'GB');
    expect(gb).toBeDefined();
    expect(gb?.name).toBe('United Kingdom');
    expect(gb?.currency).toBe('GBP');
  });

  it('should have valid country data structure', () => {
    countries.forEach((country) => {
      expect(country).toHaveProperty('code');
      expect(country).toHaveProperty('name');
      expect(country).toHaveProperty('currency');
      expect(country).toHaveProperty('flag');
      expect(country.code).toHaveLength(2);
    });
  });
});

describe('exchangeRates', () => {
  it('should have USD as base rate (1.00)', () => {
    expect(exchangeRates.USD).toBe(1.00);
  });

  it('should have valid exchange rate for EUR', () => {
    expect(exchangeRates.EUR).toBeDefined();
    expect(exchangeRates.EUR).toBeGreaterThan(0);
    expect(exchangeRates.EUR).toBeLessThan(1);
  });

  it('should have valid exchange rate for JPY', () => {
    expect(exchangeRates.JPY).toBeDefined();
    expect(exchangeRates.JPY).toBeGreaterThan(0);
    expect(exchangeRates.JPY).toBeGreaterThan(100);
  });
});

describe('convertPrice', () => {
  it('should return same price for USD to USD', () => {
    expect(convertPrice(100, 'USD')).toBe(100);
  });

  it('should convert USD to EUR correctly', () => {
    const price = convertPrice(100, 'EUR');
    expect(price).toBeCloseTo(92, 0);
  });

  it('should convert USD to GBP correctly', () => {
    const price = convertPrice(100, 'GBP');
    expect(price).toBeCloseTo(79, 0);
  });

  it('should handle zero price', () => {
    expect(convertPrice(0, 'EUR')).toBe(0);
  });

  it('should return original price for unknown currency', () => {
    expect(convertPrice(100, 'XXX')).toBe(100);
  });
});

describe('formatPrice', () => {
  it('should format USD price correctly', () => {
    expect(formatPrice(99.99, 'USD')).toBe('$99.99');
  });

  it('should format EUR price correctly', () => {
    expect(formatPrice(99.99, 'EUR')).toBe('€99.99');
  });

  it('should format GBP price correctly', () => {
    expect(formatPrice(99.99, 'GBP')).toBe('£99.99');
  });

  it('should format JPY without decimal places', () => {
    expect(formatPrice(1500.7, 'JPY')).toBe('¥1,501');
  });

  it('should format KRW without decimal places', () => {
    expect(formatPrice(1500.7, 'KRW')).toBe('₩1,501');
  });

  it('should handle unknown currency with default USD', () => {
    expect(formatPrice(99.99, 'XXX')).toBe('$99.99');
  });

  it('should format large numbers correctly', () => {
    expect(formatPrice(9999.99, 'USD')).toBe('$9999.99');
  });
});

describe('getCountryByCurrencyCode', () => {
  it('should return US for USD', () => {
    const country = getCountryByCurrencyCode('USD');
    expect(country).toBeDefined();
    expect(country?.code).toBe('US');
  });

  it('should return GB for GBP', () => {
    const country = getCountryByCurrencyCode('GBP');
    expect(country).toBeDefined();
    expect(country?.code).toBe('GB');
  });

  it('should return undefined for unknown currency', () => {
    const country = getCountryByCurrencyCode('XXX');
    expect(country).toBeUndefined();
  });
});

describe('getCurrencyByCountryCode', () => {
  it('should return USD for US', () => {
    const currency = getCurrencyByCountryCode('US');
    expect(currency).toBeDefined();
    expect(currency?.code).toBe('USD');
  });

  it('should return GBP for GB', () => {
    const currency = getCurrencyByCountryCode('GB');
    expect(currency).toBeDefined();
    expect(currency?.code).toBe('GBP');
  });

  it('should return EUR for Germany', () => {
    const currency = getCurrencyByCountryCode('DE');
    expect(currency).toBeDefined();
    expect(currency?.code).toBe('EUR');
  });

  it('should return undefined for unknown country', () => {
    const currency = getCurrencyByCountryCode('XX');
    expect(currency).toBeUndefined();
  });
});

describe('Currency Preference (localStorage)', () => {
  beforeEach(() => {
    // Setup localStorage mock
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
    localStorageMock.clear();
  });

  it('should save currency preference', () => {
    saveCurrencyPreference('EUR');
    expect(localStorageMock.getItem('amp-spot-currency')).toBe('EUR');
  });

  it('should load saved currency preference', () => {
    localStorageMock.setItem('amp-spot-currency', 'GBP');
    expect(loadCurrencyPreference()).toBe('GBP');
  });

  it('should return USD as default when no preference saved', () => {
    expect(loadCurrencyPreference()).toBe('USD');
  });
});

describe('detectUserCurrency', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'navigator', {
      value: { language: 'en-US' },
      writable: true,
    });
  });

  it('should detect USD from en-US locale', () => {
    Object.defineProperty(global, 'navigator', {
      value: { language: 'en-US' },
      writable: true,
    });
    expect(detectUserCurrency()).toBe('USD');
  });

  it('should detect GBP from en-GB locale', () => {
    Object.defineProperty(global, 'navigator', {
      value: { language: 'en-GB' },
      writable: true,
    });
    expect(detectUserCurrency()).toBe('GBP');
  });

  it('should detect EUR from de-DE locale', () => {
    Object.defineProperty(global, 'navigator', {
      value: { language: 'de-DE' },
      writable: true,
    });
    expect(detectUserCurrency()).toBe('EUR');
  });

  it('should return USD as default for unknown locale', () => {
    Object.defineProperty(global, 'navigator', {
      value: { language: 'unknown-XX' },
      writable: true,
    });
    expect(detectUserCurrency()).toBe('USD');
  });

  it('should return USD when navigator.language is undefined', () => {
    Object.defineProperty(global, 'navigator', {
      value: { language: undefined },
      writable: true,
    });
    expect(detectUserCurrency()).toBe('USD');
  });
});
