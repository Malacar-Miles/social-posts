import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
/*
 * A container component for infinite scrolling.
 */
type InViewRef = (node?: Element | null | undefined) => void;

function InfiniteScroll({
  listItems,
  lastRowHandler,
}: {
  listItems: JSX.Element[];
  lastRowHandler: () => void;
}) {
  const [lastRowRef, lastRowInView] = useInView();

  // if last row is in view, call the last row handler
  useEffect(() => {
    if (lastRowInView) lastRowHandler();
    // eslint-disable-next-line
  }, [lastRowInView]);

  const Elements = listItems.map((listItem, i) => {
    const props: { key?: string; ref?: InViewRef } = {
      key: i.toString(),
    };
    if (i === listItems.length - 1) props.ref = lastRowRef;
    return <div {...props}>{listItem}</div>;
  });

  return <>{Elements}</>;
}

export default InfiniteScroll;
