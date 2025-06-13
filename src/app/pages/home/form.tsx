'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { Recruitment } from '@/lib/components/recruitment/recruitment'
import { InputText } from 'primereact/inputtext'
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'

export default function Form() {
    return (
        <>
            <div className={styles.masterBox}>
                <Linkleheader>

                </Linkleheader>

                <div className={styles.body}>
                    <div className={styles.searchArea}>
                        <div className={styles.searchBox}>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText type="text" placeholder='キーワードを入力' className={styles.keyWord} />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText type="text" placeholder='使用する技術' className={styles.keyWord} />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='連絡ツール' className={styles.noIcon} />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='募集ポジション' className={styles.noIcon} />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='募集期間' className={styles.noIcon} />
                                </span>
                            </div>

                            <div className={styles.btnArea}>
                                <Button
                                    label='条件のクリア'
                                    outlined
                                    className={styles.clearBtn}
                                />

                                <Button
                                    label='検索'
                                    className={styles.searchBtn}
                                />

                            </div>

                        </div>
                    </div>
                    <div className={styles.recruitArea}>

                        <div className={styles.recWrap}>
                            <div className={styles.recBox}>
                                <Recruitment
                                    title='ハッカソンのチームメンバー募集'
                                    description={
                                        `6月21日にあるサポーターズ主催のハッカソンに参加する予定です。
                                                作るものはまだ決めていないので、みんなでアイデアを出しながら制作したいと思って
                                                います。…
                                                `}
                                    tech='未定'
                                    position='フロントエンド'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}