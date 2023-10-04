import { Header } from "@/components/Header";
import { SectionForm } from "@/components/SectionForm";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";


export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionServices />
      <SectionForm />
    </>
  )
}
