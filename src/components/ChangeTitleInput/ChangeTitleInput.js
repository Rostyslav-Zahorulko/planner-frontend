import styles from './ChangeTitleInput.module.css'

const ChangeTitleInput = ()=>(
  <label className={styles.label}>
  <input
    className={styles.input}
    placeholder=" "
    onChange='{handleInputChange}'  
    type="text"
    required
  />
  <span className={styles.headline}>The name of the  "title"</span>
</label>
)
export default ChangeTitleInput

