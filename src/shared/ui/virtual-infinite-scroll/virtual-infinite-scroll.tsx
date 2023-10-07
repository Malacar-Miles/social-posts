import InfiniteScroll from "./infinite-scroll";
import VirtualScrollChild from "./virtual-scroll-child";

/*
 * A wrapper component for implementing virtual and
 * infinite scrolling.
 */
function VirtualAndInfiniteScroll({
  listItems,
  height,
  lastRowHandler,
}: {
  listItems: React.ReactNode[];
  height: string;
  lastRowHandler: () => void;
}) {
  const VirtualScrollChildren = listItems.map((listItem, index) => (
    <VirtualScrollChild height={height} children={listItem} setId={index + 1} />
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export { VirtualAndInfiniteScroll };
