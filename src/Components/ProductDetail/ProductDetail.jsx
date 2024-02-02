import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail  } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'



const DetailProduct=() =>{
    const { id } = useParams();
    const productDetail = useSelector((state) => state.productDetail);
     const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch]);


    console.log(productDetail);
    
 return (

     <div className={styles.container}>
        <h1 className={styles.title}>{productDetail.name}</h1>
        <img src={productDetail.image} alt={productDetail.name} style={{ width: '90%' }} />
        <p className={styles.description}> Descripcion: {productDetail.description}</p>
        <p className={styles.description}>Categoría: {productDetail.category}</p>
        <p className={styles.price}>Precio: ${productDetail.price}</p>
        <p className={styles.category}>Stock: {productDetail.stock} unidades</p>
   </div>
    );
}


export default DetailProduct;
