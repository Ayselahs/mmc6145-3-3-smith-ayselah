import styles from './style.module.css'

export default function BookPreview({
  title,
  authors,
  thumbnail,
  previewLink
}) {


  return (
    <a target="_BLANK" href={previewLink} style={{ textDecoration: 'none' }} className={styles.preview}>
      <img
        src={thumbnail ? thumbnail : "https://via.placeholder.com/128x190?text=NO COVER"}
        alt={title} />
      <div>
        <p><strong>{title}</strong></p>
        {authors && <p>By: {authors.join(", ").replace(/, ([^,]*)$/, ', and $1')}</p>}
      </div>
    </a>
  )
}