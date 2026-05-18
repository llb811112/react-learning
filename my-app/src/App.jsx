const count = 23;
function getName() {
  return 'aaa'
}
const list = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' }
];
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
  
  {/* JSX中实现列表渲染:  map 方法 */}
  {list.map(item => <li key ={item.id}>{item.name}</li>)}    
 </div>
  )
}

export default App
