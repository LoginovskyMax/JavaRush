import { useActionState } from 'react';
import { useGetPokemonQuery } from '../store/slices/apiSlice';
import './style.scss'
import Loader from './loader';

async function getData() {
    try {
        await new Promise( resolve => setTimeout(resolve, 2000))
        return {succsess: true, mesaage: 'Download complete'}
    }
    catch (err:unknown) {
        console.log(err);
        return {succsess: false, mesaage: 'Download aborted'}
    }
}

const Query = () => {
    const [data, uploudData] = useActionState(getData, null)
    const {data: pokemonData, isError, isLoading, refetch} = useGetPokemonQuery('pikachu')
    return (
        <div>
            {isError && <p>Ошибка</p>}
            {isLoading  ? <Loader /> :  <p>{pokemonData?.name}</p>}
            <button onClick={refetch}>refetch</button>
            <button onClick={uploudData}>get data</button>
            <p>{data?.mesaage}</p>
        </div>
    )
}

export default Query