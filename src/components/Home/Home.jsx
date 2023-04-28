import Apilist from '../Apilist/Apilist';

export default function Home(props) {

    return <>
        <Apilist elements={props.elements} />
    </>
}