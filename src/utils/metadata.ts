import { type Metadata } from "next";

export default {
  title: "Todio",
  applicationName: "Todio",
  description: "Project management web application",
  authors: [
    {
      name: "MahmoudESSE",
      url: "https://github.com/MahmoudESSE",
    },
  ],
  creator: "MahmoudESSE",
  icons: [
    {
      rel: "icon",
      url: "/card_file_box/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://todio.mimicro.xyz",
    title: "Todio",
    locale: "en",
    siteName: "todio.mimicro.xyz",
    description: "Project Management web application",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
} satisfies Metadata;
