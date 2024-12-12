interface VCardProps {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  landlineNumber?: string;
  email?: string;
  websiteUrl: string;
  organization?: string;
  role?: string;
  address?: string
  CEPcode: string;
  city: string;
  state: string;
  country: string;
}

export const generateVCard = (  
  {
    lastName,
    firstName, 
    phoneNumber = '', 
    landlineNumber = '', 
    email = '', 
    address = '', 
    city, 
    state, 
    CEPcode, 
    country, 
    organization = '', 
    role = '', 
    websiteUrl
  }: VCardProps) => {
    return `
    BEGIN:VCARD
    VERSION:3.0
    N:${lastName};${firstName};;;
    FN:${firstName} ${lastName}
    TEL;TYPE=CELL:${phoneNumber}
    TEL;TYPE=LANDLINE:${landlineNumber}
    EMAIL:${email}
    ADR;TYPE=HOME:;;${address};${city};${state};${CEPcode};${country}
    ORG:${organization}
    ROLE:${role}
    URL:${websiteUrl}
    END:VCARD
    `
  };
  
  
  