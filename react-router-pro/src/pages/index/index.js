import { useSearchParams } from "react-router";
function Index(){
    const [params] = useSearchParams()
    let id = params.get('id')
    let name = params.get('name')
    console.log(id,name)
    return(
        <>
        <div>hello,我是首页</div>
        </>
    )
}
export default Index