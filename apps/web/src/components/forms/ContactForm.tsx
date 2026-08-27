import React, { useState } from 'react';
import { Input } from '../ui/Input.js';
import { Select } from '../ui/Select.js';
import { Textarea } from '../ui/Textarea.js';
import { Button } from '../ui/Button.js';
import { Alert } from '../ui/Alert.js';
import { postData } from '../../lib/apiClient.js';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const subjectOptions = [
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Admissions & Enrollment', label: 'Admissions & Enrollment' },
    { value: 'Academic Programs & Curriculum', label: 'Academic Programs & Curriculum' },
    { value: 'School Fees & Bursaries', label: 'School Fees & Bursaries' },
    { value: 'Career Opportunities', label: 'Career Opportunities' },
    { value: 'Partnerships & Donations', label: 'Partnerships & Donations' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await postData<any, typeof formData>('/contact', formData);
      setStatus({
        type: 'success',
        message: res.message || 'Thank you! Your message has been sent to our administration team.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Unable to send message at this time.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === 'success' && (
        <Alert variant="success" title="Message Sent Successfully">
          {status.message}
        </Alert>
      )}

      {status.type === 'error' && (
        <Alert variant="error" title="Sending Failed">
          {status.message}
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g. Eric Bizimana"
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="eric@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+250 788 000 000"
        />
        <Select
          label="Subject of Inquiry"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          options={subjectOptions}
          required
        />
      </div>

      <Textarea
        label="Your Message / Question"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
        placeholder="How can our school administrative team assist you?"
      />

      <Button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto flex items-center justify-center gap-2"
      >
        {loading ? 'Sending Message...' : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
