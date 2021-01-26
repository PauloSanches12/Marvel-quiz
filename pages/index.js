import styled from 'styled-components'
import db from '../db.json'
import Widget from './src/components/Widget'
import Footer from './src/components/Footer'
import GitHubCorner from './src/components/GitHubCorner'
import QuizBackground from './src/components/QuizBackground'
import QuizLogo from './src/components/QuizLogo'
import Head from 'next/head'

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Marvel Quiz</title>
        <meta property="og:image" key="title" content={db.bg}/>
      </Head>
      <QuizContainer>
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
