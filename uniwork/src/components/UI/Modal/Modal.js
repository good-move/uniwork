import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import styles from './Modal.css';

class Modal extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        return (this.props.isShown !== nextProps.isShown) ||
        (this.props.children !== nextProps.children);
    };

    render() {
        return (
            <Aux>
                <Backdrop
                    isShown={this.props.isShown}
                    click={this.props.handleCloseModal} />
                <div className={`${styles.Modal}
                ${!this.props.isShown ? styles.hidden : ''}`}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

Modal.propTypes = {
    handleCloseModal: PropTypes.func,
    isShown: PropTypes.bool,
};

export default Modal;
