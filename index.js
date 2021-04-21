function bfs(rootNode, vertices, edges) {
    let exploredNodes = [],
        queu = [rootNode];
    while (queu.length !== 0) {
        const node = queu.shift();
        if (node.distance === null) {
            node.distance = 0;
        };
        const adjacents = findAdjacent(node.name, vertices, edges);
        markDistanceAndPredecessor(node, adjacents);
        queu.push(...adjacents);
        exploredNodes.push(node);
    };
    return exploredNodes;
};

function findAdjacent(node, vertices, edges) {
    const adjacentNames = edges.filter(edge => edge.includes(node)).flat().filter(n => n !== node);
    return vertices.filter(vertex => (adjacentNames.includes(vertex.name) && vertex.distance === null));
};

function markDistanceAndPredecessor(node, adjacentNodes) {
    adjacentNodes.forEach(adjacentNode => {
        adjacentNode.distance = node.distance + 1;
        adjacentNode.predecessor = node;
    });
}