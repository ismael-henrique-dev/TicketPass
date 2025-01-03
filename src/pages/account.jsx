import { Search, TicketCard } from "../components/ui"

export function Account() {
  return (
    <main>
      <Search />
      <section className="flex flex-col">
        <TicketCard variant="primary" />
      </section>
    </main>
  )
}
