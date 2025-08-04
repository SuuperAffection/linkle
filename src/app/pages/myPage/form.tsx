'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { Button } from 'primereact/button'
import { Recruitment } from '@/lib/components/recruitment/recruitment'
import { useRouter } from 'next/navigation'
import PostModal from './postModal/postModal'
import { useEffect, useReducer } from 'react'
import { defaultState, reducer } from './reducer'
import { Action } from './Action'
import { Progress } from '@/lib/components/progress/progress'

export default function Form() {
    const router = useRouter()
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)

    useEffect(() => {
        Action.getMyPost(dispatch)
    }, [])

    const onBack = () => {
        Action.editForm(dispatch, 'post', undefined)
    }

    return (
        <>
            <div className={styles.masterBox}>
                <Linkleheader>
                    <div>
                        <Button
                            label='投稿'
                            className={styles.postBtn}
                            onClick={() => {
                                Action.editForm(dispatch, 'post', undefined)
                            }}
                        />
                    </div>
                </Linkleheader>

                <div className={styles.body}>
                    <div className={styles.title}>
                        <p>プロフィール</p>
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
                                            <td>{state.user.displayName ?? ''}</td>
                                        </tr>
                                        <tr>
                                            <th>学科</th>
                                            <td>{state.user.department ?? ''}</td>
                                        </tr>
                                        <tr>
                                            <th>連絡先</th>
                                            <td>{state.user.contact ?? ''}</td>
                                        </tr>
                                        <tr>
                                            <th>使える技術</th>
                                            <td>{state.user.techs ?? ''}</td>
                                        </tr>
                                        <tr>
                                            <th>コメント</th>
                                            <td>{state.user.comment ?? ''}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.editWrap}>
                                <Button
                                    label='編集'
                                    className={styles.editBtn}
                                    onClick={() => {
                                        router.push('/pages/editInfo')
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.title}>
                        <p>過去の投稿</p>
                    </div>


                    {state.myPost.map((v) =>
                        <div key={v.id} className={styles.posts}>
                            <Recruitment
                                title={`${v.title}`}
                                description={`${v.mainText}`}
                                tech={`${v.techs}`}
                                position={`${v.position}`}
                            />
                        </div>
                    )}
                </div>
            </div>

            {state.post &&
                <PostModal onBack={() => onBack()}></PostModal> //onBack作成
            }

            {state.isWaiting &&
                <Progress />
            }
        </>
    )
}