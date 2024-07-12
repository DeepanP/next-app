import { getClient } from '../../../../lib/apollo-server';
import { gql, useQuery } from "@apollo/client";

const GET_TODO = gql`
     query getTodo($id: ID!) {
        todo(id: $id){
            text,
            completed
        }
    }
`


export default async function Post({params}) {
    const server = getClient();
    const {data} = await server.query({ query: GET_TODO, variables: { id: params.id} });
    console.log(data);
    return (
      <div>
        <h1>Todo item blog {params.id}</h1>
        <p>
            {data.todo.text}
        </p>
      </div>
    );
  }