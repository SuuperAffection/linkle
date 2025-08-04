'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { useEffect, useReducer } from 'react'
import { defaultState, reducer } from './reducer'
import { Action } from './action'
import { useRouter } from 'next/navigation'

export default function Form() {
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)
    const router = useRouter()

    useEffect(() => {
        Action.getUserData(dispatch)
    }, [])

    return (
        <>
            <div className={styles.masterBox}>
                <Linkleheader>

                </Linkleheader>

                <div className={styles.body}>

                    <div className={styles.title}>
                        <p>プロフィールを編集</p>
                    </div>

                    <div className={styles.profile}>
                        <div className={styles.profileBody}>
                            <div className={styles.iconWrap}>
                                <i className='pi pi-user'></i>
                            </div>
                            <div className={styles.bodyWrap}>
                                <table className={styles.tbl}>
                                    <tbody>
                                        <tr>
                                            <th>名前</th>
                                            <td>
                                                <InputText
                                                    className="p-inputtext-lg"
                                                    value={state.user.displayName ?? ''}
                                                    onChange={(e) => {
                                                        Action.editForm(dispatch, 'displayName', e.target.value)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>学科</th>
                                            <td>
                                                <InputText
                                                    className="p-inputtext-lg"
                                                    value={state.user.department ?? ''}
                                                    onChange={(e) => {
                                                        Action.editForm(dispatch, 'department', e.target.value)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>連絡先</th>
                                            <td>
                                                <InputText
                                                    className="p-inputtext-lg"
                                                    value={state.user.contact ?? ''}
                                                    onChange={(e) => {
                                                        Action.editForm(dispatch, 'contact', e.target.value)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>使える技術</th>
                                            <td>
                                                <InputText
                                                    className="p-inputtext-lg"
                                                    value={state.user.techs ?? ''}
                                                    onChange={(e) => {
                                                        Action.editForm(dispatch, 'techs', e.target.value)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>コメント</th>
                                            <td>
                                                <InputTextarea
                                                    rows={3}
                                                    cols={26}
                                                    autoResize
                                                    value={state.user.comment ?? ''}
                                                    onChange={(e) => {
                                                        Action.editForm(dispatch, 'comment', `${e.target.value}`)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className={styles.btnWrap}>
                        <Button
                            label='保存'
                            className={styles.saveBtn}
                            disabled={state.user.displayName === ''}
                            onClick={() => {
                                Action.saveUserData(dispatch, state.user)
                                router.back()
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}