import { Search, TicketCard } from '../components/ui'

export function Home() {
  return (
    <main className="flex flex-col gap-16 p-20">
      <Search />
      <div className="grid grid-cols-1">
        <section id="tickets-list" className="flex flex-col">
          <TicketCard variant="primary" />
        </section>
        <section></section>
      </div>
    </main>
  )
}
