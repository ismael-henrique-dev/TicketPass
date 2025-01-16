import { TicketFiltersList, TicketsListHome } from '../components/home'
import { Search } from '../components/ui'
import { PaginationDemo } from '../components/ui'

export function Home() {
  return (
    <main className='flex flex-col gap-16 p-20'>
      <Search />
      <div className='flex flex-1 justify-between gap-16'>
        <div className='flex flex-1 flex-col gap-8'>
          <TicketsListHome />
          <PaginationDemo />
        </div>
        <TicketFiltersList />
      </div>
    </main>
  )
}
