import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from 'components/Layout/Header';
import HeaderLinks from 'containers/Layout/HeaderLinks';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';

const Layout = props => {
    const history = useHistory();
    useEffect(() => {
        if (!props.isLogged) {
            history.push('/login');
        }
    });
    return (
        <div>
            <Header
                brand={<Restaurant />}
                color='rose'
                leftLinks={''}
                rightLinks={<HeaderLinks />}
                fixed
            />
            <Parallax
                small
                filter
                image={require('assets/img/citrus-fruit.jpg')}
            />
            {props.children}
            <SouperFooter />
        </div>
    );
};

export default Layout;
