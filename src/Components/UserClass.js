import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            
        }
    }
    render() {
        const { name, location } = this.props
        const { count } = this.state

        return (
            <div className='user-card'>
                <h1>count : {count}</h1>
                {/* <h1>count1 : {count1}</h1> */}
                <button onClick={() => {
                    this.setState({
                        count : this.state.count+1
                    })
                }}>inc</button>
                                <button onClick={() => {
                    this.setState({
                        count : this.state.count-1
                    })
                }}>dec</button>
                <h2>Name:{name} </h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}

export default UserClass