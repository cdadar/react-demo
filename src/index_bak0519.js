import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Card from './Card'
import './index.css';


ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>,
  document.getElementById('root')
)

// class AutoFocusInput extends Component{
  
//   componentDidMount () {
//     this.input.focus();
//   }
  
//   render () {
//     return (
//       <div>
//       <input ref={(input)=>this.input=input}/>   
//       </div>
//     )
//   }
// }



//  ReactDOM.render(
//    <AutoFocusInput />,
//    document.getElementById('root')
//  )







// class Index extends Component {
//   constructor () {
//     super()
//     this.state = { isShowClock: true }
//   }

//   handleShowOrHide () {
//     this.setState({
//       isShowClock: !this.state.isShowClock
//     })
//     console.log(this.clock)
//   }

//   render () {
//     return (
//       <div>
//         {this.state.isShowClock ? <Clock ref={(clock)=> this.clock=clock}/> : null }
//         <button onClick={this.handleShowOrHide.bind(this)}>
//           显示或隐藏时钟
//         </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )








// class LikeButton extends Component {

//   constructor() {
//     super();
//     this.state = {
//       name: 'Tomy',
//       isLiked: false
//     }
//   }

//   handleClickOnLikeButton() {
//     console.log(this.state.isLiked)
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//     console.log(this.state.isLiked)
//   }

//   // handleCountClickOnLikeButton() {
//   //   this.setState((preState) => {
//   //     return { count: 0 }
//   //   })
//   //   console.log(this.state.coout)
//   //   this.setState((reState) => {
//   //     return { count: preState.count + 1 }
//   //   })
//   //   console.log(this.state.count)
//   //   this.setState((preState) => {
//   //     return { count: preState.count + 1 }
//   //   })
//   //   console.log(this.state.count)
//   // }


//   render() {
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? '取消' : '点赞'}
//       </button>
//     )
//   }

// }

// class LikeButtonProps extends Component {
//   static defaultProps = {
//     likeText: '取消',
//     unlikeText: '点赞'
//   }
//   constructor() {
//     super()
//     this.state = { isLiked: false }
//   }
//   handleClickOnLikeButton() {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//     if (this.props.onClick) {
//       this.props.onClick()
//     }

//   }
//   // render() {
//   //   const likeText = this.props.likeText || '取消'
//   //   const unlikeText = this.props.unlikeText || '点赞'
//   //   return (
//   //     <button onClick={this.handleClickOnLikeButton.bind(this)}>
//   //       {this.state.isLiked ? likeText : unlikeText}</button>
//   //   )
//   // }
//   render() {
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? this.props.likeText : this.props.unlikeText}
//       </button>
//     )
//   }
// }


// class Title extends Component {
//   handleClickOnTitle(word, e) {
//     console.log('click on title.')
//     console.log(e.target.innerHTML)
//     console.log(this)
//     console.log(word)
//   }
//   render() {
//     return (
//       <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
//     )
//   }
// }

// class Header extends Component {
//   constructor(){
//     super()
//     console.log('construct')
//   }

//   componentWillMount(){
//     console.log('component will mount')
//   }
//   componentDidMount(){
//     console.log('component did mount')
//   }
//   render() {
//    console.log('render')
//     return (
//       <div>
//         <Title></Title>
//         <h2>This is Header</h2>
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <h2>This is main content</h2>
//       </div>
//     )
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <div>
//         <h2>This is footer</h2>
//       </div>
//     )
//   }
// }

// class Index extends Component {
//   constructor() {
//     super()
//     this.state = {
//       likeText: '已赞',
//       unlikeText: '赞'
//     }
//   }

//   handleClickOnChange() {
//     this.setState({
//       likeText: '取消',
//       unlikeText: '点赞'
//     })
//   }
//   render() {
//     // return (
//     //   <div>
//     //     <LikeButtonProps likeText="已赞" unlikeText="赞" />
//     //   </div>
//     // )
//     return (
//       <div>
//         <LikeButtonProps likeText={this.state.likeText} unlikeText={this.state.unlikeText}
//           onClick={() => console.log('Click on like button!')} />
//         <button onClick={this.handleClickOnChange.bind(this)}></button>
//       </div>
//     )
//   }
// }

// const users = [
//   { username: 'Jerry', age: 21, gender: 'male' },
//   { username: 'Tomy', age: 22, gender: 'male' },
//   { username: 'Lily', age: 19, gender: 'female' },
//   { username: 'Lucy', age: 20, gender: 'female' }
// ]


// class IndexTable extends Component {
//   render() {
//     const usersElements = []
//     for (let user of users) {
//       usersElements.push(
//         <div>
//           <div>姓名:{user.username}</div>
//           <div>年龄:{user.age}</div>
//           <div>性别:{user.gender}</div>
//           <hr />
//         </div>

//       )
//     }
//     return (
//       <div>
//         {usersElements}
//       </div>
//     )
//   }
// }

// class IndexTable1 extends Component {
//   render() {
//     return (
//       <div>
//         {users.map((user) => {
//           return (
//             <div>
//               <div>姓名:{user.username}</div>
//               <div>年龄:{user.age}</div>
//               <div>性别:{user.gender}</div>
//               <hr />
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }


// class User extends Component {
//   render() {
//     const { user } = this.props
//     return (
//       <div>
//         <div>姓名:{user.username}</div>
//         <div>年龄:{user.age}</div>
//         <div>性别:{user.gender}</div>
//         <hr />
//       </div>
//     )

//   }
// }

// class IndexUser extends Component {
//   render() {
//     return (
//       <div>
//         {users.map((user, i) => <User key={i} user={user} />)}
//       </div>
//     )
//   }
// }

// class IndexHeader extends Component{
//   constructor(){
//     super()
//     this.state={
//       isShwHeader:true
//     }
//   }
//   handleShowOrHide(){

//   }
// }

