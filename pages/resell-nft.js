/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { NFTContext } from '../context/NFTContext';
import { NFTCard, Button, Input, Loader } from '../components';

const ResellNFT = () => {
  const { createSale, isLoadingNFT } = useContext(NFTContext);
  const router = useRouter();
  const { tokenId, tokenURI } = router.query;
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    // setPrice(data.price);
    setImage(data.image);
  };

  useEffect(() => {
    if (tokenURI) fetchNFT();
  }, [tokenURI]);

  const resell = async () => {
    console.log(price, tokenURI, tokenId);
    await createSale(tokenURI, price, true, tokenId);
    router.push('/');
  };

  // load until the nfts are fetched
  if (isLoadingNFT) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black font-semibold text-2xl">
          Resell NFT
        </h1>

        <Input
          inputType="number"
          title="Price"
          placeholder=""
          handleChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        {image && <img src={image} className="rounded mt-4" width={350} />}

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Re-Sell NFT"
            classStyles="rounded-xl"
            handleClick={resell}
          />
        </div>
      </div>
    </div>
  );
};

export default ResellNFT;
