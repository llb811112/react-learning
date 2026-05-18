const isShow = true;
const article = 1; 
function articleType (){
    if (article === 1) {
        return <span style={{color:'red'}}>单图</span>
    }
    else if (article === 2) {
        return '多图'
    }
}
function App() {
  return (
    <>
    {/* 1.通过逻辑与来控制某个元素的显示和隐藏; */}
     { isShow && <div> 我显示出来了</div>}
      this is app
    {/* 2.三元运算符 来实现两个元素的分支切换显示; */}
    { isShow ? <div>我显示出来了</div>: <div>我被隐藏了</div>}

    {/* JSX中实现复杂条件渲染; */}
    { articleType()}

    </>
  );}
  export default App;