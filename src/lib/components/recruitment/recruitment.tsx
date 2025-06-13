'use client'

import styles from './recruitment.module.css'

export type Props = {
    title: string
    description: string
    tech: string
    position: string
}

export function Recruitment(props: Props) {
    return (
        <>
            <div
                className={styles.body}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >

                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>

                <div className={styles.description}>
                    <p>{`${props.description}`}</p>
                </div>

                <div className={styles.tech}>
                    <div>
                        <p>使用する技術：</p>
                    </div>
                    <div>
                        <p>{props.tech}</p>
                    </div>
                </div>

                <div className={styles.position}>
                    <div>
                        <p>募集ポジション：</p>
                    </div>
                    <div>
                        <p>{props.position}</p>
                    </div>
                </div>
            </div>
        </>
    )
}