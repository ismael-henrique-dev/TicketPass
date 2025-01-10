import { TicketsListMyTickets } from '../components/my-tickets'
import { Search } from '../components/ui'

export function MyTickets() {
  return (
    <div>
      <main>
        <Search />
        <TicketsListMyTickets />
      </main>
    </div>
  )
}
