
$(function(){'use strict';var GLOBAL_NAV_SAMPLING_RATIO=10,track=Wikia.Tracker.buildTrackingFunction({category:'global-navigation-sampled',trackingMethod:'ga'});function clickTrackingHandler(ev){var element=$(ev.target);if(element.hasClass('sprite')){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_IMAGE,label:'wikia-logo-sampled'});}else if(element.hasClass('wikia-button')){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_BUTTON,label:'start-wiki-sampled'});}else if(element.hasClass('ajaxRegister')){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_TEXT,label:'signup-sampled'});}else if(element.hasClass('login-button')){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_BUTTON,label:'login-sampled'});}else if(element.parents('.topNav').exists()){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_TEXT,label:'hub-name-link-sampled'});}else if(element.parents('.catnav, .subnav').exists()){track({action:Wikia.Tracker.ACTIONS.CLICK_LINK_TEXT,label:'hub-submenu-link-sampled'});}}
function hoverMenuTrackingHandler(ev){var element=$(ev.target);if(element.parents('.GlobalNavigation').exists()){track({action:Wikia.Tracker.ACTIONS.HOVER,label:'hubs-menu-open-sampled'});}else if(element.parents('.AccountNavigation').exists()){track({action:Wikia.Tracker.ACTIONS.HOVER,label:'user-menu-open-sampled'});}else if(element.parents('.WallNotifications').exists()){track({action:Wikia.Tracker.ACTIONS.HOVER,label:'notifications-menu-open-sampled'});}}
function isSampledPV(){return GLOBAL_NAV_SAMPLING_RATIO>=Math.floor((Math.random()*100+1));}
if(isSampledPV()){Wikia.log('Global nav tracking enabled','info','GlobalNav');$('#WikiaHeader').on('click',clickTrackingHandler);$('#WikiaHeader').on('hovermenu-shown',hoverMenuTrackingHandler);}else{Wikia.log('Global nav tracking disabled','info','GlobalNav');}});