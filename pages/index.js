import styled from 'styled-components';
import Link from 'next/link'

export default Index = () => (
  <div>
    <Title>React + Styled components</Title>

    <ul>
      <li>
        <Link href="/fetch/page">
          <a>React App</a>
        </Link>
      </li>
      <li>
        <Link href="/static/page">
          <a>Static</a>
        </Link>
      </li>
      <li>
        <Link href="/server-side/page">
          <a>Server Side</a>
        </Link>
      </li>
      <li>
        <Link href="/static-props/page">
          <a>Static Props</a>
        </Link>
      </li>
    </ul>
  </div>
);

const Title = styled.h1`
  color: red;
`;
