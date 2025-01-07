import { Search } from '../components/ui'
import { TicketsListHome } from '../components/home/tickets-list-home'

export function Home() {
  return (
    <main className='flex flex-col gap-16 p-20'>
      <Search />
      <div className='grid grid-cols-1'>
        <TicketsListHome />
      </div>
    </main>
  )
}
