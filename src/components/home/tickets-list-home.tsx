import { BuildingOffice, CalendarBlank, City, Timer } from '@phosphor-icons/react'
import { TicketCard } from '../ui'

export function TicketsListHome() {
  return (
    <section id='tickets-list' className='flex flex-col'>
      <TicketCard.Root variant='primary'>
        <TicketCard.Content>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon  Icon={City} variant='primary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={CalendarBlank} variant='primary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={Timer} variant='primary' size={40} />
          </TicketCard.Info>
          <TicketCard.Info infoTitle='23/06/2009'>
            <TicketCard.Icon Icon={BuildingOffice} variant='primary' size={40} />
          </TicketCard.Info>
          <TicketCard.Action />
        </TicketCard.Content>
        <TicketCard.PriceSummary
          variant='primary'
          transportType='ship'
          price={200}
        />
      </TicketCard.Root>
    </section>
  )
}
