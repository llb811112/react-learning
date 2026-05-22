import './index.css';
const spans = {
    color:'blue',
    fontSize:'20px',
    fontWeight:'bold'
};
function APP () {
return (
    <div>
    <span className="app"> 111</span>
    <span style={spans}> 222</span>
    </div>
)
}

export default APP;