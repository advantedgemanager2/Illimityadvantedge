import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle } from "lucide-react";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaDescription?: string;
  pageSlug?: string;
}

export default function ContactFormDialog({
  open,
  onOpenChange,
  ctaDescription,
  pageSlug,
}: ContactFormDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setRole("");
    setMessage("");
    setSubmitted(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) resetForm();
    onOpenChange(isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !role.trim() || !message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: name.trim(),
          email: email.trim(),
          role: role.trim(),
          message: message.trim(),
          page_slug: pageSlug || null,
        },
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Request sent successfully" });
    } catch (err) {
      toast({
        title: "Failed to send request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-emerald-500" />
            <DialogHeader>
              <DialogTitle>Thank you!</DialogTitle>
              <DialogDescription>
                Your request has been sent. We will get back to you shortly.
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get in Touch</DialogTitle>
              {ctaDescription && (
                <DialogDescription>{ctaDescription}</DialogDescription>
              )}
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-role">Role</Label>
                <Input
                  id="contact-role"
                  placeholder="e.g. Portfolio Manager, Risk Analyst"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">How can we help?</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Describe your request..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {submitting ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
