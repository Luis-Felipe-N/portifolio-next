import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import {BiCodeAlt, BiLink} from 'react-icons/bi'

export function Card({project}) {
    console.log(project)
    return (
        <article className={styles.cardContainer}>
            <Image 
                src={project.thumb.url}
                alt={project.title}
                width={300}
                height={200}
                objectFit="cover"
            />
            <div className={styles.info}>
                <h2>{project.title}</h2>

                <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description}} />
                
                <div className={styles.btns}>
                    <Link href={project.preview}>
                        <a target="_blank" rel="noreferrer" >Preview <BiLink /></a>
                    </Link>
                    <Link href={project.code}>
                        <a target="_blank" rel="noreferrer">Code <BiCodeAlt /></a>
                    </Link>
                </div>
                <div className={styles.languages}>
                    {project.languages}
                </div>
            </div>
        </article>
    )
}