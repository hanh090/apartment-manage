
'use client';

import { useEffect, useState, useMemo } from 'react';
import type { Contact } from '@/types';
import { getContactById } from '@/lib/contactUtils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Tag, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLocale } from '@/context/LocaleContext';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function ContactDetailClientContent() {
  const params = useParams<{ id: string }>();
  const { locale } = useLocale();
  const [contact, setContact] = useState<Contact | undefined | null>(null); // null for loading state

  useEffect(() => {
    if (params.id) {
      getContactById(params.id).then(setContact);
    }
  }, [params.id]);

  const pageText = useMemo(() => ({
    backToContacts: locale === 'vi' ? 'Quay lại Danh Bạ' : 'Back to All Contacts',
    contactNotFound: locale === 'vi' ? 'Không tìm thấy liên hệ' : 'Contact not found',
    contactInformation: locale === 'vi' ? 'Thông Tin Liên Hệ' : 'Contact Information',
    fullDescription: locale === 'vi' ? 'Mô Tả Đầy Đủ' : 'Full Description',
    loading: locale === 'vi' ? 'Đang tải...' : 'Loading...',
  }), [locale]);

  if (contact === null) { // Loading state
    return (
      <div className="container mx-auto p-4 md:p-6 max-w-3xl">
        <Skeleton className="h-8 w-48 mb-6" />
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-muted/50 p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Skeleton className="h-[150px] w-[150px] rounded-full" />
              <div className="text-center sm:text-left space-y-2">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-6 w-48" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <Skeleton className="h-4 w-32 mb-1" />
              <Separator className="mb-3" />
              <div className="space-y-3">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-5 w-52" />
                <Skeleton className="h-5 w-36" />
              </div>
            </div>
            <div>
              <Skeleton className="h-4 w-40 mb-1" />
              <Separator className="mb-3" />
              <div className="flex items-start">
                <Skeleton className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div className="space-y-2 flex-grow">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="container mx-auto p-4 md:p-6 text-center">
        <h1 className="text-2xl font-semibold text-destructive">{pageText.contactNotFound}</h1>
        <Button asChild variant="link" className="mt-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {pageText.backToContacts}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-3xl">
      <Button asChild variant="outline" size="sm" className="mb-6 group">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {pageText.backToContacts}
        </Link>
      </Button>

      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-muted/50 p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image
              src={contact.imageUrl}
              alt={contact.name[locale]}
              width={150}
              height={150}
              className="rounded-full border-4 border-primary object-cover shadow-md"
              data-ai-hint={contact.dataAiHint || "person portrait"}
              priority
            />
            <div className="text-center sm:text-left">
              <CardTitle className="text-3xl font-bold text-primary">{contact.name[locale]}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-1">{contact.shortDescription[locale]}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">{pageText.contactInformation}</h3>
              <Separator className="mb-3" />
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-foreground">{contact.phoneNumber}</span>
                </div>
                {contact.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a href={`mailto:${contact.email}`} className="text-foreground hover:underline hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-foreground">{contact.category[locale]}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">{pageText.fullDescription}</h3>
              <Separator className="mb-3" />
              <div className="flex items-start">
                <FileText className="h-5 w-5 mr-3 mt-1 text-muted-foreground flex-shrink-0" />
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{contact.fullDescription[locale]}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
