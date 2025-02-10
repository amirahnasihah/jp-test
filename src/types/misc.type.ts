export interface Logo {
  image: string;
  name: string;
}

export interface SvgIcon {
  src: string;
  alt: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  category?: string;
  image: string;
  subtitle: string;
}
