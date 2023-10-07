import React from "react";
import { useInView } from "react-intersection-observer";
/*
 * A wrapper component for children of
 * VirtualScroll. Computes inline style and
 * handles whether to display props.children.
 */
function VirtualScrollChild({
  height,
  children,
}: {
  height: string;
  children: React.ReactNode;
}) {
  const [ref, inView] = useInView();
  const style = {
    height: height
  };
  return (
    <div className="virtual-scroll-child" style={style} ref={ref}>
      {inView ? children : null}
    </div>
  );
}

export default VirtualScrollChild;
