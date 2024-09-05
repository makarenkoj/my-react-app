import {useState} from 'react';

function ChangeComponent(){

    const [name, setName] = useState('Guest'),
          [quantity, setQuantity] = useState(0),
          [comment, setComment] = useState(''),
          [payment, setPayment] = useState(''),
          [shipping, setShipping] = useState('Delivery');

    function handleNameChange(event){
        setName(event.target.value);
    };

    function handleQuantityChange(event){
      setQuantity(event.target.value);
    };

    function handleCommentChange(event){
      setComment(event.target.value);
    };

    function handlePaymentChange(event){
      setPayment(event.target.value);
    };

    function handleShippingChange(event){
      setShipping(event.target.value);
    };

    return( <div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type='number'/>
                <p>Name: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value=''>Select an option</option>
                    <option value='Visa'>Visa</option>
                    <option value='Master Card'>Master Card</option>
                    <option value='Giftcard'>Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type='radio' value='Pick Up' checked={shipping === 'Pick Up'} onChange={handleShippingChange}/>
                    Pick Up
                </label>
                <label>
                    <input type='radio' value='Delivery' checked={shipping === 'Delivery'} onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p> Shipping: {shipping}</p>
            </div>)

}

export default ChangeComponent
