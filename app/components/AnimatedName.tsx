const LINES = ["Olive", "Whitley"];

// Deterministic "random" offsets so every letter drifts on its own rhythm
// without causing a hydration mismatch.
function letterStyle(i: number) {
  return {
    "--dur": `${2.2 + ((i * 7) % 5) * 0.35}s`,
    "--delay": `${-((i * 13) % 9) * 0.4}s`,
    "--amp": `${2 + ((i * 5) % 4)}px`,
    "--tilt": `${(((i * 11) % 5) - 2) * 0.8}deg`,
  } as React.CSSProperties;
}

export default function AnimatedName() {
  let index = 0;

  return (
    <span>
      <span className="sr-only">{LINES.join(" ")}</span>
      {LINES.map((line, lineIndex) => (
        <span key={line} aria-hidden="true">
          {lineIndex > 0 && <br />}
          {line.split("").map((char) => {
            const i = index++;
            return (
              <span key={i} className="name-letter" style={letterStyle(i)}>
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
