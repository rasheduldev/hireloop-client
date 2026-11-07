import { Banner } from "@/components/banner"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-svh bg-gradient-to-b from-[#212125] via-[#111113] to-[#0b0b0d]">
      <SiteHeader />
      <main>
        <Banner />
      </main>
    </div>
  )
}
