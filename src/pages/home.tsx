import { SelectPriceFilter, TicketsListHome } from '../components/home'
import { Search } from '../components/ui'

export function Home() {
  return (
    <main className='flex flex-col gap-16 p-20'>
      <Search />
      <div className='grid grid-cols-1'>
        <TicketsListHome />
      </div>
      <section>
        <SelectPriceFilter />
      </section>
    </main>
  )
}
