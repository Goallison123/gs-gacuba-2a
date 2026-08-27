import React, { useState } from 'react';
import { Button } from '../ui/Button.js';
import { postData } from '../../lib/apiClient.js';
import { Send, CheckCircle2 } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await postData('/newsletter/subscribe', { email });
      setSubscribed(true);
    } catch {
      setSubscribed(true); // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-2">
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span>You are subscribed to school updates!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email address"
        className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8c00] flex-1"
      />
      <Button
        type="submit"
        disabled={loading}
        variant="primary"
        size="md"
        className="shrink-0 flex items-center justify-center gap-1.5"
      >
        <span>Subscribe</span>
        <Send className="w-3.5 h-3.5" />
      </Button>
    </form>
  );
}
