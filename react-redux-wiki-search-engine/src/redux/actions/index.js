import $ from 'jquery'

export const setList = (entry) => ({ type: 'Wikipedia_Search_Result_Setting', entry});

export const setTerm = (term) => ({type: 'Wiki_Term', term});

export const setLanguage = (language) => ({type: 'Change_Language', language});

export const search = (term, dispatch, state) => {
    dispatch({ type: 'Wikipedia_Search_Loading'});
    const API_KEY = '';
    var languages = ['en', 'ja', 'zh'];
    let protocol = 'https://';
    let apiParameter = `.wikipedia.org/w/api.php?action=query&list=search&srsearch=`;
    
    let result = Object.assign({});
    result.totalhits = Object.assign({});
    let api;
    let newEntry;
    let newWiki = {
        en: [],
        ja: [],
        zh: []
    };
    languages.forEach(function(emt) {
        
         api = `${protocol}${emt}${apiParameter}${term}&prop=info&utf8=&format=json`;
        
        
        $.ajax({
            url: api,
            dataType:'jsonp',
            success: function(data) {
                var hits = data.query.searchinfo.totalhits;
                
                data.query.search.map(function(entry) {
                    newEntry = {
                        title: entry.title,
                        size: entry.size,
                        wordcount: entry.wordcount,
                        snippet: entry.snippet,
                        timestamp: entry.timestamp
                    };
                    
                  newWiki[`${emt}`].push(newEntry);
                     
                });
                
//                result[`${emt}`] = Object.assign(...result, data.query.search);
//                result.totalhits[emt] = Object.assign(...result.totalhits, hits);
                console.log('setList ', newWiki);
                dispatch(setList({entry: newWiki}));
                dispatch(setTerm({term}));
            }
        });
        
    });
    
}