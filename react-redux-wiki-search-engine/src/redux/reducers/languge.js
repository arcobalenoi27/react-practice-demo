const wikipediaLanguage = (state='en', action) => {
    switch (action.type) {
        case 'Change_Language':
            return action.language;
        default: 
            return state;
    }
}

export default wikipediaLanguage;