declare module '@vkontakte/vkui-connect';

type Panels = 'onboarding' | 'suggestion' | 'ideation' | 'dashboard' | 'finish';

interface QueryParams {
  vk_access_token_settings: string;
  vk_app_id: string;
  vk_are_notifications_enabled: string;
  vk_group_id: string;
  vk_is_app_user: string;
  vk_is_favorite: string;
  vk_language: string;
  vk_platform: string;
  vk_ref: string;
  vk_user_id: string;
  vk_viewer_group_role: string;
  sign: string;
}
