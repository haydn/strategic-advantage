interface Node<N> {
  id: string;
  data: N;
}

interface Link<L> {
  from: string;
  to: string;
  data: L;
}

interface Graph<N, L> {
  nodes: Array<Node<N>>;
  links: Array<Link<L>>;
}

const filterByNode = <N, L>(
  graph: Graph<N, L>,
  predicate: (node: Node<N>) => boolean
): Graph<N, L> => {
  const nodes = graph.nodes.filter(predicate);
  return {
    nodes,
    links: graph.links.filter(
      ({ from, to }) => !nodes.some(({ id }) => id === from || id === to)
    ),
  };
};

const neighbors = <N, L>(
  graph: Graph<N, L>,
  id: string | Iterable<string>
): Set<string> => {
  const set = new Set(typeof id === "string" ? [id] : [...id]);
  return new Set(
    graph.links
      .map(({ from, to }) => {
        if (set.has(from)) return to;
        if (set.has(to)) return from;
        return null;
      })
      .filter(Boolean)
  );
};

const neighborhood = <N, L>(
  graph: Graph<N, L>,
  id: string | Iterable<string>,
  depth: number = 1
): Set<string> => {
  const set = new Set(typeof id === "string" ? [id] : [...id]);
  if (depth === 0) return set;
  if (depth === 1) return new Set([...set, ...neighbors(graph, set)]);
  return new Set([
    ...set,
    ...neighborhood(graph, neighbors(graph, set), depth - 1),
  ]);
};

export { filterByNode, neighbors, neighborhood };
