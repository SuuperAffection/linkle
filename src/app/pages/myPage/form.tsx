'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { Button } from 'primereact/button'
import { Recruitment } from '@/lib/components/recruitment/recruitment'
import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter()

    return (
        <>
            <div className={styles.masterBox}>
                <Linkleheader>

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
                                            <td>大串</td>
                                        </tr>
                                        <tr>
                                            <th>学年</th>
                                            <td>4年</td>
                                        </tr>
                                        <tr>
                                            <th>連絡先</th>
                                            <td>ogushi@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>使える技術</th>
                                            <td>docker / Go / Python</td>
                                        </tr>
                                        <tr>
                                            <th>学科</th>
                                            <td>高度情報処理研究学科</td>
                                        </tr>
                                        <tr>
                                            <th>コメント</th>
                                            <td>わからないことがあれば何でも教えます。</td>
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

                    <div className={styles.posts}>
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
        </>
    )
}