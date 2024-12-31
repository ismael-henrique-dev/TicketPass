import clsx from "clsx"

export function Button({ children, variant, ...props }) {
  return (
    <button
      className={clsx("flex items-center justify-center p-3 gap-4 text-sm font-semibold rounded-3xl text-zinc-50", {
        "border bg-orange-500 rounded-3xl w-full": variant === "submit",
        "border border-zinc-300 rounded-xl": variant === "minimalist",
      })}
    >
      {children}
    </button>
  )
}
