import React from 'react'
import LanguageItem from './LanguageItem'

const LanguagesList = () => (
    <nav className={`lang-setting`}>
        <ul>
            <LanguageItem lang="en">
                English
            </LanguageItem>
            {" "}
            <LanguageItem lang="ja">
                日本語
            </LanguageItem>
            {" "}
            <LanguageItem lang="zh">
                中文
            </LanguageItem>
        </ul>
    </nav>

)

export default LanguagesList;