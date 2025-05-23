
'use client';

import type { Contact } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Eye, EyeOff, Copy } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';
import { useToast } from '@/hooks/use-toast';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { locale } = useLocale();
  const { toast } = useToast();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const maskedPhoneNumber = useMemo(() => {
    if (!contact.phoneNumber || contact.phoneNumber.length < 3) return '***'; // Fallback for very short numbers
    // Show last 3 digits, mask the preceding digits (up to 7)
    const visiblePart = contact.phoneNumber.slice(-3);
    const maskedPart = '*'.repeat(Math.max(0, contact.phoneNumber.length - 3));
    return maskedPart + visiblePart;
  }, [contact.phoneNumber]);

  const toggleLabels = useMemo(() => ({
    show: locale === 'vi' ? 'Hiện số điện thoại' : 'Show phone number',
    hide: locale === 'vi' ? 'Ẩn số điện thoại' : 'Hide phone number',
  }), [locale]);

  const copyLabels = useMemo(() => ({
    copy: locale === 'vi' ? 'Sao chép SĐT' : 'Copy Phone Number',
    copiedSuccess: locale === 'vi' ? 'Đã sao chép SĐT!' : 'Phone number copied!',
    copiedError: locale === 'vi' ? 'Không thể sao chép' : 'Could not copy',
  }), [locale]);

  const handleCopyPhoneNumber = async () => {
    if (!contact.phoneNumber || !showPhoneNumber) return;
    try {
      await navigator.clipboard.writeText(contact.phoneNumber);
      toast({
        title: copyLabels.copiedSuccess,
        variant: 'default',
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: copyLabels.copiedError,
        description: (err as Error)?.message || (locale === 'vi' ? 'Vui lòng thử lại.' : 'Please try again.'),
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Image
            src={contact.imageUrl}
            alt={contact.name[locale]}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary/50 object-cover"
            data-ai-hint={contact.dataAiHint || "person avatar"}
          />
          <div className="flex-1">
            <CardTitle className="text-xl leading-tight text-primary">{contact.name[locale]}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/90 line-clamp-3">{contact.shortDescription[locale]}</p>
      </CardContent>
      <CardFooter className="flex-col items-stretch pt-4 gap-3">
        {contact.phoneNumber && (
          <>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {showPhoneNumber ? contact.phoneNumber : maskedPhoneNumber}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon" 
                onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                className="h-8 w-8" 
                aria-label={showPhoneNumber ? toggleLabels.hide : toggleLabels.show}
              >
                {showPhoneNumber ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyPhoneNumber}
              className="w-full"
              aria-label={copyLabels.copy}
              disabled={!showPhoneNumber}
            >
              <Copy className="h-3.5 w-3.5 mr-1" />
              {copyLabels.copy}
            </Button>
          </>
        )}
        <Button asChild variant="outline" size="sm" className="w-full group">
          <Link href={`/contacts/${contact.id}`}>
            {locale === 'vi' ? 'Xem Chi Tiết' : 'View Details'}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
