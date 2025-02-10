export const menuItems = [
  { title: "About Us", subtitle: "AABについて", href: "/#about", order: 3 },
  {
    title: "Service Menu",
    subtitle: "サービス一覧",
    href: "/#services",
    order: 1,
  },
  {
    title: "Contact Us",
    subtitle: "お問い合わせ",
    href: "/#contact",
    order: 5,
  },
  { title: "Staff", subtitle: "スタッフ紹介", href: "/#staff", order: 7 },
  { title: "Recruit", subtitle: "採用情報", href: "/#recruit", order: 2 },
  { title: "Our Work", subtitle: "実績紹介", href: "/#works", order: 4 },
];

export const navLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#staff", label: "Staff" },
  { href: "/#recruit", label: "Recruit" },
  { href: "/#contact", label: "Contact" },
] as const;
