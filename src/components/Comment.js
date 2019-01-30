import React from 'react'
import { Button, Icon, Image, Item, Label, Comment, Form, Header } from 'semantic-ui-react'


const Component = () => {
  return(
    <Comment>
      <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/420/420h/' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

export default Component