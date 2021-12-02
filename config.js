const config = {
  auth_api: {
    base_url: process.env.NEXT_PUBLIC_AUTH_URL,
    login_route: "/auth/login",
    signup_route: "/auth/signup",
    verify_auth: "/auth/verify",
    add_friend_route:"/friends/addfriend/",//:user_name
    unfriend_route:"/friends/unfriend/",//:user_name
    // get_all_friends:"/friends/getallfriends",
    get_email_route:"/auth/getemail/",
    get_bio_route:"/auth/getbio/",
    friend_count_route:"/friends/friendcount/",
    add_feedback_route:"/feedback/addfeedback",
    get_avg_feedback:"/feedback/getavgfeedbacks", //admin only
    add_report_route:"/report/add",
    get_all_reports:"/report/allreports",//admin only
    delete_account:"/auth/delete/",//:id
    get_user_by_username:"/auth/user/",//:user_name
    update_user_name:"/auth/update/user_name",
    update_password:"/auth/update/password",
    update_email:"/auth/update/email",
    update_bio:"/auth/update/bio",
    block_route:"/block/blockuser/",//:user_name
    unblock_route:"/block/unblock/",//:user_name
    get_all_blocked:"/block/getallblocked",//admin only
    get_block_count:"/block/blockcount",
    get_all_blocked_by:"/block/getallblocked/by",//admin only
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
