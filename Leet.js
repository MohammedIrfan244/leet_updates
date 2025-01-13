var uniquePaths = function(m, n) {
  const mat = []

    for(let i = 1; i <= m; i++){
    mat.push([1])
  }

  for(let i = 1; i < n; i++){
    mat[0].push(1)
  }

  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      mat[i][j] = mat[i-1][j] + mat[i][j-1]
    }
  }

  return mat[m-1][n-1]

};

console.log(uniquePaths(5,8))