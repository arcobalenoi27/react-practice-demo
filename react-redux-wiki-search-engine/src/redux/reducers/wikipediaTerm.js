const wikipediaTerm = (state='', action) => {
    switch(action.type) {
        case 'Wiki_Term':
            return action.term;
        default:
            return state;
    }
}

export default wikipediaTerm;