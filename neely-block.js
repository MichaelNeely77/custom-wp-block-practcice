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
        companyZip: {type:'string'}
    },
    edit: function(props){
        return React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyName,
            placeholder: "Company Name",
            onChange: updateCompanyName
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Phone"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyPhone,
            placeholder: "Company Phone",
            onChange: updateCompanyPhone
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Address"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyAddress,
            placeholder: "Company Address",
            onChange: updateCompanyAddress
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Address 2"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyAddress2,
            placeholder: "Company Address 2",
            onChange: updateCompanyAddress2
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company City"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyCity,
            placeholder: "Company City",
            onChange: updateCompanyCity
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company State"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyState,
            placeholder: "Company State",
            onChange: updateCompanyState
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Zip Code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyZip,
            placeholder: "Company Zip Code",
            onChange: updateCompanyZip
          })));
    },
    save: function(props){
        return null;
    }
})