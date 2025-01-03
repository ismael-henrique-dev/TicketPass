import clsx from "clsx"

export function Button({ children, variant = "default", ...props }) {
  return (
    <button
      {...props}
      className={clsx({
        "border bg-orange-500 rounded-3xl w-full": variant === "submit",
        "text-orange-500": variant === "minimalist",
        "flex items-center justify-center rounded-3xl gap-2 text-zinc-50 bg-orange-500 mt-2 px-4 py-2":
          variant === "default",
      })}
    >
      {children}
    </button>
  )
}
