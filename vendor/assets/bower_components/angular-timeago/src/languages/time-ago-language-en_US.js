'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['en_US'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'назад',
    suffixFromNow: 'сейчас',
    seconds: 'менее минуты назад',
    minute: 'about a minute',
    minutes: '%d минут',
    hour: 'один час назад',
    hours: '%d часов',
    day: 'день',
    days: '%d суток',
    month: 'about a month',
    months: '%d months',
    year: 'about a year',
    years: '%d год',
    numbers: []
  };
});

// 'use strict';

// angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
//   timeAgoSettings.strings['en_US'] = {
//     prefixAgo: null,
//     prefixFromNow: null,
//     suffixAgo: 'ago',
//     suffixFromNow: 'from now',
//     seconds: 'less than a minute',
//     minute: 'about a minute',
//     minutes: '%d minutes',
//     hour: 'about an hour',
//     hours: 'about %d hours',
//     day: 'a day',
//     days: '%d days',
//     month: 'about a month',
//     months: '%d months',
//     year: 'about a year',
//     years: '%d years',
//     numbers: []
//   };
// });
