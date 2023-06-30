import './App.css';
import styled from 'styled-components'
const App = () => {
  const Form = styled.h3`
    text-align: center,
    font-weight: bolder
  `;
  const Wraper = styled.section`
    width: 330px;
    padding: 2rem 0 1rem 0;
    margin: 50px auto;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 10px 20px 35px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    h1{
      font-size: 2rem;
      color: #07001f;
    }
    p{
      margin-bottom: 1.7rem;
    }
    form input{
      width: 85%;
      outline: none;
      border: none;
      background: #dfe9f5;
      padding: 12px 14px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    .recover{
      text-align: right;
      font-size: 0.8rem;
      margin: 0.2rem 1.7rem 0 0;
    }
    .recover a{
      text-decoration: none;
      color: #07001f;
    }
    button{
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 8px 0;
      border-radius: 5px;
      outline: none;
      border: none;
      width: 85%;
      background: tomato;
      color: #fff;
      cursor: pointer;
    }
    button:hover{
      // background: rgba(122, 30, 30, 0.767);
      box-shadow: 0px 10px 20px #ccc;
      transform: translateY(-2px); 
    }
    .or{
      font-size: 0.8rem;
      margin-top: 1.5rem;
    }
    .icons i{
      color: #07001f;
      padding: 00.8rem 1.5rem;
      border-radius: 10px;
      margin-left: .9rem;
      font-size: 1.5rem;
      cursor: pointer;
      border: 2px solid #dfe9f5;
    }
    .icons &:hover{
      color: #fff !important;
      background: #07001f;
      transition: 1s;
    }
    .icons i:first-child{
      color: green;
    }
    .icons i:last-child{
      color: blue;
    }
    .not-member{
      font-size: 0.8rem;
      margin-top: 1.4rem;
    }
    .not-member a{
      color: tomato;
      text-decoration: none;
    }
    a:hover{
      text-decoration: underline;
    }
  `;
  return (
    <Wraper>
    <Form>Form using styled Component</Form>
    <h1>Hello Again!</h1>
    <p>Welcome back you've <br/> been missed!</p>
    <form>
      <input type="text" placeholder="Enter username"/>
      <input type="password" placeholder="Password"/>
    <closeform></closeform></form>
    <button>Sign in</button>
  </Wraper>
  )
}

export default App;
