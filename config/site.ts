export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Confitería Golfo Nuevo - Menu",
  description:
    "Confitería Golfo Nuevo - ¿Qué le gustaría ordenar?",
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/profile.php?id=100076494237211",
    instagram: "https://www.instagram.com/golfo_nuevoterminal/",
  },
  endPoints: {
    "getAll": {
      "url": `${process.env.BASE_ENDPOINT}/products`
    },
  }
}
