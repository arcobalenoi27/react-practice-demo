import React, { Component } from 'react'
import {connect} from 'react-redux'

class NotFoundResult extends Component {
    constructor(props) {
        super(props);
        var { props: { keyword, language} } = this;
        this.state = {
            keyword,
            language
        };
    }
    
    render() {
        var { props: { keyword, language} } = this;
        console.info('language: ', language);
        if(language == 'en'){
            return (
                <div className="search-result-item not-found">
                    <p>Your search 「
                    <span  className="keyword-not-found">
                    
                    { keyword }
                     
                    </span>
                        」 
                    did not match any documents.
                    </p>
                    <p>Suggestions：</p>
                    <li>Make sure all words are spelled correctly.
                    </li>
                    <li>Try different keywords.</li><li>Try more general keywords.</li>
                </div>
            )
        } else if(language == 'ja') {
            return (
                <div className="search-result-item not-found">
                    <p>
                    「
                    <span className="keyword-not-found">
                    { 
                        keyword 
                    }
                    </span>
                    」に一致する情報は見つかりませんでした。　検索ツールをリセット
                    </p>
                    <p>
                    検索のヒント：
                    </p>
                    <li>キーワードに誤字．脱字がないか確認します。
                    </li>
                    <li>別のキーワードを試してみます。</li>
                    <li>もっと一般的なキーワードに変えてみます。
                    </li>
                
                </div>
            )
        } else {
            return (
                <div className="search-result-item not-found">
                    <p>找不到符合搜尋字詞「
                    <span  className="keyword-not-found">
                    
                    { keyword }
                     
                    </span>
                     
                    」的文件。
                    </p>
                    <p>建議：</p>
                    <li>請檢查有無錯別字
                    </li>
                    <li>請換用不同的查詢字詞</li>
                    <li>
                        請改試較常用的字詞搜尋結果
                    </li>
                </div>
            )
        }
        
        
    }


}

export default connect((state, ownProps) => {
    return {keyword: state.wikipediaTerm.term, language: state.wikipediaLanguage};
}, null)(NotFoundResult);