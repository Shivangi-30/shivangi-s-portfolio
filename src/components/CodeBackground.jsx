
const codeWords = [
  { text: 'React', top: '16%', left: '8%', delay: '-2s' },
  { text: 'const', top: '28%', left: '82%', delay: '-6s' },
  { text: 'JavaScript', top: '68%', left: '12%', delay: '-4s' },
  { text: 'API', top: '76%', left: '78%', delay: '-8s' },
  { text: 'useState()', top: '46%', left: '88%', delay: '-3s' },
  { text: '</div>', top: '86%', left: '42%', delay: '-7s' },
  { text: 'Next.js', top: '12%', left: '60%', delay: '-5s' },
  { text: 'function()', top: '56%', left: '5%', delay: '-1s' },
]

export default function CodeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {codeWords.map((word) => (
        <span
          key={word.text}
          className="absolute font-mono text-sm text-violet-200/[0.16] motion-safe:animate-[floatCode_14s_ease-in-out_infinite]"
          style={{
            top: word.top,
            left: word.left,
            animationDelay: word.delay,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  )
}