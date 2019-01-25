const stupidPostStyles = theme => ({
    card : {
        display : 'flex'
    },
    cardContentLayout : {
        width : '100%'
    },
    cardDetails : {
        display : 'flex',
        width :  '100%'
    },

    cardMedia : {
        width : 160
    },
    cardHead : {
        display : 'flex'
    },

    grow : {
        flexGrow : 1
    },

    greenDot : {
        borderRadius : '50%',
        width : 20,
        height : 20,
        backgroundColor : 'limegreen',
        marginTop : theme.spacing.unit / 4,
        marginLeft : theme.spacing.unit
    },

    redDot : {
        borderRadius : '50%',
        width : 20,
        height : 20,
        backgroundColor : 'orangered',
        marginTop : theme.spacing.unit / 4,
        marginLeft : theme.spacing.unit
    }

});

export default stupidPostStyles;