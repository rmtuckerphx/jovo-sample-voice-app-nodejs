// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  alexaSkill: {
    nlu: 'alexa',
    manifest: {
      permissions: [
        //   {
        //     name: 'alexa::devices:all:address:full:read',
        //   },
        //   {
        //     name: 'alexa:devices:all:address:country_and_postal_code:read',
        //   },
        //   {
        //     name: 'alexa::profile:name:read',
        //   },
        //   {
        //     name: 'alexa::profile:given_name:read',
        //   },
        //   {
        //     name: 'alexa::profile:email:read',
        //   },
        //   {
        //     name: 'alexa::profile:mobile_number:read',
        //   },
        //   {
        //     name: 'alexa::household:lists:read',
        //   },
        //   {
        //     name: 'alexa::household:lists:write',
        //   },
        //   {
        //     name: 'payments:autopay_consent',
        //   },
        //   {
        //     name: 'alexa::alerts:reminders:skill:readwrite',
        //   },
        //   {
        //     name: 'alexa::devices:all:geolocation:read',
        //   },
        //   {
        //     name: 'alexa::devices:all:notifications:write',
        //   },
      ],
    },
  },
  googleAction: {
    nlu: 'dialogflow',
  },
  endpoint: '${JOVO_WEBHOOK_URL}',
};
