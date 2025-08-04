'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { Recruitment } from '@/lib/components/recruitment/recruitment'
import { InputText } from 'primereact/inputtext'
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { useEffect, useReducer } from 'react'
import { defaultState, reducer } from './reducer'
import { Action } from './action'
import { Progress } from '@/lib/components/progress/progress'

export default function Form() {
    const router = useRouter()
    const [state, dispatche] = useReducer(reducer, undefined, defaultState)

    useEffect(() => {
        Action.getPost(dispatche, state.keyword, state.techs, state.position)
    }, [])

    return (
        <>
            <div className={styles.masterBox}>
                <Linkleheader>
                    <div className={styles.header}>
                        <div className={styles.insideHeaderBox}>
                            <p>ホーム</p>
                        </div>
                        <div className={styles.insideHeaderBox}>
                            <p>ブックマーク</p>
                        </div>
                        <div className={styles.insideHeaderBox}>
                            <i
                                className='pi pi-user'
                                onClick={() => {
                                    router.push('/pages/myPage')
                                }}
                            ></i>
                        </div>
                    </div>
                </Linkleheader>

                <div className={styles.body}>
                    <div className={styles.searchArea}>
                        <div className={styles.searchBox}>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText
                                        type="text"
                                        placeholder='キーワードを入力'
                                        className={styles.keyWord}
                                        value={state.keyword ?? ''}
                                        onChange={(e) => {
                                            Action.editForm(dispatche, 'keyword', e.target.value)
                                        }}
                                    />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText
                                        type="text"
                                        placeholder='使用する技術'
                                        className={styles.keyWord}
                                        value={state.techs}
                                        onChange={(e) => {
                                            Action.editForm(dispatche, 'techs', e.target.value)
                                        }}
                                    />
                                </span>
                            </div>

                            {/* <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText
                                        type="text"
                                        placeholder='連絡ツール'
                                        className={styles.noIcon}
                                    />
                                </span>
                            </div> */}

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText
                                        type="text"
                                        placeholder='募集ポジション'
                                        className={styles.keyWord}
                                        value={state.position}
                                        onChange={(e) => {
                                            Action.editForm(dispatche, 'position', e.target.value)
                                        }}
                                    />
                                </span>
                            </div>

                            {/* <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText
                                        type="text"
                                        placeholder='募集期間'
                                        className={styles.noIcon}
                                    />
                                </span>
                            </div> */}

                            <div className={styles.btnArea}>
                                <Button
                                    label='条件のクリア'
                                    outlined
                                    className={styles.clearBtn}
                                    onClick={() => {
                                        Action.editForm(dispatche, 'clear', undefined)
                                    }}
                                />

                                <Button
                                    label='検索'
                                    className={styles.searchBtn}
                                    onClick={() => {
                                        Action.getPost(dispatche, state.keyword, state.techs, state.position)
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                    <div className={styles.recruitArea}>

                        {state.posts.map((post) =>
                            <div key={post.id} className={styles.recWrap}>
                                <div className={styles.recBox}>
                                    <Recruitment
                                        title={post.title}
                                        description={post.mainText}
                                        tech={post.techs}
                                        position={post.position}
                                    />
                                </div>
                            </div>)}
                    </div>
                </div>
            </div >
            {state.isWaiting &&
                <Progress />
            }
        </>
    )
}