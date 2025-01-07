import { Boat, Bus, Train, AirplaneTilt } from '@phosphor-icons/react'
import { TicketCard } from '.'
import clsx from 'clsx'

interface TicketCardPriceSummaryProps {
  transportType: 'train' | 'bus' | 'airplane' | 'ship'
  variant: 'primary' | 'secondary'
  price: number
}

export function TicketCardPriceSummary({
  transportType,
  variant,
  price,
}: TicketCardPriceSummaryProps) {
  return (
    <div className='flex flex-col justify-between items-end'>
      {transportType === 'ship' && (
        <TicketCard.Icon variant={variant} Icon={Boat} />
      )}
      {transportType === 'bus' && (
        <TicketCard.Icon variant={variant} Icon={Bus} />
      )}
      {transportType === 'airplane' && (
        <TicketCard.Icon variant={variant} Icon={AirplaneTilt} />
      )}
      {transportType === 'train' && (
        <TicketCard.Icon variant={variant} Icon={Train} />
      )}
      <strong
        className={clsx('text-3xl font-semibold', {
          'text-orange-500': variant === 'primary',
        })}
      >
        {price}
      </strong>
    </div>
  )
}
