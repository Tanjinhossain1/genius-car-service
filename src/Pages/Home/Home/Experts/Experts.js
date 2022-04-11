import React from 'react';
import expert1 from '../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../images/experts/expert-6.png'
const Experts = () => {
    const experts =[
        {id:1, name:'tanjin hossain', img:expert1},
        {id:2, name:'mahabub hossain', img:expert2},
        {id:3, name:'noman hossain', img:expert3},
        {id:4, name:'alif hossain', img:expert4},
        {id:5, name:'mahmudur hossain', img:expert5},
        {id:6, name:'rakib hossain', img:expert6},
    ]
    return (
        <div>
            <h1 className='text-center text-primary'> See Experts</h1>
            <div className='service-container'>
                {experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)}
            </div>
        </div>
    );
};
const Expert = ({expert}) =>{
    const {name, img} = expert;
    return(
        <div className='service'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
        </div>
    )
}
export default Experts;