import React from 'react'
import { useState } from 'react'

import Image from './img/people.svg'
import { Button, Container, List } from './styles'

function App() {
  const [comment, setComment] = useState()
  const [allComment, setAllComment] = useState([])

  function clickButton() {
    const allPreiousComment = [...allComment, comment]
    setAllComment(allPreiousComment)
  }

  function typingTextarea(event) {
    setComment(event.target.value)
  }
  return (
    <Container>
      <img src={Image} alt="é a imagem" />
      <textarea placeholder='Escreva um comentário..' onChange={typingTextarea}></textarea>
      <Button isOn={comment} onClick={clickButton}>Comentar</Button>

      <List>
        {allComment.map(comment => (
          <li key={comment}>{comment}</li>
        ))}
      </List>
    </Container>
  )
}

export default App
