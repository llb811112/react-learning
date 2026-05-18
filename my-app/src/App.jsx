// React 基础事件绑定;

function APP(){
    function HandleClick(){    
    alert("Button Clicked");
}   
     function HandleMouseOver(e){
        console.log("Mouse Over",e);
     }
     function ClickHandle(name){
        console.log("Button Clicked",name);
     }
    return(
        <div>
    {/* React 基础事件绑定; */}
    <button onClick={HandleClick}>点击我</button>
    {/*2. 使用事件对象参数 */}
    <button onMouseOver={HandleMouseOver}>鼠标悬停我</button>
    {/*3. 传递自定义参数; */}
    <button onClick = {()=>ClickHandle('我是中国人,我是React开发者')}>传递参数</button>
        </div>

    )
}
export default APP;