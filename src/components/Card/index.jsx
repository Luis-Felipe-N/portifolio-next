import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { Tag } from '../Tag'

import {BiCodeAlt, BiLink} from 'react-icons/bi'
import AnimationUp from '../AnimationUp'
import { InfoProjectModal } from '../InfoProjectModal'
import { useState } from 'react'

export function Card({project}) {
    const [ infoProjectModalIsOpen, setInfoProjectModalIsOpen ] = useState(false)

    function handleOpenModal() {
        setInfoProjectModalIsOpen( true )
    }

    function handleCloseModal(){
        setInfoProjectModalIsOpen( false)
    }

    return (
        <>
            <AnimationUp>
                <article className={styles.cardContainer}>
                <Image 
                    src={project.thumb.url}
                    alt={project.title}
                    title={project.title}
                    width={300}
                    height={200}
                    objectFit="cover"
                />
                <div className={styles.info}>
                    <h2>{project.title}</h2>

                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description}} />

                    <button 
                        onClick={ handleOpenModal }
                    >
                        Ver mais...
                    </button>
                </div>
            </article>
            </AnimationUp>
            { infoProjectModalIsOpen && (
                <InfoProjectModal 
                    idProject={project.id}
                    isOpen={infoProjectModalIsOpen}
                    onRequestClose={handleCloseModal}
                />
            )}
        </>
    )
}