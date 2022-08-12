import styled from 'styled-components'

export const Container = styled.div `
  background: #3936C0;
  width: 414px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: 50px;
  }
  textarea {
    width: 342px;
    height: 138px;
    margin-block: 50px 25px;
    padding: 5px;
    resize: none;
    border-radius: 5px;
  }
`

export const Button = styled.button`
  background: ${props => props.isOn ? '#000' : 'gray'} ;
  border-radius: 10px;
  width: 342px;
  height: 64px;
  color: ${props => props.isOn ? 'white' : '#000'};
  border: none;
  font-size: 17px;
  cursor: pointer;
`
export const List = styled.ul `
  list-style: none;
  li {
    background-color: rgba(255,255,255, 0.14);
    width: 342px;
    height: 60px;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 5px;
  }
`