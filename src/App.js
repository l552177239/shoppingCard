import React from 'react'

class App extends React.Component{
	constructor(){
		super()

		this.state = {
			num:0,
			show:false
		}
	}
	handleInc(num){
		this.setState({
			num: (this.state.num + num)<0 ? 0 : this.state.num + num
		})
	}
	handleClick(){
		this.setState({
			show:!this.state.show 
		})
	}
	render(){
		console.log(this.state.num)
		return(
			<div>
      	<span style={{textAlign:'center'}}>{this.state.num}</span><br />
      	<input type='button' value='+1' onClick={this.handleInc.bind(this,1)} />
      	<input type='button' value='-1' onClick={this.handleInc.bind(this,-1)} /><br />
    		<input type='button' value={this.state.show ? '显示' : '好人'} onClick={this.handleClick.bind(this)} />
    			<p onClick={this.handleClick.bind(this)} >{this.state.show ? '出来混总是要还的' : '是你毁了一个我当好人的机会'}</p>
    	</div>    
  	)
	}
}
export default App