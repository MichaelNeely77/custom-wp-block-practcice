wp.blocks.registerBlockType('neely/custom-block',{
    title: 'Company Contact Information',
    icon: 'money',
    category: 'design',
    attributes: {
        companyName: {type: 'string'},
        companyPhone: {type: 'string'},
        companyAddress: {type: 'string'},
        companyAddress2: {type: 'string'},
        companyCity: {type:'string'},
        companyState: {type:'string'},
        commpanyZip: {type:'string'}
    },
    edit: function(props){
        return
    },
    save: function(props){

    }
})