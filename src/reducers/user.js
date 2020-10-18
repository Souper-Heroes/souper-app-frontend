const defaultState = {
  name: 'Adam Smith',
  email: 'abc@gmail.com',
  postCode: 'N5 4GH'
};

const user = (state = { ...defaultState }) => state;

export default user;
