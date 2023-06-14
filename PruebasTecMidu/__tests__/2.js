import { willRicardoMakeItAndNotBeFired } from "../2";
import { test, expect } from 'vitest';

test('willRicardoMakeItAndNotBeFired', () => {
    expect(
        willRicardoMakeItAndNotBeFired(1, 10, 10, 0)
    ).toBe(true);

    expect(
        willRicardoMakeItAndNotBeFired(1, 10, 10, 1)
    ).toBe(false);

    expect(
        willRicardoMakeItAndNotBeFired(2, 20, 10, 0)
    ).toBe(true);

    expect(
        willRicardoMakeItAndNotBeFired(2, 20, 10, 1)
    ).toBe(false);
});