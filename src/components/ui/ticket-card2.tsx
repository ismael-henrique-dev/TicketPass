import {
  Boat,
  BuildingOffice,
  CalendarBlank,
  City,
  PencilSimple,
  Prohibit,
  Ticket,
  Timer,
} from '@phosphor-icons/react'
import { Button } from './button'
import clsx from 'clsx'

interface TicketCardProps {
  variant: 'primary' | 'secondary'
}

export function TicketCard2({ variant = 'primary' }: TicketCardProps) {
  return (
    <div
      className={clsx(
        'border-2 border-orange-500 rounded-3xl p-6 flex justify-between',
        {
          'bg-orange-500 text-zinc-50': variant === 'secondary',
        }
      )}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <City
            size={40}
            className={clsx({
              'text-orange-500': variant === 'primary',
            })}
          />

          <span className='text-xl font-medium'>
            São Paulo - Belo Horizonte
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <CalendarBlank
            size={40}
            className={clsx({
              'text-orange-500': variant === 'primary',
            })}
          />
          <span className='text-xl font-medium'>Viajar em 12 de novembro.</span>
        </div>
        <div className='flex items-center gap-4'>
          <Timer
            size={40}
            className={clsx({
              'text-orange-500': variant === 'primary',
            })}
          />
          <span className='text-xl font-medium'>19:00</span>
        </div>
        <div className='flex items-center gap-4'>
          <BuildingOffice
            size={40}
            className={clsx({
              'text-orange-500': variant === 'primary',
            })}
          />
          <span className='text-xl font-medium'>Empresa X</span>
        </div>
        {variant === 'primary' && (
          <Button variant='default'>
            Reservar
            <Ticket size={20} />
          </Button>
        )}
        {variant === 'secondary' && (
          <div className='bg-zinc-50 p-3 flex items-center justify-center w-24 gap-4 rounded-xl'>
            <Button variant='minimalist'>
              <PencilSimple size={20} className='text-orange-500' />
            </Button>
            <Button variant='minimalist'>
              <Prohibit size={20} className='text-orange-500' />
            </Button>
          </div>
        )}
      </div>
      <div className='flex flex-col justify-between items-end'>
        <Boat
          className={clsx({
            'text-orange-500': variant === 'primary',
          })}
          size={40}
        />
        <strong
          className={clsx(' text-3xl font-semibold', {
            'text-orange-500': variant === 'primary',
          })}
        >
          R$ 200,00
        </strong>
      </div>
    </div>
  )
}
