const initialState = {
  items: [
    { id: 1, description: '10 bananas', content: 'blah blah blah' },
    { id: 2, description: '2 pears', content: 'blah blah blah' },
    { id: 3, description: '100 cookies', content: 'blah blah blah' }
  ]
};

const item = (state = { ...initialState }, action) => {
  return state;
};

export default item;
