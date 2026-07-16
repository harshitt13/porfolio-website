export function PromptLine({ command }: { command: string }) {
  return (
    <div className="text-sm flex flex-wrap items-center gap-1 mb-3">
      <span className="text-[#7fd8e8]">harshitt13@prod</span>
      <span className="text-[#6b6560]">:</span>
      <span className="text-[#c98f38]">~</span>
      <span className="text-[#6b6560]">$</span>
      <span className="text-[#e9e4d8] ml-1">{command}</span>
    </div>
  )
}
