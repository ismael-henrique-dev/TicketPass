import { Search } from "../components/home/search"
import { TicketCard } from "../components/ui"

export function Home() {
  return (
    <main>
      <Search />
      <section className="flex flex-col">
        <TicketCard />
      </section>
    </main>
  )
}
