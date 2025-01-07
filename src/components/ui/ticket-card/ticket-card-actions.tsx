import { PencilSimple, Prohibit, Ticket } from '@phosphor-icons/react'
import { Button } from '../button'

export function TicketCardActions() {
  return (
    <div className='bg-zinc-50 p-3 flex items-center justify-center w-24 gap-4 rounded-xl'>
      <Button variant='minimalist'>
        <PencilSimple size={20} className='text-orange-500' />
      </Button>
      <Button variant='minimalist'>
        <Prohibit size={20} className='text-orange-500' />
      </Button>
    </div>
  )
}

export function TicketCardAction() {
  return (
    <Button variant='default'>
      Reservar
      <Ticket size={20} />
    </Button>
  )
}
