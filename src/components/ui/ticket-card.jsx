import {
  Boat,
  BuildingOffice,
  CalendarBlank,
  City,
  Ticket,
  Timer,
} from "@phosphor-icons/react"
import { Button } from "./button"

export function TicketCard() {
  return (
    <div className="bg-zinc-100 border-2 border-orange-500 rounded-3xl p-6 flex justify-between ">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <City className="text-orange-500 size-6" />
          <span>São Paulo - Belo Horizonte</span>
        </div>
        <div className="flex items-center gap-4">
          <CalendarBlank className="text-orange-500 size-6" />
          <span>Viajar em 12 de novembro.</span>
        </div>
        <div className="flex items-center gap-4">
          <Timer className="text-orange-500 size-6" />
          <span>19:00</span>
        </div>
        <div className="flex items-center gap-4">
          <BuildingOffice className="text-orange-500 size-6" />
          <span>Empresa X</span>
        </div>
        <Button>
          Reservar
          <Ticket size={20} />
        </Button>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Boat className="text-orange-500 size-6" size={40} />
        <strong className="text-orange-500 text-3xl font-semibold">R$ 200,00</strong>
      </div>
    </div>
  )
}
