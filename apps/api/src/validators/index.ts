export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone: string): boolean {
  return phone.trim().length >= 8;
}

export function validateAdmissionPayload(body: any): { valid: boolean; message?: string } {
  if (!body.studentName || typeof body.studentName !== 'string' || body.studentName.trim().length < 2) {
    return { valid: false, message: 'Student full name is required.' };
  }
  if (!body.gradeLevel || typeof body.gradeLevel !== 'string') {
    return { valid: false, message: 'Grade level stream is required.' };
  }
  if (!body.parentName || typeof body.parentName !== 'string') {
    return { valid: false, message: 'Parent / Guardian name is required.' };
  }
  if (!body.parentPhone || !validatePhone(body.parentPhone)) {
    return { valid: false, message: 'A valid parent telephone number is required.' };
  }
  if (!body.parentEmail || !validateEmail(body.parentEmail)) {
    return { valid: false, message: 'A valid parent email address is required.' };
  }
  return { valid: true };
}

export function validateContactPayload(body: any): { valid: boolean; message?: string } {
  if (!body.fullName || typeof body.fullName !== 'string') {
    return { valid: false, message: 'Full name is required.' };
  }
  if (!body.email || !validateEmail(body.email)) {
    return { valid: false, message: 'A valid email address is required.' };
  }
  if (!body.subject || typeof body.subject !== 'string') {
    return { valid: false, message: 'Message subject is required.' };
  }
  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 5) {
    return { valid: false, message: 'Message content must be at least 5 characters.' };
  }
  return { valid: true };
}
