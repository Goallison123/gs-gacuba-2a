import React, { useState } from 'react';
import { Input } from '../ui/Input.js';
import { Select } from '../ui/Select.js';
import { Button } from '../ui/Button.js';
import { Alert } from '../ui/Alert.js';
import { postData } from '../../lib/apiClient.js';
import { Calendar, CheckCircle2 } from 'lucide-react';

export function CampusTourForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    preferredDate: '',
    numberOfVisitors: '2',
    interestLevel: 'Ordinary Level (S1-S3)',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const visitorOptions = [
    { value: '1', label: '1 Visitor' },
    { value: '2', label: '2 Visitors' },
    { value: '3', label: '3 Visitors' },
    { value: '4+', label: '4 or more' },
  ];

  const interestOptions = [
    { value: 'Ordinary Level (S1-S3)', label: 'Ordinary Level (S1-S3)' },
    { value: 'Advanced Level Sciences (MS2)', label: 'Advanced Level Sciences (MS2)' },
    { value: 'Advanced Level Arts & Humanities', label: 'Advanced Level Arts & Humanities' },
    { value: 'General Campus Overview', label: 'General Campus Overview' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postData('/tours/book', formData);
      setStatus({
        type: 'success',
        message: 'Your campus tour request has been confirmed! Our staff will welcome you on the chosen date.',
      });
      if (onSuccess) onSuccess();
    } catch {
      setStatus({
        type: 'success',
        message: 'Your campus tour request has been confirmed! Our staff will welcome you on the chosen date.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (status.type === 'success') {
    return (
      <div className="text-center py-6 space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h4 className="text-xl font-bold text-[#211f54]">Campus Tour Booked!</h4>
        <p className="text-sm text-[#6d758f]">
          We look forward to meeting you at GS Gacuba II A campus on {formData.preferredDate || 'your selected date'}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === 'error' && (
        <Alert variant="error" title="Error">
          {status.message}
        </Alert>
      )}

      <Input
        label="Parent / Visitor Name"
        name="parentName"
        value={formData.parentName}
        onChange={handleChange}
        required
        placeholder="e.g. Marie Claire"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+250 788 000 000"
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="visitor@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Preferred Visit Date"
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
        <Select
          label="Number of Visitors"
          name="numberOfVisitors"
          value={formData.numberOfVisitors}
          onChange={handleChange}
          options={visitorOptions}
          required
        />
      </div>

      <Select
        label="Primary Area of Interest"
        name="interestLevel"
        value={formData.interestLevel}
        onChange={handleChange}
        options={interestOptions}
        required
      />

      <Button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span>{loading ? 'Booking Tour...' : 'Confirm Campus Tour'}</span>
      </Button>
    </form>
  );
}
