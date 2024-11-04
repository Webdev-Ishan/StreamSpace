import React from 'react';
import Playvedio from '../../Components/Playvedio/Playvedio';
import Recomended from '../../Recomendevedios/Recomended';
import { useParams } from 'react-router-dom';

const Vedio = () => {
  const { categoryId, vedioId } = useParams();
  
  return (
    <div className='bg-black pl-[2%] pr-[2%] pt-5 pb-5 flex justify-between flex-wrap' id={vedioId}>
      <Playvedio vedioId={vedioId} />
      <Recomended categoryID={categoryId} />
    </div>
  );
}

export default Vedio;
