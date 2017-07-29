import React from 'react'

class Shop extends React.Component{
  constructor(){
    super()
    this.state = {
      data:[
        {name:'烟',num:10,price:50},
        {name:'酒',num:10,price:100},
        {name:'糖',num:10,price:20},
        {name:'茶',num:10,price:500}
      ]
    }
  }
  handleNum(index,num){
    let data = this.state.data
    data[index].num = (data[index].num + num)<0 ? 0 : data[index].num + num
    this.setState({
      data:data
    })
  }
  handleDel(index){
    let i = index
    // let data = this.state.data
    // data.splice(index,1)
    this.setState({
      data:this.state.data.filter((item,index) => index!==i)
    })
    // console.log(this.state.data[index])
  }
  render(){
    let sum = 0
    this.state.data.forEach(item => sum +=item.num*item.price)
    return(
      <div>
      {
        this.state.data.length===0 ? '购物车已经空空的' :
        <div>
          <table style={{width:'100%',textAlign:'center'}}>
          <thead>
            <tr>
              <th>名称</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((item,index) => 
            <tr key={Math.random()}>
              <td>{item.name} </td>
              <td><input type='button' value='+1' onClick={this.handleNum.bind(this,index,+1)} />&nbsp;&nbsp;&nbsp;{item.num}&nbsp;&nbsp;&nbsp;<input type='button' value='-1' onClick={this.handleNum.bind(this,index,-1)} /></td>
              <td>{item.price} </td>
              <td>{item.num*item.price} </td>
              <td><input type='button' value='删除' onClick={this.handleDel.bind(this,index)} /></td>
            </tr>
            )}
          </tbody>
          </table>
          <span>总计：{sum}</span>
        </div>    
      } 
      </div>         
    )
  }
}
export default Shop