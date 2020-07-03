import React from "react"



class LandingPage extends React.Component{


    render(){
        return <div>
            LandingPage
            <button onClick={ () => this.props.handleNextPage(1)}>Ouvir</button>
            </div>
    }
}

export default LandingPage;