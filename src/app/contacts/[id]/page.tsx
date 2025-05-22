import { contacts } from '@/data/contacts';
import type { Contact } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Tag, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

async function getContactById(id: string): Promise<Contact | undefined> {
  // In a real app, this would be an API call
  return contacts.find(contact => contact.id === id);
}

export async function generateStaticParams() {
  return contacts.map(contact => ({
    id: contact.id,
  }));
}

export default async function ContactDetailPage({ params }: { params: { id: string } }) {
  const contact = await getContactById(params.id);

  if (!contact) {
    return (
      <div className="container mx-auto p-4 md:p-6 text-center">
        <h1 className="text-2xl font-semibold text-destructive">Contact not found</h1>
        <Button asChild variant="link" className="mt-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to contacts
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
          Back to All Contacts
        </Link>
      </Button>

      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-muted/50 p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image
              src={contact.imageUrl}
              alt={contact.name}
              width={150}
              height={150}
              className="rounded-full border-4 border-primary object-cover shadow-md"
              data-ai-hint={contact.dataAiHint || "person portrait"}
              priority
            />
            <div className="text-center sm:text-left">
              <CardTitle className="text-3xl font-bold text-primary">{contact.name}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-1">{contact.shortDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Contact Information</h3>
              <Separator className="mb-3" />
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent" />
                  <span className="text-foreground">{contact.phoneNumber}</span>
                </div>
                {contact.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <a href={`mailto:${contact.email}`} className="text-foreground hover:underline hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-3 text-accent" />
                  <span className="text-foreground">{contact.category}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Full Description</h3>
              <Separator className="mb-3" />
              <div className="flex items-start">
                <FileText className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{contact.fullDescription}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const contact = await getContactById(params.id);
  if (!contact) {
    return {
      title: 'Contact Not Found',
    };
  }
  return {
    title: `${contact.name} | ContactVerse`,
    description: contact.shortDescription,
  };
}
