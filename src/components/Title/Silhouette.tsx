import { easeLinear, select } from "d3";
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

export default function Silhouette({ data, line, stroke }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    select(ref.current)
      .selectAll("path")
      .data([data])
      .join(
        (enter) => {
          return enter
            .append("path")
            .attr("d", line)
            .style("stroke", stroke)
            .style("fill", "none")
            .style("stroke-width", "5px")
            .style("mix-blend-mode", "lighten");
        },
        (update) => {
          return update
            .transition()
            .duration(3000)
            .delay(0)
            .ease(easeLinear)
            .attr("d", line);
        }
      );
  }, [data, line]);

  return <g ref={ref}></g>;
}
