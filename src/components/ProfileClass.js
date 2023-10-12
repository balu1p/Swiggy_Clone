import React from "react";

class ProfileClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };
    }
    async componentDidMount() {
        const data = await fetch("")
    }
    render () {
        return(
            <div>
            <h1>Its ProfileClass Component..:)</h1>
            <h3>{this.props.name}</h3>
            <h4>{this.props.age}</h4>
            <h3>count:{this.state.count}</h3>
            <button  onClick={()=>{
                this.setState({
                    count: 1,
                })
            }}>Count
            </button>
            </div>
        )
    }
}
export default ProfileClass;