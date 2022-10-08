import { WithHighlightProps } from "./types";

const withHighlight: WithHighlightProps = (text, filter) => {
  if (!filter || !text.includes(filter)) {
    return text;
  } else {
    const index = text.indexOf(filter);
    return (
      <>
        <div>
          {text.slice(0, index)}
          <mark className="mark-selection">{filter}</mark>
          {text.slice(index + filter.length, text.length)}
        </div>
      </>
    );
  }
};
export default withHighlight;
