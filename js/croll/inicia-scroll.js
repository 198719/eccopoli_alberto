var cita = basicScroll.create({

    elem: document.querySelector('.cita'),
    
    from: 'top-bottom',
    
    to: 'bottom-middle',
    
    props: {
    
    '--cita': {
    
    from: '60%',
    
    to: '0'
    
    },
    
    '--cita-opacidad': {
    
    from: 0,
    
    to: 1
    
    }
    
    }
    
    });
    
    cita.start();