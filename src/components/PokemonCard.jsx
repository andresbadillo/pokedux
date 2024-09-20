import Meta from 'antd/es/card/Meta';
import {Card} from  'antd';
import { StarOutlined } from '@ant-design/icons';
import './PokemonList.css'

const PokemonCard = ({ name, image, abilities }) => {
    return <Card
        title={name}
        cover={<img src={image} alt={name}/>}
        extra={<StarOutlined />}
    >
        <Meta description={abilities.map(ability => <li key={ability.ability.name} >{ability.ability.name}</li>)}

        />
    </Card>
}

export default PokemonCard;