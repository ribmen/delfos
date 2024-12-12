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
    phoneNumber, 
    landlineNumber, 
    email, 
    address, 
    city, 
    state, 
    CEPcode, 
    country, 
    organization, 
    role, 
    websiteUrl
  }: VCardProps) => {
    return `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName};;;\nTEL;CELL:${phoneNumber}\nTEL;TYPE=LANDLINE:${landlineNumber}\nEMAIL:${email}\nADR:;;${address};${city};${state};${CEPcode};${country}\nORG:${organization}\nROLE:${role}\nTITLE:${role}\nURL:${websiteUrl}\nEND:VCARD`
  };
  
  
  