import { MagnifyingGlass, PaperPlaneRight } from '@phosphor-icons/react'

export function Search() {
  return (
    <form className='bg-orange-500 flex items-center justify-between rounded-3xl px-6 py-3 text-zinc-50'>
      <div className='flex items-center gap-3'>
        <MagnifyingGlass size={24} />
        <input
          type='text'
          className='bg-transparent flex-1 outline-none placeholder:text-zinc-100'
          placeholder='Pesquise por uma cidade'
        />
      </div>
      <button type='submit'>
        <PaperPlaneRight size={24} />
      </button>
    </form>
  )
}
