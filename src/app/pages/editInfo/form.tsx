'use client'

import { Linkleheader } from '@/lib/components/linkleheader/header'
import styles from './form.module.css'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

export default function Form() {

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
                                                <InputText className="p-inputtext-lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>学年</th>
                                            <td>
                                                <InputText className="p-inputtext-lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>連絡先</th>
                                            <td>
                                                <InputText className="p-inputtext-lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>使える技術</th>
                                            <td>
                                                <InputText className="p-inputtext-lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>学科</th>
                                            <td>
                                                <InputText className="p-inputtext-lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>コメント</th>
                                            <td>
                                                <InputTextarea rows={3} cols={26} autoResize />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className={styles.btnWrap}>
                        <Button label='保存' className={styles.saveBtn} />
                    </div>
                </div>
            </div>
        </>
    )
}