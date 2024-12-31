import clsx from "clsx"

export function Input({ variant, ...props }) {
  return (
    <div
      className={clsx("flex-1 p-2", {
        "border border-green-700 rounded-3xl w-full": variant === "outline",
        "border border-zinc-300 rounded-xl": variant === "minimalist",
      })}
    >
      <input {...props} className="w-full outline-none" />
    </div>
  )
}
