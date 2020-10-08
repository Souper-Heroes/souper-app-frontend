import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';

const mapStateToProps = state => ({
  items: state.item.items
});

export default connect(mapStateToProps)(ItemListings);
