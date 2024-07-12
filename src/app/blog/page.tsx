import Link from "next/link";
import { getClient } from '../../lib/apollo-server';
import { gql } from '@apollo/client';


const GET_TODOS = gql`
  query  {
    todos {
      id
      text
    }
  }
`;

export default async function Blog() {
  await new Promise((resolve)=>setTimeout(resolve,5000));
  //await new Promise((reject)=>{throw new Error('error on running')});
  const server = getClient();
  const { data } = await server.query({ query: GET_TODOS });
  return (
    <div>
      <h1>Todo App Blog</h1>
      <Link href={'./post'}>post link</Link>
        {data.todos.map(item=>(<p>
          {item.text} - 
          <Link href={`./post/${item.id}`}>goto</Link>
        </p>))}
    </div>
  );
}