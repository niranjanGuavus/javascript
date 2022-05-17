
function traverseMatrix(matrix, visited, x, y, n, m){
  if(x<0 || y<0 || x>= n || y>=m || matrix[x][y]===0 || visited[x][y]=== true) {
    return ;
  }

  visited[x][y] = true;
  traverseMatrix(matrix, visited, x-1, y, n, m);
  traverseMatrix(matrix, visited, x+1, y, n, m);
  traverseMatrix(matrix, visited, x, y+1, n, m);
  traverseMatrix(matrix, visited, x, y-1, n, m);
}


function findNoOfIsland(matrix,n,m){
  let result =0;
  // create the ajdust matrix
  let visited = new Array(n);
  for(let i=0; i<n; ++i){
    visited[i] = new Array(m);
    for(let j=0; j<m; j++){
      visited[i][j] = false;
    }
  }

  //traverse all the corner items
  for(let i=0; i<n; ++i){
    for(let j=0; j<m; j++){
      if((i===0 || j===0 || i=== n-1 || j=== m-1) && (matrix[i][j] ===1) && visited[i][j]==false){
        traverseMatrix(matrix, visited, i, j, n, m);
      }
    }
  }

  //travese the matrix to  find islands

  for(let i=0; i<n; ++i){
    for(let j=0; j<m; j++){
      if(matrix[i][j] ===1 && visited[i][j]===false){
        ++result;
        traverseMatrix(matrix, visited, i, j, n, m);
      }

    }
  }
  console.log(result);
  return result;
}



// Given size of Matrix
  let N = 5, M = 8;

  // Given Matrix
  let matrix = [ [ 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 0, 1, 1, 1, 1, 0, 0, 1 ],
    [ 0, 1, 0, 1, 0, 0, 0, 1 ],
    [ 0, 1, 1, 1, 1, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1 ] ];
console.log(findNoOfIsland(matrix, N,M));