import React from 'react';
import connect from '@vkontakte/vkui-connect';

const useVK = () => {
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const [fetchedUser, setFetchedUser] = React.useState<any | undefined>(
    undefined
  );

  React.useEffect(() => {
    connect.subscribe((e: any) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          setFetchedUser(e.detail.data);
          break;
        case 'VKWebAppAccessTokenReceived':
          setToken(e.detail.data.access_token);
          break;
        default:
          console.log(e);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
    connect.send('VKWebAppGetAuthToken', { app_id: 7210223, scope: '' });
  }, []);

  return { token, fetchedUser };
};

export default useVK;
