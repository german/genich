'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['ru_RU'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'назад',
    suffixFromNow: 'сейчас',
    seconds: 'менее минуты назад',
    minute: 'about a minute',
    minutes: '%d минут',
    hour: 'один час назад',
    hours: 'about %d hours',
    day: 'день',
    days: '%d суток',
    month: 'about a month',
    months: '%d months',
    year: 'about a year',
    years: '%d год',
    numbers: []
  };
});
