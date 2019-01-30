import React, {Component} from 'react'
import { Button, Icon, Image, Item, Label, Comment, Form, Header } from 'semantic-ui-react'
import Nav from './Nav'

class CommentList extends Component {

  constructor() {
    this.super()
    this.state = {
      comments: {}
    }
  }

  render(){
    return(
      <div>
      <Nav />
      <div className="comment-page">
      <Image src="https://adorbs-as-a-service.herokuapp.com/api/v1/400/400h/" />
    
      <Item.Group divided >
        <Item>
          <Item.Content>
            <Item.Header as='a'>January 23, 2019</Item.Header>
            <Item.Description>You, a bobsleder!? That I'd like to see! Okay, I like a challenge. Good news, everyone! There's a report on TV with some very bad news! So I really am important? How I feel when I'm drunk is correct? It's a T. It goes "tuh".</Item.Description>
            <Item.Extra>
              <Label>#kitty</Label>
              <Label>#cute</Label>
              <Label>#adorable</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>
    
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
    
        <Comment>
          <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/420/420h/' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
    
        <Comment>
          <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/420/420h/' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          </Comment.Content>
        </Comment>
    
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='right' icon='write' />
        </Form>
      </Comment.Group>
      </div>
      </div>
    )
  }

}

export default CommentList


//Temp comments
let comments = [
  {comment1: 
    {
      image: 'http',
      author: 'Me',
      date: '12-29-97',
      text: 'Hello there friendo'
    }
  }
]