import {
    //  useSearchParams ,
    useParams} from "react-router";
function Index(){
    const param = useParams()
    // const [params] = useSearchParams()
    // let id = params.get('id')
    // let name = params.get('name')
    let twoId = param.id
    // console.log(id,name)
    console.log(twoId)
    return(
        <>
        <div>hello,我是首页</div>
        </>
    )
}
export default Index