const wikipediaList = (state={'en':[], 'ja':[], 'zh':[]}, action) => {
    switch (action.type) {
        case 'Wikipedia_Search_Result_Setting':    
            return Object.assign(...state, action.entry);
        default: 
            return state;
    }
}

export default wikipediaList;