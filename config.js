const config = {
  auth_api: {
    base_url: process.env.NEXT_PUBLIC_AUTH_URL,
    login_route: "/Same/login",
    signup_route: "/Same/signup",
    verify_auth: "/Same/accounts/getCookieOwner",
  },
  game_api: {
    base_url: process.env.NEXT_PUBLIC_GAME_URL,
    get_all_games_route: "/game/all",
    get_game_by_id_route: "/game/",
    get_lfg_lobbies_route: "/lfg/",
    get_user_lfg_lobbies_route: "/lfg/user/",
    get_lfg_lobbies_by_id_route: "/lfg/lobby/",
    create_lfg_lobby_route: "/lfg/create",
    get_feed_posts_route: "/feed/",
    add_post_route: "/feed/post",
    join_lobby_route: "/lfg/join",
    get_members_by_lobby_route: "/lfg/members/",
  },

  chat_api: {
    base_url: process.env.NEXT_PUBLIC_CHAT_URL,
    get_lobby_messages_route: "/inbox/messages",
    send_message_route: "/inbox/message",
  },

  voice_api: {
    base_url: process.env.NEXT_PUBLIC_VOICE_URL,
    get_users_in_voice_chat: "/voice/state/",
  },
};

export default config;
