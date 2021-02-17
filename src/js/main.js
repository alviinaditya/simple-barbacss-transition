import "../style/main.scss";
import barba from '@barba/core';
import barbaCSS from '@barba/css';

barba.use(barbaCSS);

barba.hooks.before((data) => {
    document.querySelector('body').style.setProperty('--page-background', data.current.container.dataset.background);
});

barba.init({
    transitions:[
        {
            name: 'index',
            sync: true,
            to: { namespace: ['index'] },
            once() {},
            leave() {},
            enter() {},
        },
        {
            name: 'slide-up',
            sync: true,
            to: { namespace: ['slide-up'] },
            leave() {},
            enter() {},
        },
        {
            name: 'slide-left',
            sync: true,
            to: { namespace: ['slide-left'] },
            leave() {},
            enter() {},
        },
        {
            name: 'slide-right',
            sync: true,
            to: { namespace: ['slide-right'] },
            leave() {},
            enter() {},
        },
    ]
});