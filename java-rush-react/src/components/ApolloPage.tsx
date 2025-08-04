import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';
// import { setContext } from "@apollo/client/link/context";

// const setAuthorizationLink = setContext((request, previousContext) => ({
//   headers: {authorization: "1234"}
// }));

// const asyncAuthLink = setContext(
//   request =>
//     new Promise((success, fail) => {
//       // do some async lookup here
//       setTimeout(() => {
//         success({ token: "async found token" });
//       }, 10);
//     })
// );

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

const getCharacters = gql`
query getCharacters ($name: String!){
  characters(page: 2, filter: { name: $name }) {
    info {
      pages
    }
    results {
      name
      image
      id
    }
  }
}`
const ADD_CHARACTER = gql`
mutation AddCharacter ($name: String!){
  addCharacter(name : $name) {
      id
      name
      image
  }
}`

const ApolloPage = () => {
  const [name, setName] = useState('Morty')
  const { loading, error } = useQuery(getCharacters, {
    variables: { name: name}
  });

  const [addCharacter, {loading:mutationLoading, error:mutationError}] = useMutation(ADD_CHARACTER);

  const selectName =(name: string) => {
    setName(name)
    console.log(name);
  }

  const sendCharacter = () => {
    addCharacter({variables: {
      name: name
    }})
  }


  if (loading || mutationLoading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error : {error ? error.message : mutationError?.message}</p>;

  return <>
     <select name="" id="" onChange={(e) => selectName(e.target.value)} >
      <option value="Morty">Morty</option>
      <option value="Rick">Rick</option>
     </select>
     <button onClick={sendCharacter}>+++</button>
     {/* {data && data.characters.results.map(item => <Character key={item.id} character={item} />)} */}
  </>
}

export default ApolloPage