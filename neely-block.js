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
        return React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Name"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company Name"
          }), /*#__PURE__*/React.createElement("label", null, "Company Phone"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company Phone"
          }), /*#__PURE__*/React.createElement("label", null, "Company Address"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company Address"
          }), /*#__PURE__*/React.createElement("label", null, "Company Address 2"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company Address 2"
          }), /*#__PURE__*/React.createElement("label", null, "Company City"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company City"
          }), /*#__PURE__*/React.createElement("label", null, "Company State"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company State"
          }), /*#__PURE__*/React.createElement("label", null, "Company Zip Code"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: "",
            placeholder: "Company Zip Code"
          }));
    },
    save: function(props){

    }
})