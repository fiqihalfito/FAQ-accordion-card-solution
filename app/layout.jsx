// import './globals.css'
import '../styles/dist.css'
import { Kumbh_Sans } from "@next/font/google"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbh-sans"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kumbhSans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
