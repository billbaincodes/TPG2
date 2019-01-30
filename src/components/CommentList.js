import React from 'react'
import { Button, Icon, Image, Item, Label, Comment, Form, Header } from 'semantic-ui-react'
import Nav from './Nav'

const CommentList = () => (
  <div>
  <Nav />
  <div className="comment-page">
  <Image src="https://adorbs-as-a-service.herokuapp.com/api/v1/400/400h/" />

  <Item.Group divided >
    <Item>
      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>You, a bobsleder!? That I'd like to see! Okay, I like a challenge. Good news, everyone! There's a report on TV with some very bad news! So I really am important? How I feel when I'm drunk is correct? It's a T. It goes "tuh".</Item.Description>
        <Item.Extra>
          <Label>Kitty</Label>
          <Label>Cute</Label>
          <Label>Adorable</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/100/100h/' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/100/100h/' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/100/100h/' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://adorbs-as-a-service.herokuapp.com/api/v1/100/100h/' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </div>
  </div>
)

export default CommentList
