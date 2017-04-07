const wikipediaLoad = (state='not search yet', action) => {
    switch (action.type) {
        case 'Wikipedia_Search_Loading':
            return 'loading'
        case 'Wikipedia_Search_Loaded':
            return 'loaded'
        default:
            return state
    }
}

export default wikipediaLoad;