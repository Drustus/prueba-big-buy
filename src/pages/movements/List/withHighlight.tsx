import { WithHighlightProps } from "./types";

const withHighlight: WithHighlightProps = (text, filter) => {
  if (!filter) {
    return text;
  }
  const parts = text.split(new RegExp(`(${filter})`, "gi"));
  return (
    <div>
      {parts.map((part, i) =>
        part.toLowerCase() === filter.toLowerCase() ? (
          <mark key={i} className="mark-selection">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </div>
  );
};
export default withHighlight;
