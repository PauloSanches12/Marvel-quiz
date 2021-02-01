import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();
    
    router.push(`/quiz?name=${name}`)
    console.log("Funcionou!")
  }

  const handleValue = ({ target: {value} }) => {
    setName(value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Marvel Quiz</title>
        <meta property="og:image" key="image" content={db.bg} />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Os Vingadores</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={SubmitForm}>
              <Input name="nomeDoUsuario" placeholder="Seu nome" onChange={handleValue} value={name} />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Os Vingadores</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Thor, vingador mais forte.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Os Vingadores</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Thor, vingador mais forte.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PauloSanches12" />
    </QuizBackground>
  )
}
