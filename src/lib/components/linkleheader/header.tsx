'use client'

import { ReactNode } from 'react'
import styles from './header.module.css'
import Image from 'next/image'

type Props = {
    children?: ReactNode
}

export function Linkleheader(props?: Props) {

    return (
        <>
            <div className={styles.headerBox}>
                <Image src='/logo.png' alt='Linkle icon' width={160} height={65} />

                <div className={styles.body}>
                    {props?.children}
                </div>
            </div>

        </>
    )
}