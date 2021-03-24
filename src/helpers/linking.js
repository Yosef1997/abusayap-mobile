const config = {
  screens: {
    Auth: {
      screens: {
        ResetPassword: 'reset',
      },
    },
  },
};

const linking = {
  prefixes: ['abusayap://app'],
  config,
};

export default linking;
