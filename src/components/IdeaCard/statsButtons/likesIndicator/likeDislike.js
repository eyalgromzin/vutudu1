import React, { Component } from 'react'
import LikeButton from './like/like'
import DislikeButton from './dislike/dislike'

export default class LikeDislike extends Component {
  render() {
    return (
      <div>
        <LikeButton />
        <DislikeButton />
      </div>
    )
  }
}
