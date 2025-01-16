import { TicketsListMyTickets } from '../components/my-tickets'
import { Search } from '../components/ui'
import { PaginationDemo } from '../components/ui'

export function MyTickets() {
  return (
    <div>
      <main className='flex flex-col gap-16 p-20'>
        <Search />
        <TicketsListMyTickets />
        <PaginationDemo />
      </main>
    </div>
  )
}
