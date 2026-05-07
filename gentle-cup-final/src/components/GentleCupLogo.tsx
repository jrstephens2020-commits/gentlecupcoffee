
export default function GentleCupLogo({ compact = false }) {
  return (
    <div className={compact ? "flex items-center" : "flex items-center justify-center"}>
      <img
        src="/gentle-cup-logo.png"
        alt="Gentle Cup Coffee"
        className={
          compact
            ? "h-14 w-auto object-contain"
            : "w-full max-w-[620px] object-contain drop-shadow-xl"
        }
      />
    </div>
  )
}
