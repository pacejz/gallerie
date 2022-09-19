import GButton from '../components/atoms/button';
import { paintings } from '../static/data.json';
import { useState } from 'react';
import Link from 'next/link';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  const authors = paintings.map(({author}) => author);
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Gallery Monet" />
      <div>
        <Link href='home'>Home</Link>
      </div>
      <div>
        <Link href='collection'>Collection</Link>
      </div>
      <div>
        <Link href='about'>About me</Link>
      </div>
      <div>
        <Link href='news'>News</Link>
      </div>
      <div>
        <Link href='contact'>Contact</Link>
      </div>
      <div>
        <Link href='tictactoe'>tictactoe</Link>
      </div>
      <ul>
        {
          authors.map((auth) => (
            <li key={auth}>{auth}</li>
          ))
        }
      </ul>
      <GButton onClick={handleClick}>Like ({likes})</GButton>
    </div>
  );
}