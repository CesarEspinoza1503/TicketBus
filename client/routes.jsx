import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx'
import ResolutionDetail from './resolutions/ResolutionDetail.jsx'

import Main from './Main.jsx'
import About from './About.jsx'
import viaje from './viaje.jsx'
import MyAccount from './MyAccount.jsx'
import Payment from './Payment.jsx'
import Recibo from './Recibo.jsx'

FlowRouter.route('/',{
  action(){
    mount(MainLayout, {
      content: (<Main />)
    })
  }
});

FlowRouter.route('/viaje',{
  action(){
    mount(MainLayout, {
      content: (<viaje />)
    })
  }
});

FlowRouter.route('/Payment',{
  action(params){
    mount(MainLayout, {
      content: (<Payment />)
    })
  }
});

FlowRouter.route('/Recibo',{
  action(params){
    mount(MainLayout, {
      content: (<Recibo />)
    })
  }
});

FlowRouter.route('/about',{
  action(){
    mount(MainLayout, {
      content: (<About />)
    })
  }
});

FlowRouter.route('/resolutions/:id',{
  action(params){
    mount(MainLayout, {
      content: (<ResolutionDetail id = {params.id} />)
    })
  }
});

FlowRouter.route('/myaccount',{
  action(params){
    mount(MainLayout, {
      content: (<MyAccount />)
    })
  }
});


