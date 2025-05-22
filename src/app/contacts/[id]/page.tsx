
'use client'; // Required for useLocale hook

import { useEffect, useState } from 'react';
import { contacts as allContactsData } from '@/data/contacts';
import type { Contact } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Tag, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLocale } from '@/context/LocaleContext'; // Import useLocale
import { useParams } from 'next/navigation'; // To get params on client component

// This function still runs on the server for static generation
async function getContactById(id: string): Promise<Contact | undefined> {
  return allContactsData.find(contact => contact.id === id);
}

// generateStaticParams remains the same for pre-rendering paths
export async function generateStaticParams() {
  return allContactsData.map(contact => ({
    id: contact.id,
  }));
}

// Metadata generation can be tricky with client-side locale.
// For now, we'll generate metadata primarily in one language (e.g., English or default Vietnamese)
// or fetch data specifically for metadata.
// A more robust solution would involve locale-prefixed routing.
export async function generateMetadata({ params }: { params: { id: string } }) {
  const contact = await getContactById(params.id);
  if (!contact) {
    return {
      title: 'Contact Not Found',
    };
  }
  // Defaulting to English for metadata title and description for simplicity here.
  // Or use Vietnamese: contact.name.vi, contact.shortDescription.vi
  return {
    title: `${contact.name.en} | ContactVerse`,
    description: contact.shortDescription.en,
  };
}


export default function ContactDetailPage() {
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
  }), [locale]);

  if (contact === null) { // Loading state
    return (
      <div className="container mx-auto p-4 md:p-6 text-center">
        <p>Loading...</p>
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
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground" /> {/* Changed icon color */}
                  <span className="text-foreground">{contact.phoneNumber}</span>
                </div>
                {contact.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" /> {/* Changed icon color */}
                    <a href={`mailto:${contact.email}`} className="text-foreground hover:underline hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-3 text-muted-foreground" /> {/* Changed icon color */}
                  <span className="text-foreground">{contact.category[locale]}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">{pageText.fullDescription}</h3>
              <Separator className="mb-3" />
              <div className="flex items-start">
                <FileText className="h-5 w-5 mr-3 mt-1 text-muted-foreground flex-shrink-0" /> {/* Changed icon color */}
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{contact.fullDescription[locale]}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
