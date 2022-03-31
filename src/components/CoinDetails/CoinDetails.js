import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data);
                setLoading(false);
            });
    }, [id]);
    const {
        name,
        image,
        market_cap_rank: market,
        country_origin: origin,
        community_score,
        developer_score,
    } = coin;

    console.log(coin);
    return (
        <>
            {
                loading ? <Spinner /> :
                    <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                        <div className='h-full grid grid-cols-1 md:grid-cols-2 md:justify-items-center items-center gap-4 content-center md:justify-around'>
                            <div className='order-2 md:order-1'>
                                <h1 className='text-3xl'>General Info: </h1>
                                <hr />
                                <h1>Coin Name: {name}</h1>
                                <h1>Market Cap Rank: {market}</h1>
                                <h1>Origin: {origin ? origin : 'not found'}</h1>
                                <br />
                                <h1 className='text-3xl'>Scores: </h1>
                                <hr />
                                <h1>Community Score: {community_score}</h1>
                                <h1>Developer Score: {developer_score}</h1>
                                <h1>Origin: {origin ? origin : 'not found'}</h1>
                            </div>
                            <div className='flex justify-center items-center order-1 md:order-2'>
                                <img src={image?.large} alt="coinImg" />
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default CoinDetails;