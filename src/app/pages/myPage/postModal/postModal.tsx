'use client'

import { InputText } from 'primereact/inputtext'
import styles from './postModal.module.css'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { useReducer } from 'react'
import { defaultState, reducer } from './reducer'
import { Action } from './action'

export type Props = {
    onBack: () => void
}

export default function PostModal(props: Props) {
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)

    return (
        <>
            <div className={styles.masterBox}
                onClick={(e) => {
                    props.onBack()
                    e.stopPropagation()
                }}
            >
                <div className={styles.modalArea} onClick={(e) => { e.stopPropagation() }}>

                    <table className={styles.tbl}>
                        <tbody>
                            <tr>
                                <td>
                                    <p>タイトル</p>
                                </td>
                                <td>
                                    <InputText
                                        className={styles.input}
                                        value={`${state.title}`}
                                        onChange={(e) => {
                                            Action.editForm(dispatch, 'title', `${e.target.value}`)
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>本文</p>
                                </td>
                                <td>
                                    <InputTextarea
                                        autoResize
                                        rows={5}
                                        cols={30}
                                        value={`${state.mainText}`}
                                        onChange={(e) => {
                                            Action.editForm(dispatch, 'mainText', `${e.target.value}`)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>使用する技術</p>
                                </td>
                                <td>
                                    <InputText
                                        className={styles.input}
                                        value={`${state.techs}`}
                                        onChange={(e) => {
                                            Action.editForm(dispatch, 'techs', `${e.target.value}`)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>募集ポジション</p>
                                </td>
                                <td>
                                    <InputText
                                        className={styles.input}
                                        value={`${state.position}`}
                                        onChange={(e) => {
                                            Action.editForm(dispatch, 'position', `${e.target.value}`)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>連絡ツール</p>
                                </td>
                                <td>
                                    <InputText
                                        className={styles.input}
                                        value={`${state.contactTool}`}
                                        onChange={(e) => {
                                            Action.editForm(dispatch, 'contactTool', `${e.target.value}`)
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={styles.btnArea}>
                        <Button
                            className={styles.postBtn}
                            label='投稿'
                            disabled={
                                (state.title === '' ?
                                    true : state.mainText === '' ?
                                        true : state.techs === '' ?
                                            true : state.position === ''
                                                ? true : state.contactTool === '' ?
                                                    true : false)
                            }
                            onClick={() => {
                                Action.post(dispatch, {
                                    title: state.title,
                                    mainText: state.mainText,
                                    techs: state.techs,
                                    position: state.position,
                                    contactTool: state.contactTool
                                })
                                props.onBack()
                            }}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}