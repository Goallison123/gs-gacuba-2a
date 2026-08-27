import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateEmail, validatePhone, validateAdmissionPayload, validateContactPayload } from '../src/validators/index.js';

describe('GS Gacuba API Validators', () => {
  it('should validate emails correctly', () => {
    assert.strictEqual(validateEmail('parent@example.com'), true);
    assert.strictEqual(validateEmail('invalid-email'), false);
  });

  it('should validate phone numbers', () => {
    assert.strictEqual(validatePhone('+250788123456'), true);
    assert.strictEqual(validatePhone('123'), false);
  });

  it('should reject incomplete admissions payload', () => {
    const res = validateAdmissionPayload({ studentName: '' });
    assert.strictEqual(res.valid, false);
  });

  it('should accept valid contact payload', () => {
    const res = validateContactPayload({
      fullName: 'Jean Paul',
      email: 'jeanpaul@example.com',
      subject: 'Inquiry',
      message: 'Hello, I would like more information on admissions.',
    });
    assert.strictEqual(res.valid, true);
  });
});
