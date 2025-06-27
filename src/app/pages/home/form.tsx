'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { Recruitment } from '@/lib/components/recruitment/recruitment'
import { InputText } from 'primereact/inputtext'
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { defaultState, reducer } from './reduser'
import { useReducer } from 'react'
import { Action } from './action'

export default function Form() {
    const router = useRouter()
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)


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
                                    <InputText type="text" placeholder='キーワードを入力' className={styles.keyWord} 
                                    value={state.keyword}
                                    onChange={(e) => Action.editForm(dispatch, 'keyword', e.target.value)}
                                    />

                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <i className='pi pi-search' />
                                    <InputText type="text" placeholder='使用する技術' className={styles.keyWord} 
                                    value={state.techs}
                                    onChange={(e) => Action.editForm(dispatch, 'techs', e.target.value)}
                                    />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='連絡ツール' className={styles.noIcon} 
                                    value={state.tool}
                                    onChange={(e) => Action.editForm(dispatch, 'tool', e.target.value)}
                                    />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='募集ポジション' className={styles.noIcon} 
                                    value={state.position}
                                    onChange={(e) => Action.editForm(dispatch, 'position', e.target.value)}
                                    />
                                </span>
                            </div>

                            <div className={styles.searchWord}>
                                <span className='p-input-icon-left' style={{ width: '80%' }} >
                                    <InputText type="text" placeholder='募集期間' className={styles.noIcon} 
                                    value={state.expiration}
                                    onChange={(e) => Action.editForm(dispatch, 'expiration', e.target.value)}
                                    />
                                </span>
                            </div>

                            <div className={styles.btnArea}>
                                <Button
                                    label='条件のクリア'
                                    outlined
                                    className={styles.clearBtn}
                                    onClick={() => {
                                        dispatch({ type: 'EDIT_FORM', payload: { targetName: 'keyword', value: '' } })
                                        dispatch({ type: 'EDIT_FORM', payload: { targetName: 'techs', value: '' } })
                                        dispatch({ type: 'EDIT_FORM', payload: { targetName: 'tool', value: '' } })
                                        dispatch({ type: 'EDIT_FORM', payload: { targetName: 'position', value: '' } })
                                        dispatch({ type: 'EDIT_FORM', payload: { targetName: 'expiration', value: '' } })
                                    }}
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
                                                います。
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