import VirtualScrollChild from "./virtual-scroll-child";
import InfiniteScroll from "./infinite-scroll";

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
  const VirtualScrollChildren = listItems.map((listItem) => (
    <VirtualScrollChild height={height} children={listItem} />
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export { VirtualAndInfiniteScroll };
