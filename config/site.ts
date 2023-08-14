export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Golfo Nuevo Confitería - Menu",
  description:
    "Golfo Nuevo Confitería - ¿Qué le gustaría ordenar?",
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
      "url": `${process.env.BASE_ENDPOINT}/products/?populate=*?pagination[page]=1&pagination[pageSize]=150`
    },
    "getCategory": {
      "url": `${process.env.BASE_ENDPOINT}/products?populate=*&filters[0][categoria][$eq]=` // :category
    }
  }
}
