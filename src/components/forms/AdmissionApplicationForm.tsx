import React, { useState } from 'react';
import { Input } from '../ui/Input.js';
import { Select } from '../ui/Select.js';
import { Textarea } from '../ui/Textarea.js';
import { Button } from '../ui/Button.js';
import { Alert } from '../ui/Alert.js';
import { postData } from '../../lib/apiClient.js';
import { Send, CheckCircle2 } from 'lucide-react';

export function AdmissionApplicationForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState({
    studentFullName: '',
    dateOfBirth: '',
    gender: 'Male',
    gradeApplyingFor: 'Senior 1 (Ordinary Level)',
    previousSchool: '',
    parentFullName: '',
    parentPhone: '',
    parentEmail: '',
    residentialAddress: '',
    medicalNotes: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    applicationId?: string;
  }>({ type: null, message: '' });

  const gradeOptions = [
    { value: 'Senior 1 (Ordinary Level)', label: 'Senior 1 (Ordinary Level)' },
    { value: 'Senior 2 (Ordinary Level)', label: 'Senior 2 (Ordinary Level)' },
    { value: 'Senior 3 (Ordinary Level)', label: 'Senior 3 (Ordinary Level)' },
    { value: 'Senior 4 (MCB - Mathematics, Chemistry, Biology)', label: 'Senior 4 (MCB - Sciences)' },
    { value: 'Senior 4 (HEG - History, Economics, Geography)', label: 'Senior 4 (HEG - Arts & Humanities)' },
    { value: 'Senior 5 (MCB - Sciences)', label: 'Senior 5 (MCB - Sciences)' },
    { value: 'Senior 5 (HEG - Arts & Humanities)', label: 'Senior 5 (HEG - Arts & Humanities)' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
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
      const res = await postData<any, typeof formData>('/admissions', formData);
      setStatus({
        type: 'success',
        message: res.message || 'Application submitted successfully!',
        applicationId: res.data?.applicationId || `APP-${Date.now().toString().slice(-6)}`,
      });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit application. Please check your details.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (status.type === 'success') {
    return (
      <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#211f54]">Application Received!</h3>
        <p className="text-sm text-[#353e5c] max-w-md mx-auto">
          Your admission submission for <strong className="text-[#211f54]">{formData.studentFullName}</strong> has been registered with reference ID:
        </p>
        <div className="inline-block px-4 py-2 bg-white rounded-lg border border-emerald-300 font-mono font-bold text-lg text-emerald-800">
          {status.applicationId}
        </div>
        <p className="text-xs text-[#6d758f]">
          Our admissions registry will review the records and contact you via {formData.parentPhone} or {formData.parentEmail}.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus({ type: null, message: '' });
            setFormData({
              studentFullName: '',
              dateOfBirth: '',
              gender: 'Male',
              gradeApplyingFor: 'Senior 1 (Ordinary Level)',
              previousSchool: '',
              parentFullName: '',
              parentPhone: '',
              parentEmail: '',
              residentialAddress: '',
              medicalNotes: '',
            });
          }}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type === 'error' && (
        <Alert variant="error" title="Submission Error">
          {status.message}
        </Alert>
      )}

      <div className="border-b border-gray-100 pb-4">
        <h4 className="text-base font-bold text-[#211f54] mb-3">1. Student Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Student Name"
            name="studentFullName"
            value={formData.studentFullName}
            onChange={handleChange}
            required
            placeholder="e.g. Mugisha Jean"
          />
          <Input
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
            required
          />
          <Select
            label="Grade / Stream Applying For"
            name="gradeApplyingFor"
            value={formData.gradeApplyingFor}
            onChange={handleChange}
            options={gradeOptions}
            required
          />
          <div className="sm:col-span-2">
            <Input
              label="Previous School Attended"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              required
              placeholder="e.g. GS Rubavu Catholique"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 pb-4">
        <h4 className="text-base font-bold text-[#211f54] mb-3">2. Parent / Guardian Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Parent / Guardian Full Name"
            name="parentFullName"
            value={formData.parentFullName}
            onChange={handleChange}
            required
            placeholder="e.g. Uwera Alice"
          />
          <Input
            label="Contact Phone Number"
            type="tel"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            required
            placeholder="+250 788 000 000"
          />
          <Input
            label="Email Address"
            type="email"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            required
            placeholder="parent@example.com"
          />
          <Input
            label="Residential Address / Sector"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleChange}
            required
            placeholder="e.g. Rubavu, Gisenyi, Umuganda Cell"
          />
        </div>
      </div>

      <div>
        <Textarea
          label="Medical Notes / Special Educational Considerations (Optional)"
          name="medicalNotes"
          value={formData.medicalNotes}
          onChange={handleChange}
          rows={3}
          placeholder="Specify any dietary restrictions, allergies, or physical accommodations required."
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
        >
          {loading ? 'Submitting Application...' : (
            <>
              <span>Submit Admission Form</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
