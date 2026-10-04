import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '../src/utils/security';

describe('Accessibility & Security Validation', () => {
  it('should sanitize input strings against XSS attacks', () => {
    const input = '<script>alert("xss")</script>';
    expect(sanitizeInput(input)).not.toContain('<script>');
  });
});
