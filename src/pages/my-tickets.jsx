import { Search, TicketCard } from "../components/ui"

export function MyTickets() {
  return (
    <div>
      <main>
        <Search />
        <section className="flex flex-col">
          <TicketCard variant="secondary" />
        </section>
      </main>
    </div>
  )
}
