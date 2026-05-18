const isShow = true;
function App() {
  return (
    <div>
    {/* 1.通过逻辑与来控制某个元素的显示和隐藏; */}
     { isShow && <div> 我显示出来了</div>}
      this is app
    {/* 2.三元运算符 来实现两个元素的分支切换显示; */}
    { isShow ? <div>我显示出来了</div>: <div>我被隐藏了</div>}
    </div>
  );}
  export default App;