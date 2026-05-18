const count = 23;
function getName() {
  return 'aaa'
}
function App() {
  return (
 <div>
  this is app
  {/* 1.使用引号传递字符串 */}
  {'111'}
  {/* 2.使用JavaScript变量` */}
  {count}
  {/* 3.函数调用和方法调用 */}
  {getName()} {getName().toUpperCase()}
  {/* 4.使用js对象 */}
  <div style={{color:'red'}}>111</div>

 </div>
  )
}

export default App
