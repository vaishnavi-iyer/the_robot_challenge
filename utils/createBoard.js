function createBoard(size) {
  var board = []
  for(var i=0;i<size;i++)
  {
    var tempBoard =[]
    for(var j=0;j<size;j++){
      tempBoard.push(0)
    }
    board.push(tempBoard)
  }
  return board
}

module.exports = createBoard