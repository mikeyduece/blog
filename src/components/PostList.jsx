// Dependencies
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { fetchPosts }       from '../actions'

// Components

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        PostList
      </div>
    )
  }
}

// const PostList = () => {
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     setPosts(fetchPosts())
//   }, [])
//
//   return(
//     <div>
//       PostList
//     </div>
//   )
// }

export default connect(null, { fetchPosts })(PostList)