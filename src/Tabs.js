import React from	'react'

class Tabs extends React.Component {
  constructor(){
    super();
    this.state={
      button:['一','二','三','四'],
      content:['content 1','content 2','content 3','content 4'],
      tabs:3,
      show:0
    }
  }
  handleClick(index){
    console.log('a',index)
  }
  render(){
    let styles = {
      box:{
        width:this.state.tabs*100 + '%',
        marginLeft:this.state.show*100*(-1)+'px',
        overflow:'hidden'
      },
      tab:{
        width:100/this.state.tab + '%',
        float:'left'
      }
    }
    return(
      <div className='tabs'>
        {
          this.state.button.map((item,index) => 
            <div key={index}>
              <input type='button' value={item} onClick={this.handleClick.bind(this,index)} />
            </div>
        )}
        <div className='box' style={styles.box}>
          {
            this.state.content.map((item,index) =>
              <div key={index}>{item}</div>    
          )}
        </div>
      </div>
    )
  }
}
export default Tabs