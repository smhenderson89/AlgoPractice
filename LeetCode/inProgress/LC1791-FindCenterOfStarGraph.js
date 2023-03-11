/* 
https://leetcode.com/problems/find-center-of-star-graph/

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2


Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
 

Constraints:

3 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
The given edges represent a valid star graph.

*/

var findCenter = function(edges) {
    /* 
    Iterate over the array
    Setup object that counts new object for each edge
        If edge !=, create it and set = 1
        If edge already exists, then ++

        ** Star Nodes **, only need to check 2 nodes, BY DEFINITION will always have a connection to the center
        -- Once you have checked two, then will find the common edge

        Speed: O (2) - constant time
        Storage O (2) - constant time
    
    After iterating over the entire array, determine which one that has the most edges
    Return that number
    */

    l = edges.length;
    counter = {}
    edgesKeys = []
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            // console.log(edges[i][j]);
            // Create key-value pair
            innerEdge = edge[i][j]
            if (edgesKeys.includes(innerEdge)) {

            }
            
        }
    }

};

edges = [[1,2],[2,3],[4,2]]
findCenter(edges)