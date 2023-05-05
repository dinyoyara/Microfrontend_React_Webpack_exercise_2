import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
    const content = <h2>Hello world</h2>;
    ReactDOM.render(content, element);
};

if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#_marketing_dev_root');
    if (root) {
        mount(root);
    }
}

export { mount };
