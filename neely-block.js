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
        function updateCompanyName(event){ props.setAttributes({companyName: event.target.value})}
        function updateCompanyPhone(event){props.setAttributes({companyPhone: event.target.value})}
        function updateCompanyAddress(event){props.setAttributes({companyAddress: event.target.value})}
        function updateCompanyAddress2(event){props.setAttributes({companyAddress2: event.target.value})}
        function updateCompanyCity(event){props.setAttributes({companyCity: event.target.value})}
        function updateCompanyState(event){props.setAttributes({companyState: event.target.value})}
        function updateCompanyZip(event){props.setAttributes({companyZip: event.target.value})}


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
        return React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, props.attributes.companyName), /*#__PURE__*/React.createElement("div", null, props.attributes.companyPhone), /*#__PURE__*/React.createElement("span", null, props.attributes.companyAddress), /*#__PURE__*/React.createElement("span", null, props.attributes.companyAddress2), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, props.attributes.companyCity), /*#__PURE__*/React.createElement("span", null, props.attributes.companyState), /*#__PURE__*/React.createElement("span", null, props.attributes.companyZip)));
    }
})

/**
 * 
 * HTML for form that was converte4d to Reactjs in Babeljs.io
 * 
 * <div>
  <div>
<label>Company Name</label><br />
<input type="text" value={props.attributes.companyName} placeholder="Company Name" onChange={updateCompanyName} />
  </div>
  <div>
<label>Company Phone</label><br />
<input type="text" value={props.attributes.companyPhone} placeholder="Company Phone" onChange={updateCompanyPhone} />
  </div>
  <div>
<label>Company Address</label><br />
<input type="text" value={props.attributes.companyAddress} placeholder="Company Address" onChange={updateCompanyAddress} />
  </div>
  <div>
<label>Company Address 2</label><br />
<input type="text" value={props.attributes.companyAddress2} placeholder="Company Address 2" onChange={updateCompanyAddress2} />
  </div>
  <div>
  <label>Company City</label><br />
<input type="text" value={props.attributes.companyCity} placeholder="Company City" onChange={updateCompanyCity} />
  </div>
  <div>
  <label>Company State</label><br />
<input type="text" value={props.attributes.companyState} placeholder="Company State" onChange={updateCompanyState} />
  </div>
  <div>
  <label>Company Zip Code</label><br />
<input type="text" value={props.attributes.companyZip} placeholder="Company Zip Code" onChange={updateCompanyZip} />
  </div>
</div>
 */
