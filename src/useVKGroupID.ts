import React from 'react';

const getQueryParams = (): QueryParams => {
  return window.location.search
    .slice(1)
    .split('&')
    .map(queryParam => {
      let kvp = queryParam.split('=');
      return { key: kvp[0], value: kvp[1] };
    })
    .reduce((query: any, kvp) => {
      const value = Number(kvp.value);
      query[kvp.key] = isNaN(value) ? kvp.value : value;
      return query;
    }, {});
};

const useVKGroupID = () => {
  const [groupID, setGroupID] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const { vk_group_id } = getQueryParams();
    setGroupID(vk_group_id);
  }, [window.location.search]);

  return groupID;
};

export default useVKGroupID;
