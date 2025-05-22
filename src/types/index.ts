
export type LocalizedString = {
  en: string;
  vi: string;
};

export type Contact = {
  id: string;
  name: LocalizedString;
  phoneNumber: string;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  imageUrl: string;
  dataAiHint?: string;
  category: LocalizedString;
  email?: string; // Optional email
};
