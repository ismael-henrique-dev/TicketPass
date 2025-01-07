import { BuildingOffice, CalendarBlank, City, Timer } from '@phosphor-icons/react'
import { TicketCard } from '../ui'

export function TicketsListMyTickets() {
  return (
    <section className="flex flex-col">
      <TicketCard.Root variant='secondary'>
        <TicketCard.Content>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={City} variant='secondary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={CalendarBlank} variant='secondary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={Timer} variant='secondary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={BuildingOffice} variant='secondary' size={40} />
          </TicketCard.Info>
          <TicketCard.Actions />
        </TicketCard.Content>
        <TicketCard.PriceSummary
          variant='secondary'
          transportType='ship'
          price={200}
        />
      </TicketCard.Root>
    </section>
  )
}
