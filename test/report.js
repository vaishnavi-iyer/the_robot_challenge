import test from 'tape'
import report from '../utils/report'

test('report', function (t) {

  const robot = {"positionX":3,"positionY":2,"direction":180}

  t.equal('Output: 3, 2, South', report(robot), 'Returns the correct Output string')
 
  t.end()
})
