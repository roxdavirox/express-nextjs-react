const React = require("react");

const Form = ({ msg }) => <div>Ola mundo {msg}</div>;

Form.getInitialProps = async ({ req, res, query }) => {
  return { msg: req.body.msg };
};

module.exports = Form;
