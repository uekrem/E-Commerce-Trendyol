import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBasket, countDecrease, basketAdd } from '../stores/personalSpaces';
import { useDispatch } from 'react-redux';

export function BasketCard(props) {

  let { box } = props;
  let data = box.data
  const dispatch = useDispatch();

  async function deleteCard(){
    dispatch(deleteBasket(box.id))
  }

  async function countChange(flag){
    if (!flag)
      dispatch(countDecrease(box));
    else
      dispatch(basketAdd(box));
  }
  
  return (
    <div className='basketCard'>
        <div className="badge"> 
          <IconButton onClick={deleteCard} sx={{color:"rgb(241, 122, 26)",transform:"scale(0.9)",boxShadow: "0 2px 7px #dfdfdf"}} aria-label="favorite" size='large'><DeleteIcon /></IconButton>
        </div>
        <div id="basketCardImg">
            <img src={data.image} alt=''></img>
        </div>
        <div id="basketInfo">
            <h4>{data.title}</h4>
            <div className="product-bottom-details">
                <div className="product-price" style={{color:'black'}}>{data.price}$</div>
            </div>
            <div id="counter">
              <button onClick={() => countChange(0)}>-</button>
                {box.count}
              <button onClick={() => countChange(1)}>+</button>
            </div>
        </div>
    </div>
  )
}
