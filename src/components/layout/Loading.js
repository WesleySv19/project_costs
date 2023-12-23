import styles from './Loading.module.css'
import loading from '../../assets/loading.svg'

const Loading = () => {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt='Carregando...'/>
    </div> 
  )
}

export default Loading