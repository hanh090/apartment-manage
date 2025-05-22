import type { Contact } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, UserCircle, ArrowRight } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Image
            src={contact.imageUrl}
            alt={contact.name}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary/50 object-cover"
            data-ai-hint={contact.dataAiHint || "person avatar"}
          />
          <div className="flex-1">
            <CardTitle className="text-xl leading-tight text-primary">{contact.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1 flex items-center">
              <Phone className="h-4 w-4 mr-1.5 text-accent" />
              {contact.phoneNumber}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/90 line-clamp-3">{contact.shortDescription}</p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild variant="outline" size="sm" className="w-full group">
          <Link href={`/contacts/${contact.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
