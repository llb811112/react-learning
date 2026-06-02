// 在子组件中调用父组件中的函数并传递实参;-- 实现子传父
function Child(props){
  return(
    <div>
      <button onClick={()=>props.ClickHandle('我是中国人,我是React开发者')}>点击</button>
    </div>
  )
}
function APP(){
 const ClickHandle = (text) =>{
  alert(text)
 }
return(
  <div>
    <Child ClickHandle={ClickHandle}/>
  </div>
)



}
export default APP;