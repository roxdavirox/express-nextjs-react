const React = require("react");
const fetch = require("isomorphic-fetch");

const Form = ({ product, options }) => {

  return (
    <>
      <div>Produto: {product.name} </div>
      <ul>
        {Object.keys(options).map(k => 
          <li key={options[k]._id}>{options[k].name}
            <ul>
              {options[k].items.map(item => <li key={item._id}>{item.name}</li>)}
            </ul>
          </li>
        )}
      </ul>
    </>
  )
}

Form.getInitialProps = async ({ req, res, query }) => {
  try {
    const response = await fetch(
      `https://mktp.herokuapp.com/form/${query.id}`
    );
    const data = await response.json();
    console.log('data', data);
    const { product, options } = data;
    return { product, options };
  } catch (e) {
    console.log('error ====> : ', e);
  }
};

module.exports = Form;
